import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const isNonAuthGroup =
    req.nextUrl.pathname.includes('/login') || req.nextUrl.pathname.includes('/signup');
  const isAuthGroup = req.nextUrl.pathname.startsWith('/dashboard');

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  // Get the access token from cookies (Supabase default cookie name)
  const accessToken = req.cookies.get('sb-access-token')?.value;
  let session = null;
  if (accessToken) {
    const { data } = await supabase.auth.getUser(accessToken);
    session = data?.user ? { user: data.user } : null;
  }

  // If user is authenticated and tries to access /login or /signup, redirect to dashboard
  if (isNonAuthGroup && session) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // If user is not authenticated and tries to access /dashboard, redirect to login
  if (isAuthGroup && !session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/:path*'],
};
