import { createContext, FunctionComponent, useContext } from 'react';

const DataTransferContext = createContext<any>(null);

export function useDataTransfer<T>(): T {
    return useContext<T>(DataTransferContext);
}
export const DataManager: FunctionComponent<any> = ({ children, ...props }) => {
    return <DataTransferContext.Provider value={{ ...props }}>{children}</DataTransferContext.Provider>;
};
