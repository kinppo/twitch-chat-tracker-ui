import Image from 'next/image';
import Bg from '@/../public/bg.svg';
import RegisterForm from '@/components/Forms/Auth/RegisterForm';

export default function page() {
  return (
    <section className='flex min-h-[100svh] w-full items-center justify-center'>
      <Image
        src={Bg}
        alt='bg'
        className='absolute left-0 top-0 -z-10 h-full w-full object-cover'
      />
      <RegisterForm />
    </section>
  );
}
