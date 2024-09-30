'use client';

import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

type InputProps = {
  control: Control<any> | undefined;
  name: string;
  type?: 'text' | 'password' | 'textarea';
  label?: string;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  inputMode?:
    | 'search'
    | 'text'
    | 'email'
    | 'tel'
    | 'url'
    | 'none'
    | 'numeric'
    | 'decimal'
    | undefined;
  disabled?: boolean;
};

export default function Input({
  control,
  name,
  type = 'text',
  label,
  className,
  containerClassName,
  labelClassName,
  required,
  rows,
  inputMode,
  placeholder,
  disabled,
}: InputProps) {
  const [typeState, setTypeState] = useState(type);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
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
            {type !== 'textarea' ? (
              <input
                id={name}
                type={typeState}
                placeholder={placeholder}
                inputMode={inputMode}
                className={twMerge(
                  'border-border/30 block w-full rounded-md border bg-background px-3 py-4 text-sm text-text outline-none focus:border-primary',
                  className,
                  disabled ? 'cursor-not-allowed bg-gray-200' : '',
                )}
                {...field}
                disabled={disabled}
              />
            ) : (
              <textarea
                placeholder={placeholder}
                rows={rows}
                className={twMerge(
                  'block w-full rounded-md border border-darkBorder bg-lightBorder p-2.5 text-sm text-text outline-none focus:border-primary',
                  className,
                  disabled ? 'cursor-not-allowed bg-gray-200' : '',
                )}
                {...field}
              />
            )}

            {type === 'password' &&
              (typeState === 'password' ? (
                <FaEye
                  size={18}
                  className='text-lightText absolute right-2.5 top-1/2 float-right -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110'
                  onClick={() => setTypeState('text')}
                />
              ) : (
                <FaEyeSlash
                  size={18}
                  className='text-lightText absolute right-2.5 top-1/2 float-right -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110'
                  onClick={() => setTypeState('password')}
                />
              ))}
          </div>
          <p className='mt-1 text-xs text-red-500'>
            {error?.message?.toString()}
          </p>
        </div>
      )}
    />
  );
}
