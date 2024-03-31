import React from 'react'
import Link from 'next/link'
import Input from '@/components/Input'
import { FaSearch } from 'react-icons/fa'
function Nav() {
  return (
    <>
      <header className='flex justify-between px-8 py-2 bg-slate-800 items-center'>
        <div>
          <Link href="/" className='text-white font-bold'>&#123; Get Api  &#125;</Link>
        </div>
        <div className='flex items-center gap-8 relative'>
          <Input placeholder='Search api' name='search' className='indent-5' />
          <div className='absolute left-2'>
            <FaSearch className='text-black opacity-50' />
          </div>
          <div className='h-10 w-10 rounded-full bg-white cursor-pointer'>A</div>
        </div>
      </header>
    </>
  )
}

export default Nav