import { z } from 'zod';
import { loginSchema, registerSchema, searchSchema } from '@/constants/schemas';

export type TLoginSchema = z.input<typeof loginSchema>;

export type TRegisterSchema = z.input<typeof registerSchema>;

export type TSearchSchema = z.input<typeof searchSchema>;
