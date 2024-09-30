export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <section className='align-center absolute left-[50%] top-[50%] flex min-w-[300px] flex-grow translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center'>
      <h1 className='mb-4 text-6xl font-semibold text-red-500'>404</h1>
      <p className='mb-4 text-lg text-text'>Oops! Looks like you're lost.</p>
      <div className='animate-bounce'>
        <svg
          className='mx-auto h-16 w-16 text-red-500'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
          />
        </svg>
      </div>
      <p className='text-lightText mt-4 text-sm font-medium'>
        Let's get you back{' '}
        <a href='/' className='text-primary'>
          Home
        </a>
      </p>
    </section>
  );
}
