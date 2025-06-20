'use client';

import React from 'react';
import { SignUpForm } from '@/components/signup-form/SignUpForm';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const handleSuccess = () => {
    router.push('/dashboard');
  };
  return (
    <>
      <div className="mb-6">
        <h1>Create your account</h1>
        <p>Sign up to access all features and start learning today.</p>
      </div>
      <SignUpForm onSuccess={handleSuccess} />
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link className="text-indigo-600 hover:text-indigo-500 font-medium" href="/login">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
