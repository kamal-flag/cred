import { NextRequest, NextResponse } from 'next/server';
import { BASE_URL } from '../config';

export default function middleware(req) {
  const { 'cred.token': token, 'cred.role': role } = req.cookies;
  const url = req.url;

  if (
    req.nextUrl.pathname.startsWith('/img') ||
    req.nextUrl.pathname.startsWith('/font')
  ) {
    return NextResponse.rewrite(new URL(req.url));
  }
  if (token === undefined && !url.includes('/login')) {
    return NextResponse.redirect(`${BASE_URL}/auth/login`);
  }

  if (token !== undefined && url === `${BASE_URL}/`) {
    return NextResponse.redirect(`${BASE_URL}/entreprise`);
  }

  if (token !== undefined && url.includes('admin') && role != 2) {
    return NextResponse.redirect(`${BASE_URL}/entreprise`);
  }
}
