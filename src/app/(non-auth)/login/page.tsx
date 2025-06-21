'use client';

import Link from 'next/link';
import React from 'react';
import { LoginForm } from '@/components/login-form/LoginForm';

export default function LoginPage() {
  return (
    <>
      <div className="mb-8">
        <h1>Welcome back</h1>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <LoginForm />
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
