import React from 'react';
import Sidebar from '@/components/Layout/SideBar';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex min-h-full w-full flex-grow'>
      <Sidebar />
      <section className='flex w-full flex-grow flex-col' id='main'>
        {children}
      </section>
    </main>
  );
}
