'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Label } from '@/components/ui/Label';
import { FieldErrorMessage } from '@/components/ui/FieldErrorMessage';
import { GoogleIcon } from '@/components/login-form/GoogleIcon';
import { PasswordInput } from '@/components/ui/PasswordInput';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  rememberMe: z.boolean().optional(),
});
export type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onSuccess?: (data: LoginFormValues) => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', rememberMe: false },
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: LoginFormValues) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    if (!error) onSuccess?.(data);
    else toast(error.message);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Enter your email" {...field} />
            <FieldErrorMessage message={errors.email?.message} />
          </div>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <div>
            <Label htmlFor="password">Password</Label>
            <PasswordInput placeholder="••••••••" {...field} />
            <FieldErrorMessage message={errors.password?.message} />
          </div>
        )}
      />
      <Controller
        name="rememberMe"
        control={control}
        render={({ field }) => (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                id="remember-me"
                checked={!!field.value}
                onChange={(val) => field.onChange(val)}
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                Remember for 30 days
              </label>
            </div>
            <button
              type="button"
              className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Forgot password
            </button>
          </div>
        )}
      />
      <Button type="submit" className="w-full" isLoading={isSubmitting}>
        Sign in
      </Button>
      <Button variant="outline" className="w-full" type="button">
        <GoogleIcon />
        Sign in with Google
      </Button>
    </form>
  );
}
