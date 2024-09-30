import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { IoWarning } from 'react-icons/io5';
import { MdCancel } from 'react-icons/md';
import { TToast, TType } from '@/contexts/ToastContext';

const borders = {
  error: 'border-l-error',
  info: 'border-l-info',
  warning: 'border-l-warning',
  success: 'border-l-success',
};

const texts = {
  error: 'text-error',
  info: 'text-info',
  warning: 'text-warning',
  success: 'text-success',
};

const getIcon = (type: TType) => {
  switch (type) {
    case 'error':
      return <MdCancel size={26} className='fill-error' />;
    case 'info':
      return <FaCircleInfo size={26} className='fill-info' />;
    case 'warning':
      return <IoWarning size={26} className='fill-warning' />;
    default:
      return <FaCheckCircle size={24} className='fill-success' />;
  }
};

export default function Toast({ type = 'success', msg, setToast }: TToast) {
  return (
    <div
      className={`fixed right-4 top-4 z-50 flex w-full max-w-lg animate-popupscale justify-between rounded-lg border-l-8 bg-white p-3.5  shadow-lg ${borders[type]}`}
    >
      <div className='flex'>
        {getIcon(type)}
        <div className='ml-2'>
          <h2 className={`font-semibold capitalize ${texts[type]}`}>{type}</h2>
          <p className='text-muted-foreground pl-1 text-sm text-gray-500'>
            {msg || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          </p>
        </div>
      </div>
      <IoMdClose
        size={26}
        onClick={() => setToast(null)}
        className='cursor-pointer fill-slate-600'
      />
    </div>
  );
}
