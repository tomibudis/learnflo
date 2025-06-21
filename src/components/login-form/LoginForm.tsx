'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FieldErrorMessage } from '@/components/ui/field-error-message';
import { GoogleIcon } from '@/components/login-form/GoogleIcon';
import { PasswordInput } from '@/components/ui/password-input';
import { login } from '@/app/(non-auth)/login/actions';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  rememberMe: z.boolean().optional(),
});
export type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
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

  const onSubmitForm = async (formValues: LoginFormValues) => {
    const { error } = await login({ email: formValues.email, password: formValues.password });
    if (error.message) {
      toast(error.message);
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmitForm)}>
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
      <Button type="submit" className="w-full" loading={isSubmitting}>
        Sign in
      </Button>
      <Button variant="outline" className="w-full" type="button">
        <GoogleIcon />
        Sign in with Google
      </Button>
    </form>
  );
}
