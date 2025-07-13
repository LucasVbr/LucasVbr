import {z} from 'zod';

export const SocialSchema = z.object({
  name: z.string(),
  icon: z.string(),
  url: z.string(),
});