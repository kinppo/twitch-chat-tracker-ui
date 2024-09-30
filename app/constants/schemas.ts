import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(1, { message: 'required' }),
});

export const registerSchema = z.object({
  name: z.string().min(1, { message: 'required' }),
  email: z.string().email('Enter a valid email'),
  password: z.string().min(8, { message: 'Must be 8 characters or more' }),
});

export const searchSchema = z.object({
  username: z.string().min(1, { message: 'required' }),
});
