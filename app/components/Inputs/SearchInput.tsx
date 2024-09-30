import { Dispatch, SetStateAction } from 'react';
import { IoSearch } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

type InputProps = {
  name: string;
  label?: string;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function SearchInput({
  name,
  label,
  className,
  containerClassName,
  labelClassName,
  required,
  placeholder,
  value,
  setValue,
}: InputProps) {
  return (
    <div className={twMerge('relative', containerClassName)}>
      {label && (
        <label
          htmlFor={name}
          className={twMerge(
            'mb-2 mt-6 block text-sm font-medium tracking-wide text-text',
            labelClassName,
          )}
        >
          {label}
          {required ? <span className='text-red-300'> *</span> : null}
        </label>
      )}
      <div className='relative'>
        <label
          htmlFor={name}
          className='absolute left-4 top-1/2 -translate-y-1/2'
        >
          <IoSearch size={22} className='text-lightText/50' />
        </label>
        <input
          id={name}
          type='text'
          placeholder={placeholder}
          className={twMerge(
            'block w-full rounded-md border border-border/30 bg-background px-3 py-4 pl-12 text-sm text-text outline-none focus:border-primary',
            className,
          )}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}
