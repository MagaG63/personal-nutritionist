import z from 'zod';

export const bzy = z.object({
  age: z.string(),
  height: z.string(),
  weight: z.string(),
  gender: z.enum(['male', 'female']),
  activity: z.enum(['1', '1.2', '1.375', '1.55', '1.725', '1.9']),
  goal: z.enum(['loss', 'maintenance', 'gain']),
});

export type BzyType = z.infer<typeof bzy>;