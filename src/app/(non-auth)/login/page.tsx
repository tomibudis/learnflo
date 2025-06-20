'use client';
import Link from 'next/link';
import React from 'react';
import { LoginForm, LoginFormValues } from '@/components/login-form/LoginForm';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSuccess = (_data: LoginFormValues) => {
    router.push('/dashboard');
  };

  return (
    <>
      <div className="mb-8">
        <h1>Welcome back</h1>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <LoginForm onSuccess={handleSuccess} />
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link className="text-indigo-600 hover:text-indigo-500 font-medium" href="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}
