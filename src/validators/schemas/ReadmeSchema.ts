import { z } from 'zod';
import { AuthorSchema, SkillSchema, SocialSchema } from '.';

export const ReadmeSchema = z.object({
  author: AuthorSchema,
  socials: z.array(SocialSchema),
  skills: z.array(SkillSchema),
});
