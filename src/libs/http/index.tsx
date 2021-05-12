import { createContext, useContext, FunctionComponent, useState, useCallback, useEffect, useMemo } from 'react';

// Utilities
import useSWR, { ConfigInterface, keyInterface, mutate, SWRConfig } from 'swr';
import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
// import { fetcherFn, responseInterface } from 'swr/dist/types';
import { GetServerSidePropsContext } from 'next';
import QueryString from 'query-string';
import Cookies from 'js-cookie';
import Cookie from 'cookie';

// Contexts
import { useAlertContext } from '@Components/Alert/Context';

export const createHttp = (token?: string, baseURL: string = 'http://localhost:1337'): AxiosInstance => {
    const http = axios.create({
        baseURL: baseURL,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    if (token) {
        http.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
        http.interceptors.request.use((config) => {
            const cookiesToken = Cookies.get('token');
            if (cookiesToken) {
                config.headers['Authorization'] = `Bearer ${cookiesToken}`;
            }

            return config;
        });
    }

    if (process.env.NODE_ENV === 'development') {
        http.interceptors.request.use((config) => {
            // eslint-disable-next-line no-console
            // console.log('Http config', config);
            return config;
        });
    }

    // TODO: Check when call api with invalid token
    // http.interceptors.response.use(
    //     (response) => response,
    //     (error: Error) => {
    //         return Promise.reject(error);
    //     },
    // );

    http.defaults.paramsSerializer = (params) => {
        return QueryString.stringify(params);
    };

    return http;
};

export const http: AxiosInstance = ((): AxiosInstance => {
    return createHttp();
})();

export const uploadHttp = ((): AxiosInstance => {
    return createHttp(null, 'http://localhost:1337');
})();

export const reinitialize = (token?: string, baseURL: string = 'http://localhost:1337'): AxiosInstance => {
    return createHttp(token, baseURL);
};

export const getServerSideHttp = (context: GetServerSidePropsContext, baseURL = 'http://localhost:1337'): AxiosInstance => {
    const cookies = Cookie.parse(context.req.headers.cookie || '');
    return createHttp(cookies.token, baseURL);
};

interface ContextType {
    token: string;
    cmsHttp: AxiosInstance;
    userHttp: AxiosInstance;
    setToken(token: string): void;
}

const CONTEXT_VALUE: ContextType = {
    token: null,
    setToken: () => null,
    cmsHttp: createHttp(null, 'http://localhost:1337'),
    userHttp: createHttp(null, 'http://localhost:1337'),
};

const Context = createContext(CONTEXT_VALUE);

export const useHttpContext = () => useContext(Context);

interface HttpWrapperProps {
    token: string;
    onError?(error: Error, key: keyInterface): void;
}

// export const HttpWrapper: FunctionComponent<HttpWrapperProps> = (props) => {
//     let cmsHttp = createHttp(props.token, 'http://localhost:1337');
//     let userHttp = createHttp(props.token, 'http://localhost:1337');

//     const { alert } = useAlertContext();

//     const [token, setToken] = useState<string>(props.token);

//     useEffect(() => {
//         handleSetToken(props.token);
//     }, [props.token]);

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             const token = Cookies.get('token');
//             handleSetToken(token);
//         }
//     }, []);

//     const handleSetToken = useCallback((token) => {
//         setToken(token);

//         userHttp = createHttp(token, 'http://localhost:1337');
//         cmsHttp = createHttp(props.token, 'http://localhost:1337');
//     }, []);

//     const handleHttpError = useCallback((error, key) => {
//         if (props.onError) {
//             props.onError(error, key);
//         }

//         if (error?.response?.status === 401 && Cookies.get('token')) {
//             Cookies.remove('token');
//             handleSetToken(null);
//             mutate(key);
//         }

//         alert({
//             type: 'error',
//             title: 'Đã xảy ra lỗi',
//             text: getHttpErrorMessage(error),
//         });
//     }, []);

//     const httpContextValue: ContextType = {
//         token,
//         cmsHttp,
//         userHttp,
//         setToken: handleSetToken,
//     };

//     return (
//         <SWRConfig
//             value={{
//                 revalidateOnFocus: false,
//                 shouldRetryOnError: false,
//                 onError: handleHttpError,
//             }}
//         >
//             <Context.Provider value={httpContextValue}>{props.children}</Context.Provider>
//         </SWRConfig>
//     );
// };

// export const getHttpErrorMessage = (error: AxiosError) => {
//     const defaultMsg = 'Đã có lỗi xảy ra! Vui lòng thử lại hoặc liên hệ đến đội ngũ phát triển.';

//     try {
//         const response: AxiosResponse<any> = error.response || null;
//         const data: any = response.data || {};

//         return data.userMessage || defaultMsg;
//     } catch (error) {
//         return defaultMsg;
//     }
// };

// export interface HttpOptions extends ConfigInterface {
//     auth?: boolean;
// }

// export const useHttp = (key: keyInterface, fetcher?: fetcherFn<any>, options?: HttpOptions): responseInterface<any, any> => {
//     const { token, userHttp, cmsHttp } = useHttpContext();
//     const { auth = false, ...swrOptions } = options || {};

//     const isAuthenticated = useMemo(() => {
//         if (!auth) return true;

//         return !!token;
//     }, [token]);

//     // console.log('isAuthenticated', isAuthenticated, token);

//     return useSWR(!isAuthenticated ? null : key, fetcher.bind(null, { userHttp, cmsHttp }), swrOptions);
// };

interface CRUD {
    count: () => Promise<any>;
    find: (params?: any) => Promise<any>;
    create: (data: any) => Promise<any>;
    delete: (entityID: any) => Promise<any>;
    findOne: (entityID: any, params?: any) => Promise<any>;
    update: (entityID: any, data: any) => Promise<any>;
    [key: string]: (...args: any) => Promise<any>;
}

type CustomAPIs = (
    http: AxiosInstance,
    path: any,
) => {
    [key: string]: (...args: any) => Promise<any>;
};

interface CRUDOptions {
    sort?: string;
    hasPagination?: boolean;
    enablePublish?: boolean;
}

export const generateCRUD = (entity: string, customApis?: CustomAPIs, options: CRUDOptions = {}) => (http: AxiosInstance): CRUD => {
    const path: any = `/${entity}`;

    const apiOptions: CRUDOptions = {
        enablePublish: true,
        hasPagination: false,
        ...options,
    };

    const count = async () => {
        const response = await http.get(`${path}/count`);
        return response.data;
    };

    const find = async (params: any) => {
        const response = await http.get(`${path}`, {
            params: {
                ...params,
                ...(apiOptions.sort && { _sort: apiOptions.sort }),
                // _sort: 'published_at:DESC',
                // ...(apiOptions.enablePublish && { _publicationState: 'live' }),
            },
        });
        return response.data;
    };

    const pagination = async (params: any, _start = 0, _limit = 10) => {
        const response = await http.get(`${path}/pagination`, {
            params: {
                _start,
                _limit,
                ...params,
                ...(apiOptions.sort && { _sort: apiOptions.sort }),
                ...(apiOptions.enablePublish && { _publicationState: 'live' }),
            },
        });
        return response.data;
    };

    const findOne = async (entityID: any, params?: any) => {
        const response = await http.get(`${path}/${entityID}`, {
            params: {
                ...params,
            },
        });
        return response.data;
    };

    const create = async (data: any) => {
        const response = await http.post(`${path}`, data);
        return response.data;
    };

    const update = async (entityID: any, data: any) => {
        const response = await http.put(`${path}/${entityID}`, data);
        return response.data;
    };

    const deleteEnity = async (entityID: any) => {
        const response = await http.delete(`${path}/${entityID}`);
        return response.data;
    };

    return {
        find,
        count,
        create,
        update,
        findOne,
        delete: deleteEnity,
        ...(apiOptions.hasPagination && { pagination }),
        ...(!!customApis && { ...customApis(http, path) }),
    };
};
