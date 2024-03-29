import React from 'react'

function index({ text, type }: { text: string, type: 'dark' | 'light' }) {
  return (
    <div className={`text-sm px-2 rounded-full font-bold lowercase ${type == 'dark' ? 'bg-slate-800 text-slate-300' : 'text-slate-800 bg-slate-300'}`}>{text}</div>
  )
}

export default index