'use server';

import { revalidatePath } from 'next/cache';
import { User } from '@prisma/client';
import { Response } from '@/types/types';
import { TRegisterSchema } from '@/types/validation';
import { createUser, isRegistred } from '@/services/users';

export const createUserAction = async (
  data: TRegisterSchema,
  path?: string,
): Promise<Response<User>> => {
  const result = await createUser(data);
  if (path) revalidatePath(path);
  return result;
};

export const isRegistredAction = async (
  email: string,
): Promise<Response<Boolean>> => {
  const result = await isRegistred(email);
  return result;
};
