import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Chip from "@/components/Chip"
function index() {
  return (
    <Card className='w-full sm:w-[300px]'>
      <CardHeader className='flex justify-between items-center flex-row'>
        <div className='text-3xl'>Login</div>
        <Chip type='dark' text='frontend' />
      </CardHeader>
      <CardContent>
        <div className="">

        </div>
      </CardContent>
    </Card>
  )
}

export default index