'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TRegisterSchema } from '@/types/validation';
import { msgs } from '@/constants/messages';
import { registerSchema } from '@/constants/schemas';
import { createUserAction, isRegistredAction } from '@/actions/users';
import { useToastContext } from '@/contexts/ToastContext';
import Button from '../../Buttons/Button';
import Input from '../../Inputs/Input';

export default function RegisterForm() {
  const router = useRouter();
  const { setToast } = useToastContext();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: TRegisterSchema) => {
    try {
      const registred = await isRegistredAction(data.email);

      if (registred.success && registred.data) throw msgs.emailRegistred;
      if (!registred.success) throw registred.error;

      const res = await createUserAction(data);
      if (!res.success) throw res.error;

      setToast({ msg: msgs.successRegister });
      router.push('/login');
    } catch (error: any) {
      console.log(error);
      setToast({
        type: 'error',
        msg: error?.message || msgs.serverError,
      });
      reset({}, { keepValues: true, keepDefaultValues: true });
    }
  };

  return (
    <form
      className='mx-auto w-full max-w-xl rounded-2xl bg-neutral-800/30 px-8 py-10 shadow-custom backdrop-blur-md max-sm:px-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className='mb-12 text-center text-xl font-semibold leading-tight tracking-wide text-text sm:text-2xl'>
        Create your account
      </h1>
      <Input
        control={control}
        name='name'
        label='Name'
        inputMode='text'
        placeholder='John Doe'
        required
      />
      <Input
        control={control}
        name='email'
        label='Your Email'
        inputMode='email'
        placeholder='name@company.com'
        required
      />
      <Input
        control={control}
        name='password'
        label='Password'
        type='password'
        placeholder='••••••••'
        required
      />
      <Button
        type='submit'
        className='mt-6 w-full'
        disabled={isSubmitting}
        isLoading={isSubmitting}
      >
        Sign Up
      </Button>
      <p className='mt-12 text-center text-xs font-medium text-lightText'>
        Already have an account?{' '}
        <Link
          href='/auth/login'
          className='font-medium text-primary transition-all duration-500 hover:underline'
        >
          Login
        </Link>
      </p>
    </form>
  );
}
