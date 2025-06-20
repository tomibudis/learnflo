import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.session) {
    return NextResponse.json({ error: error?.message || 'Login failed' }, { status: 401 });
  }

  const { access_token, refresh_token } = data.session;

  // Set cookies
  const res = NextResponse.json({ success: true });
  res.headers.set(
    'Set-Cookie',
    [
      `sb-access-token=${access_token}; Path=/; Secure; SameSite=Lax; HttpOnly`,
      `sb-refresh-token=${refresh_token}; Path=/; Secure; SameSite=Lax; HttpOnly`,
    ].join(', '),
  );
  return res;
}
