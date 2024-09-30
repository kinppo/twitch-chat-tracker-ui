import SearchForm from '@/components/Forms/Search/SearchForm';
import AnimatedBg from '@/components/Layout/AnimatedBg';

export default function page() {
  return (
    <section className='flex min-h-[100svh] w-full items-center justify-center p-4 max-sm:px-2'>
      <AnimatedBg />
      <SearchForm />
    </section>
  );
}
