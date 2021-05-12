import { generateCRUD } from '@Libs/http';

export interface DiseasePrams {
    limit?: number;
    offset?: number;
    [key: string]: any;
}

const productsApi = generateCRUD('products', (http, path) => ({}), { hasPagination: true });

export default productsApi;
