import React from 'react'
import { Card, CardHeader, CardFooter, CardContent, CardDescription, CardTitle } from "../../components/ui/card"
import Input from "@/components/Input";
import { Button } from '@/components/ui/button';
import { FcGoogle } from "react-icons/fc";
// import {Go}
function page() {
  return (
    <>
      <header className='my-10'>
        <h1 className='text-center text-2xl font-bold'>&#123; Get Api  &#125;</h1>
      </header>
      <Card className='w-full sm:w-[500px] mx-auto'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <p className='text-slate-600'>welcome back</p>
        </CardHeader>
        <CardContent>
          <form>
            <Input label='Enter your email' name='email' placeholder='john@xyz.com' />
            <Input label='Enter your password' name='password' placeholder='strong password' />
            <Button className='mt-2 w-full'>Login</Button>
          </form>
        </CardContent>
        <CardFooter className='flex-col gap-5'>
          <p className='text-sm text-center opacity-50 w-full'>or</p>
          <Button variant="secondary" className='flex gap-2'><FcGoogle size="20px" /> <span>Continue with Google</span></Button>
        </CardFooter>
      </Card>
      {/* <div className="decoration absolute bottom-10 pointer-events-none left-1/2 -translate-x-1/2 md:text-9xl sm:text-4xl text-2xl font-bold -z-2 opacity-10">
        &#123; Get Api  &#125;
      </div> */}
    </>
  )
}

export default page