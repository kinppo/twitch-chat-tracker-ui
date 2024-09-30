import Image from 'next/image';
import { TMessage, TUser } from './ChatLogs';

// h-[calc(max(86svh,500px)-90px)]
export default function MessagesList({
  user,
  messages,
}: {
  user: TUser;
  messages: TMessage[];
}) {
  return (
    <div className='flex flex-grow flex-col gap-2 overflow-auto p-4 '>
      {messages.map((message, index) => (
        <div className='flex items-center gap-2' key={index}>
          <span className='flex-shrink-0 text-xs font-medium text-lightText/50'>
            {new Date(message.createdAt)
              .toISOString()
              .replace(/:\d{2}\.\d{3}Z$/, '')
              .replace('T', ' ')}
          </span>
          <span className='flex-shrink-0 text-sm font-medium text-primary'>
            {user.username}
          </span>
          <span className='text-sm'>{message.message}</span>
        </div>
      ))}
    </div>
  );
}
