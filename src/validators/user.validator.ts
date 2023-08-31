import { z } from 'zod'

export const createUserInputValidator = z.object({
  email: z.string().email(),
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  username: z.string().trim().min(6),
  about: z.string().default(''),
  linkedIn: z.string().url().optional(),
  github: z.string().url().optional(),
})

export type CreateUserInput = z.infer<typeof createUserInputValidator>
