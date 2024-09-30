import { ReactNode } from 'react';
import { User } from '@prisma/client';

export type Route = {
  name: string;
  pathname: string;
  icon?: ReactNode;
  searchParams?: string;
  items?: Route[];
};

export type Response<T> =
  | { success: true; data: T }
  | { success: false; error: string };

export type SearchParams = { [key: string]: string | string[] | undefined };

export type UserWithoutPassword = Omit<User, 'password'>;
