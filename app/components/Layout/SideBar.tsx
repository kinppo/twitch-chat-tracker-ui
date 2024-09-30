'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import users from '@/../data/users.json';
import logo from '@/../public/icon.png';
import { signOut, useSession } from 'next-auth/react';
import { HiPlus } from 'react-icons/hi';
import { IoPerson } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

export default function Sidebar() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <aside className='border-r-darkBorder sticky top-0 z-10 mt-[-64px] flex h-full min-h-[100svh] w-[50px] flex-shrink-0 flex-col justify-between border-r border-border/30 bg-foreground px-1 py-2 transition-[width] duration-[0.25s]'>
      <div className='flex flex-col items-center gap-3'>
        <Link href='/'>
          <Image src={logo} alt='logo' className='size-9 brightness-0 invert' />
        </Link>

        {/* New Chat History */}
        <Link
          href='/'
          className='group relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-lg border border-border/50 p-2 text-lightText transition-all duration-500 ease-tooltip-in hover:bg-background'
        >
          <HiPlus />
          <span className='pointer-events-none absolute left-full top-0 ml-2 whitespace-nowrap rounded-[5px] bg-primary p-2 text-xs font-medium text-white opacity-0 shadow-md transition-all duration-300 ease-tooltip-in before:absolute before:-left-1 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rotate-45 before:bg-primary before:transition-all before:duration-300 before:ease-tooltip-in group-hover:pointer-events-auto group-hover:visible group-hover:left-[calc(100%+6px)] group-hover:opacity-100'>
            New Chat History
          </span>
        </Link>

        {/* Active Chat Histories */}
        {users.map((user) => (
          <UserAvatar key={user.id} user={user} />
        ))}
      </div>

      {/* Logged In user */}
      <div
        className={twMerge(
          'absolute left-0 top-0 h-[100vh] w-[100vw]',
          !isPopoverOpen && 'hidden',
        )}
        onClick={() => setIsPopoverOpen(false)}
      />
      <div className='relative'>
        <button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
          <IoPerson className='size-9 cursor-pointer rounded-lg border border-border/30 p-1.5 text-lightText transition-all duration-300 hover:scale-105' />
        </button>
        {isPopoverOpen && <Popover />}
      </div>
    </aside>
  );
}

function UserAvatar({
  user,
}: {
  user: {
    id: string;
    username: string;
  };
}) {
  return (
    <Link href={`/chat/${user.id}`} className='group relative'>
      <Image
        src={`/${user.id}.png`}
        alt='avatar'
        width={36}
        height={36}
        className='size-9 cursor-pointer rounded-full  transition-all duration-300 hover:scale-110'
      />
      <span className='pointer-events-none absolute left-full top-0 ml-2 whitespace-nowrap rounded-[5px] bg-primary p-2 text-xs font-medium text-white opacity-0 shadow-md transition-all duration-300 ease-tooltip-in before:absolute before:-left-1 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rotate-45 before:bg-primary before:transition-all before:duration-300 before:ease-tooltip-in group-hover:pointer-events-auto group-hover:visible group-hover:left-[calc(100%+6px)] group-hover:opacity-100'>
        #{user.username}
      </span>
    </Link>
  );
}

function Popover() {
  const { data: session } = useSession();

  return (
    <div
      className='absolute bottom-full left-0 z-10 mb-2 w-72 rounded-lg border border-border/50 bg-foreground text-sm text-white'
      onClick={(e) => e.stopPropagation()}
    >
      <div className='border-b border-border/50 p-4'>
        <p className='mb-0.5 font-medium text-lightText'>
          {session?.user.name}
        </p>
        <p>{session?.user.email}</p>
      </div>
      <div className='p-4'>
        <button
          className='group flex w-full items-center gap-1'
          onClick={() => signOut()}
        >
          <MdLogout size={20} className='flex-shrink-0 text-lightText' />{' '}
          <span className='transition-all duration-300 group-hover:translate-x-1'>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
