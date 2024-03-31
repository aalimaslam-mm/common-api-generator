import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import Chip from "@/components/Chip"
import { Button } from '../ui/button'



type itemType = {
  name: string,
  type: string,
  description: string,
  tags: string[],
  code: string
}

function index({ item }: { item: itemType }) {
  return (
    <Card className='w-[300px] m-5'>
      <CardHeader className='flex justify-between items-center flex-row'>
        <CardTitle>Login</CardTitle>
        <Chip type='dark' text='frontend' />
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, iusto.
        </CardDescription>
        <div className="flex gap-[5px] mt-2">
          <Chip text='users' type='dark' />
          <Chip text='users' type='light' />
        </div>
      </CardContent>
      <CardFooter>
        <Button size="sm">Show Code</Button>
      </CardFooter>
    </Card>
  )
}

export default index