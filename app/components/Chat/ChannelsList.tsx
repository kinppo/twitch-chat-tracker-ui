import Image from 'next/image';
import Link from 'next/link';
import { dateTimeAgo } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { TChannel } from './ChatLogs';

export default function ChannelsList({
  channels,
  activeChannelId,
}: {
  channels: TChannel[];
  activeChannelId: string | undefined;
}) {
  return (
    <div className='flex w-full flex-grow flex-col overflow-auto'>
      {channels.map((channel, index) => (
        <Link
          href={`?channel=${index}`}
          className={twMerge(
            'flex cursor-pointer items-center gap-4 border-b border-border/30 p-6 last:border-b-0',
            activeChannelId === channel.id && 'bg-lightText/15',
          )}
          key={index}
        >
          <Image
            src={`/${channel.id}.png`}
            width={40}
            height={40}
            alt='avatar'
            className='size-10 cursor-pointer rounded-full  capitalize transition-all duration-300 hover:scale-110'
          />

          <div className='flex w-full items-center justify-between gap-4'>
            <div>
              <p className='font-semibold'>#{channel.name}</p>
              {channel.messages.length > 0 ? (
                <p className='line-clamp-1 text-xs font-semibold text-lightText'>
                  {channel.messages[0].message}
                </p>
              ) : (
                'no message at the moment'
              )}
            </div>
            {channel.messages.length > 0 && (
              <span className='flex-shrink-0 text-xs font-semibold text-lightText'>
                {dateTimeAgo(channel.messages[0].createdAt)}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
