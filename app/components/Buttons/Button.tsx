import React from 'react';
import { cn } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 duration-500 ',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/80',
        destructive: 'bg-destructive text-white hover:bg-destructive/90',
        outline:
          'border border-lightBorder hover:bg-lightBorder hover:border-darkBorder',
        secondary: 'bg-secondary text-blackShade hover:bg-secondary/80',
        ghost: 'hover:bg-lightBorder',
        link: 'text-primary underline-offset-4 hover:underline',
        '3d': 'bg-primary text-white shadow-[4px_4px_0px] shadow-[#2067ae] duration-200 active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px]',
      },
      size: {
        default: 'h-12 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8',
        icon: 'h-10 w-10',
      },
      radius: {
        none: 'rounded-none',
        default: 'rounded-md',
        full: 'rounded-full px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export default function Button({
  className,
  variant,
  size,
  radius,
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, radius, className }))}
      {...props}
    >
      {isLoading ? (
        <>
          <span className='mr-1.5 inline-block h-[16px] w-[16px] animate-loader rounded-[50%] border-2 border-white border-b-transparent' />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}
