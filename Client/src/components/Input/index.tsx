import React from 'react'
import { Input } from '../ui/input'
import type { InputProps } from "../ui/input";
interface IndexProps extends InputProps {
  caption?: string;
  label?: string;
}

function index({ caption, label, ...props }: IndexProps) {
  return (
    <div className='my-1'>
      {
        !label ? "" :
          <label htmlFor={props.name} className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-1  '>{label}</label>
      }
      <Input {...props} id={props.name} />
      <p className='text-[12px] opacity-60 ml-1'>{caption}</p>
    </div>
  )
}

export default index