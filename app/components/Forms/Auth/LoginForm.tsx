'use client';

import { useState } from 'react';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { TLoginSchema } from '@/types/validation';
import { msgs } from '@/constants/messages';
import { loginSchema } from '@/constants/schemas';
import { useToastContext } from '@/contexts/ToastContext';
import Button from '../../Buttons/Button';
import Input from '../../Inputs/Input';

export default function LoginForm() {
  const [error, setError] = useState('');
  const { setToast } = useToastContext();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: TLoginSchema) => {
    try {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res && res.error) {
        const msg = msgs.incorrectEmailPwd;
        setError(msg);
        setToast({ type: 'error', msg });
      } else {
        console.log('Successfull Login!');
        window.location.replace(window.location.origin + '/');
      }
    } catch (error) {
      console.log(error);
      setToast({ type: 'error', msg: msgs.serverError });
    }
    reset({}, { keepValues: true, keepDefaultValues: true });
  };

  return (
    <form
      className='mx-auto w-full max-w-xl rounded-2xl bg-neutral-800/30 px-8 py-10 shadow-custom backdrop-blur-md max-sm:px-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className='mb-12 text-center text-xl font-semibold leading-tight tracking-wide text-text sm:text-2xl'>
        Log Into Your Account
      </h1>
      <Input
        control={control}
        name='email'
        label='Your Email'
        inputMode='email'
        placeholder='name@company.com'
      />
      <Input
        control={control}
        name='password'
        label='Password'
        type='password'
        placeholder='••••••••'
      />
      <p className='mt-1 text-xs text-red-500'>{error}</p>
      <div className='my-4 flex items-center justify-between'>
        <a
          href='#'
          className='mb-6 text-sm font-medium text-primary hover:underline'
        >
          Forgot your password?
        </a>
      </div>
      <Button
        type='submit'
        className='w-full'
        disabled={isSubmitting}
        isLoading={isSubmitting}
      >
        Login
      </Button>
      <p className='mt-12 text-center text-xs font-medium text-lightText'>
        Do not have an account yet?{' '}
        <Link
          href='/auth/register'
          className='font-medium text-primary transition-all duration-500 hover:underline'
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}
