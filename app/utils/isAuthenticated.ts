'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function isAuthenticated() {
  const session = await getServerSession(authOptions);
  return !!session?.user;
}
