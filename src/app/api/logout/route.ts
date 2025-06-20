import { NextResponse } from 'next/server';

export async function POST() {
  // Expire the cookies by setting Max-Age=0
  const res = NextResponse.json({ success: true });
  res.headers.set(
    'Set-Cookie',
    [
      'sb-access-token=; Path=/; Max-Age=0; Secure; SameSite=Lax; HttpOnly',
      'sb-refresh-token=; Path=/; Max-Age=0; Secure; SameSite=Lax; HttpOnly',
    ].join(', '),
  );
  return res;
}
