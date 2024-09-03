import { z } from 'zod';

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 1;

export const paginationSchema = z.object({
    page: z.number({coerce: true}).min(1).optional().default(DEFAULT_PAGE_NUMBER),
    limit: z.number({coerce: true}).min(1).max(50).optional().default(DEFAULT_PAGE_LIMIT)
});