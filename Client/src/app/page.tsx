import React from 'react'
import Nav from '@/components/Nav'
import Card from '@/components/Card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Link from 'next/link'
function page() {
  return (
    <>
      <Nav />
      <div className='container mt-5'>
        {/* <div className="text-2xl font-bold">
          Browse apis
        </div> */}
        <div className='flex justify-between items-baseline'>
          <Link href="backend" className="text-xl font-semibold mt-10 inline-block">Backend</Link>
          <Link href="backend" className='hover:underline capitalize'>see more</Link>
        </div>
        <ScrollArea className='' >
          <div className='flex'>
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
        <div className='flex justify-between items-baseline'>
          <Link href="frontend" className="text-xl font-semibold mt-10 inline-block">Frontend</Link>
          <Link href="frontend" className='hover:underline capitalize'>see more</Link>
        </div>
        <ScrollArea className='' >
          <div className='flex'>
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>

      </div>
    </>
  )
}

export default page