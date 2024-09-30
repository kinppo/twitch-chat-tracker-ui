import ChatLogs from '@/components/Chat/ChatLogs';
import AnimatedBg from '@/components/Layout/AnimatedBg';

export default function page() {
  return (
    <section className='flex min-h-[100svh] w-full min-w-[720px] items-center justify-center px-2'>
      <AnimatedBg />
      <ChatLogs />
    </section>
  );
}
