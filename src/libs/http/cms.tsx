import { createHttp } from '@Libs/http';

// Utilities
import { GetServerSidePropsContext } from 'next';
import { AxiosInstance } from 'axios';
import Cookie from 'cookie';

// Config

export const http: AxiosInstance = ((): AxiosInstance => {
    return createHttp(null, 'http://localhost:1337');
})();

export const reinitialize = (token?: string, baseURL: string = 'http://localhost:1337'): AxiosInstance => {
    return createHttp('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIwNzE2ODkxLCJleHAiOjE2MjMzMDg4OTF9.e8uPG4c0bsLNx31Pf6SekT4s-yzkfxTcCtzNhWn6W6k', baseURL);
};

export const getServerSideHttp = (context: GetServerSidePropsContext, baseURL = 'http://localhost:1337'): AxiosInstance => {
    const cookies = Cookie.parse(context.req.headers.cookie || '');
    return reinitialize(cookies.token, baseURL);
};
