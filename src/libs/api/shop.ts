import { generateCRUD } from '@Libs/http';

export interface DiseasePrams {
    limit?: number;
    offset?: number;
    [key: string]: any;
}

const shopsApi = generateCRUD(
    'shops',
    (http, path) => ({

    }),
    { hasPagination: true },
);

export default shopsApi;
