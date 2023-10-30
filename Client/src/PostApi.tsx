import React from 'react'
import { Link } from 'react-router-dom';

export default function PostApi() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let data = {
      name: e.target.name.value as string,
      url: e.target.api.value as string,
      method: e.target.method.value as 'GET' | 'POST' | 'PUT' | 'DELETE',
      description: e.target.description.value as string,
      code: e.target.code.value as string,
      type: e.target.type.value as 'Frontend' | 'Backend',
      tags: e.target.tags.value.split(',') as string[],
      user: {
        name: e.target.username.value as string,
        email: e.target.email.value as string
      },
      language: {
        lang: e.target.lang.value as string,
        database: e.target.database.value as string
      }
    }


    let sent = await fetch('http://localhost:3000/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    let res = await sent.json();
    alert(res.message)
  }

  return (
    <>

      <div className="flex justify-center mt-[40px] mb-[50px]">
        <div className="flex flex-col gap-4">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" className="border-2 border-gray-400 rounded-md w-[400px] h-[40px] pl-[10px]" placeholder="Get All Users" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="API">API</label>
              <input type="text" name="api" id="API" className="border-2 border-gray-400 rounded-md w-[400px] h-[40px] pl-[10px]" placeholder="api/users" required />
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex flex-col gap-2 w-[48%]">
                <label htmlFor="method">Method</label>
                <select name="method" id="method" className="border-2 border-gray-400 rounded-md w-[100%] h-[40px] pl-[10px]" required>
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="type">Type</label>
                <select name="type" id="type" className="border-2 border-gray-400 rounded-md w-[100%] h-[40px] pl-[10px]" required>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" className="border-2 border-gray-400 rounded-md w-[400px] h-[40px] pl-[10px]" placeholder="Get all users from the database" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="code">Code</label>
              <textarea name="code" id="code" className="border-2 border-gray-400 rounded-md w-[400px] h-[40px] pl-[10px]" placeholder="const getAllUsers = async () => {" required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="tags">Tags</label>
              <input type="text" name="tags" id="tags" className="border-2 border-gray-400 rounded-md w-[400px] h-[40px] pl-[10px]" placeholder="users, get, all, fe, frontend, get all users" required />
            </div>
            <div className='flex flex-wrap gap-2'>
              <div className="flex flex-col gap-2 w-[48%]">
                <label htmlFor="example">Your Name</label>
                <input type='text' name='username' placeholder="John Doe" className="border-2 border-gray-400 rounded-md w-[100%] h-[40px] pl-[10px]" required />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="email">Your Email</label>
                <input type='email' name="email" placeholder="john@doe.com" className="border-2 border-gray-400 rounded-md w-[100%] h-[40px] pl-[10px]" required />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex flex-col gap-2 w-[48%]">
                <label htmlFor="language">Language</label>
                <input type='text' name="lang" placeholder="Python" className="border-2 border-gray-400 rounded-md w-[100%] h-[40px] pl-[10px]" required />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="database">Database</label>
                <input type='text' name="database" placeholder="MySQL" className="border-2 border-gray-400 rounded-md w-[100%] h-[40px] pl-[10px]" required />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="border-2 border-gray-400 rounded-md w-[400px] h-[40px] pl-[10px] bg-yellow-500 hover:bg-yellow-700 text-white font-bold">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className='fixed top-[30px] right-[30px] flex gap-3'>
        <Link className='bg-blue-200 px-3 py-2 rounded hover:bg-blue-400' to="/">Home</Link>
        <Link className='bg-blue-200 px-3 py-2 rounded hover:bg-blue-400' to="/approve">Approve</Link>
      </div>
    </>
  )
}
