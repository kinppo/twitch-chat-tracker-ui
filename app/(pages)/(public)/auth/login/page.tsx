import Image from 'next/image';
import Bg from '@/../public/bg.svg';
import LoginForm from '@/components/Forms/Auth/LoginForm';

export default async function Home() {
  return (
    <section className='flex min-h-[100svh] w-full items-center justify-center'>
      <Image
        src={Bg}
        alt='bg'
        className='absolute left-0 top-0 -z-10 h-full w-full object-cover'
      />
      <LoginForm />
    </section>
  );
}
