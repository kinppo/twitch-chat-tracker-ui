'use server';

import { User } from '@prisma/client';
import { hash } from 'bcrypt';
import { Response } from '@/types/types';
import { TRegisterSchema } from '@/types/validation';
import db from '@/lib/db';

export const createUser = async (
  data: TRegisterSchema,
): Promise<Response<User>> => {
  try {
    data.password = await hash(data.password, 10);
    const newUser = await db.user.create({
      data,
    });

    return { success: true, data: newUser };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

export const isRegistred = async (
  email: string,
): Promise<Response<Boolean>> => {
  try {
    const exist = await db.user.findUnique({
      where: { email },
    });

    return { success: true, data: !!exist };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};
