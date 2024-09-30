// url: /api/auth/unauthorized

import { NextResponse } from 'next/server';
import { msgs } from '@/constants/messages';

export const GET = async () => {
  return NextResponse.json({ message: msgs.unauthorized }, { status: 401 });
};
