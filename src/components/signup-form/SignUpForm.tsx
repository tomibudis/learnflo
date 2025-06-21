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
import { PasswordInput } from '@/components/ui/password-input';
import { GoogleIcon } from '@/components/login-form/GoogleIcon';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

// Supabase auth table fields: email, password, (optionally: full_name, phone, etc.)
const signupSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  full_name: z.string().min(2, { message: 'Full name is required.' }),
  phone: z.string().optional(),
  agree: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms.',
  }),
});
export type SignUpFormValues = z.infer<typeof signupSchema>;

interface SignUpFormProps {
  onSuccess?: (data: SignUpFormValues) => void;
}

export function SignUpForm({ onSuccess }: SignUpFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { email: '', password: '', full_name: '', phone: '', agree: false },
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: SignUpFormValues) => {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      phone: data.phone,
      options: {
        data: {
          full_name: data.full_name,
        },
      },
    });
    if (!error) onSuccess?.(data);
    else toast(error.message);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="full_name"
        control={control}
        render={({ field }) => (
          <div>
            <Label htmlFor="full_name">Full Name</Label>
            <Input type="text" placeholder="Enter your full name" {...field} />
            <FieldErrorMessage message={errors.full_name?.message} />
          </div>
        )}
      />
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
        name="phone"
        control={control}
        render={({ field }) => (
          <div>
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input type="tel" placeholder="Enter your phone number" {...field} />
            <FieldErrorMessage message={errors.phone?.message} />
          </div>
        )}
      />
      <Controller
        name="agree"
        control={control}
        render={({ field }) => (
          <div className="flex items-center">
            <Checkbox id="agree" checked={!!field.value} onChange={(val) => field.onChange(val)} />
            <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
              I agree to the terms and conditions
            </label>
            <FieldErrorMessage message={errors.agree?.message} />
          </div>
        )}
      />
      <Button type="submit" className="w-full">
        Sign up
      </Button>
      <Button variant="outline" className="w-full" type="button">
        <GoogleIcon />
        Sign up with Google
      </Button>
    </form>
  );
}
