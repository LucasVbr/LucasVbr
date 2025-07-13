import {z} from 'zod';

export const SkillSchema = z.object({
  name: z.string(),
  icon: z.string(),
});