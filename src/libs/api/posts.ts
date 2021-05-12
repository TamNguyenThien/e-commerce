import { generateCRUD } from '@Libs/http';

export interface DiseasePrams {
    limit?: number;
    offset?: number;
    [key: string]: any;
}

const postsApi = generateCRUD(
    'posts',
    (http, path) => ({

    }),
    { hasPagination: true },
);

export default postsApi;
