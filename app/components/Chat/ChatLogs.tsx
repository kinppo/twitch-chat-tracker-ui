'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import users from '@/../data/users.json';
import channelAvatar from '@/../public/1.png';
import { FaTwitch } from 'react-icons/fa';
import SearchInput from '../Inputs/SearchInput';
import ChannelsList from './ChannelsList';
import MessagesList from './MessagesList';

export type TMessage = {
  id: string;
  message: string;
  createdAt: string;
};

export type TChannel = {
  id: string;
  name: string;
  messages: TMessage[];
};

export type TUser = {
  id: string;
  username: string;
  channels: TChannel[];
};

export default function ChatLogs() {
  const [search, setSearch] = useState('');
  const params = useParams();
  const searchParams = useSearchParams();
  const currentUser: TUser | undefined = useMemo(
    () => users.find((user) => user.id === params?.id),
    [users, params?.id],
  );
  const [activeChannel, setActiveChannel] = useState<TChannel | undefined>(
    currentUser?.channels[0],
  );

  useEffect(() => {
    const channelIndex = Number(searchParams.get('channel'));

    setActiveChannel(currentUser?.channels[channelIndex || 0]);
  }, [currentUser, searchParams]);

  if (!currentUser) {
    return <div>User not found</div>;
  }

  return (
    <div className='grid-cols-2-cols relative mx-auto grid w-full max-w-screen-2xl rounded-2xl text-white'>
      <div className='flex h-[max(87svh,500px)] flex-col rounded-l-2xl bg-neutral-800/30 backdrop-blur-md'>
        {/* User Data */}
        <div className='flex w-full items-center justify-between gap-4 px-6 pt-6'>
          <div className='flex items-center gap-4'>
            <Image
              src={`/${currentUser.id}.png`}
              width={40}
              height={40}
              alt='avatar'
              className='size-10 cursor-pointer rounded-full  capitalize transition-all duration-300 hover:scale-110'
            />
            <div>
              <p className='font-semibold capitalize'>{currentUser.username}</p>
              <p className='text-xs font-semibold text-lightText'>
                Active in{' '}
                <span className='text-bold text-primary'>
                  {currentUser.channels.length}
                </span>{' '}
                channels
              </p>
            </div>
          </div>
          <a
            href={`https://twitch.tv/${currentUser.username}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary transition-all duration-300 hover:scale-110'
          >
            <FaTwitch size={24} />
          </a>
        </div>

        <SearchInput
          name='search'
          value={search}
          setValue={setSearch}
          className='rounded-full py-3'
          containerClassName='px-4 border-b border-border/30 py-5 pb-6'
          placeholder='search channel...'
        />

        {/* User Active Channels */}
        <ChannelsList
          channels={currentUser.channels}
          activeChannelId={activeChannel?.id}
        />
      </div>

      <div className='flex h-[max(87svh,500px)] flex-col rounded-r-2xl bg-neutral-900/30 backdrop-blur-md'>
        {/* Channels Data */}
        <div className='z-10 flex items-center justify-between gap-4 border-b border-border/30 p-6'>
          <div className='flex items-center gap-4'>
            <Image
              src={`/${activeChannel?.id}.png`}
              width={40}
              height={40}
              alt='avatar'
              className='size-10 cursor-pointer rounded-full  capitalize transition-all duration-300 hover:scale-110'
            />
            <div>
              <p className='font-semibold'>#{activeChannel?.name}</p>
              <p className='text-xs font-semibold text-lightText'>
                Total of{' '}
                <span className='text-bold text-primary'>
                  {activeChannel?.messages.length}
                </span>{' '}
                sent messages
              </p>
            </div>
          </div>
          <a
            href={`https://twitch.tv/${activeChannel?.name}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary transition-all duration-300 hover:scale-110'
          >
            <FaTwitch size={24} />
          </a>
        </div>

        {/* Messages History*/}
        <MessagesList
          user={currentUser}
          messages={activeChannel?.messages || []}
        />
      </div>
    </div>
  );
}
