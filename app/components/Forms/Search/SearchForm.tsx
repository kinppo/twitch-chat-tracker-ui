'use client';

import { useState } from 'react';
import SearchInput from '@/components/Inputs/SearchInput';
import Button from '../../Buttons/Button';

export default function SearchForm() {
  const [search, setSearch] = useState('');

  return (
    <form className='relative mx-auto w-full max-w-xl rounded-2xl bg-neutral-800/30 px-8 py-10 shadow-custom backdrop-blur-md max-sm:px-4'>
      <h1 className='text-center text-2xl font-semibold leading-tight tracking-wide text-text  max-sm:text-lg'>
        Who are you looking for?
      </h1>
      <p className='mb-8 mt-2 text-center text-xs font-medium text-lightText'>
        If you dont know the exact username, just type a part of it
      </p>
      <SearchInput
        name='search'
        value={search}
        setValue={setSearch}
        className='rounded-full py-3'
        placeholder='search username...'
      />
      <Button type='submit' className='mt-8 w-full'>
        Add
      </Button>
    </form>
  );
}
