import { z } from 'zod';

export const AuthorSchema = z.object({
  first_name: z.string(),
  location: z.string(),
  company: z.string(),
});
