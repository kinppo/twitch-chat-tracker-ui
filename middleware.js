import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    if (token && pathname === '/auth/login') {
      return NextResponse.redirect(req.nextUrl.origin + '/');
    }

    if (!pathname.startsWith('/auth') && !token) {
      return NextResponse.redirect(req.nextUrl.origin + '/auth/login');
    }
  },
  {
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      authorized({ req, token }) {
        return NextResponse.next();
      },
    },
    pages: {
      signIn: '/auth/login',
      signOut: '/auth/login',
      error: '/api/auth/unauthorized',
    },
  },
);
