import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PostApi from './PostApi'
import Approve from './Approve'
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/postapi' element={<PostApi />} />
      <Route path="/approve" element={<Approve />} />
    </Routes>
  )

}
type ShowAPIProps = {
  name: string,
  url: string,
  method: string,
  description: string,
  code: string,
  type: string,
  tags: string[],
  user: {
    name: string,
    email: string
  },
  language: {
    lang: string,
    database: string
  }
}
function ShowAPI({ data }: { data: ShowAPIProps }) {
  let [open, setOpen] = React.useState<boolean>(false)

  let openModal = () => {
    setOpen(true)
  }
  let closeModal = () => {
    setOpen(false)
  }


  return (
    <>
      <div className='border-2 border-gray-400 rounded-md w-[400px] h-[100%] mt-[20px] ml-[20px] bg-yellow-100 p-[20px]'>
        <div className='text-center mt-[10px] font-bold text-yellow-800 text-xl uppercase'>{data.name}</div>
        <div className='text-center text-yellow-700'>{data.type}</div>
        <div className='mt-[10px]'>{data.url}</div>
        <div className='mt-[10px]'>{data.method}</div>
        <div className='mt-[10px]'>{data.description}</div>
        <button className='mt-[10px] bg-yellow-400 text-white rounded-md px-[10px] py-[5px] hover:bg-yellow-500' onClick={openModal}>Show Code</button>
        {/* <div className='mt-[10px] uppercase'>{data.code}</div> */}
        <div className="text-gray-700 mt-2">Thanks to : <b>{data.user.name}</b> </div>
        <div className='flex gap-1 mt-3 flex-wrap'>
          {
            data.tags.map((tag, index) => {
              return (
                <div className='border border-yellow-700 text-yellow-600 rounded-[1000px] px-[10px] py-[5px] my-1 hover:bg-yellow-500 hover:text-yellow-900 text-[13px]' key={index}>{tag}</div>
              )
            }
            )
          }
        </div>
        <div className="font-bold text-yellow-800">Language : {data?.language?.lang}</div>
        {
          data.type === 'Backend' ? (<div className="font-bold text-yellow-800">Database : {data?.language?.database}</div>) : null
        }
      </div>
      {open && <Dialog data={data} closeModal={closeModal} />}
    </>
  )
}

function Dialog({ data, closeModal }: { data: ShowAPIProps, closeModal: () => void }) {
  let copy = () => {
    navigator.clipboard.writeText(data.code)
    alert("Copied")
  }
  return (
    <>
      <div className='fixed p-4 top-0 left-0  w-full h-[100%] bg-black bg-opacity-50 flex justify-center items-center'>
        <div className='border-2 border-gray-400 rounded-md w-[90%] h-[100%] mt-[20px] ml-[20px] bg-yellow-100 p-[20px]  overflow-y-scroll'>
          <div className='text-center mt-[10px] font-bold text-yellow-800 text-xl uppercase'>{data.name}</div>
          <div className='text-center text-yellow-700'>{data.type}</div>
          <div className='mt-[10px]'>{data.url.startsWith("/") ? data.url : "/" + data.url}</div>
          <div className='mt-[10px]'>{data.method}</div>
          <div className='mt-[10px]'>{data.description}</div>
          <h4 className='mt-5 font-bold text-xl'>Code : </h4>
          <div className=''>
            <pre>{data.code}</pre>
          </div>
          <div className="btns flex gap-3">
            <button className='mt-[10px] border border-yellow-400 text-black rounded-md px-[10px] py-[5px] hover:bg-yellow-500 w-[100px]' onClick={closeModal}>Close</button>
            <button className='mt-[10px] bg-yellow-500 text-white rounded-md px-[10px] py-[5px] hover:bg-yellow-600 w-[100px]' onClick={copy}>Copy</button>
          </div>
        </div>
      </div>
    </>
  )
}

function Home() {
  let [data, setData] = React.useState<ShowAPIProps[]>([])
  let [searchText, setSearchText] = React.useState<string>('')
  let [staleDate, setStaleDate] = React.useState<ShowAPIProps[]>([])

  let search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    // filter data based on name, url, method, description, code, type, tags, user, language
    let filteredData = staleDate.filter((dataItem) => {
      return dataItem.name.toLowerCase().includes(e.target.value.toLowerCase()) || dataItem.url.toLowerCase().includes(e.target.value.toLowerCase()) || dataItem.method.toLowerCase().includes(e.target.value.toLowerCase()) || dataItem.description.toLowerCase().includes(e.target.value.toLowerCase()) || dataItem.code.toLowerCase().includes(e.target.value.toLowerCase()) || dataItem.type.toLowerCase().includes(e.target.value.toLowerCase()) || dataItem.tags.join(' ').toLowerCase().includes(e.target.value.toLowerCase()) || dataItem.user.name.toLowerCase().includes(e.target.value.toLowerCase()) || dataItem.language.lang.toLowerCase().includes(e.target.value.toLowerCase())
    })

    setData(filteredData)
  }


  React.useEffect(() => {
    fetch('http://localhost:3000/')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setStaleDate(data)
      })
  }, []);
  return (
    <>
      <div className='text-center mt-[200px] font-bold text-yellow-400 text-2xl uppercase'>COMMON API GENERATOR</div>
      <div className='flex justify-center items-center'>
        <input type='search' onChange={search} className='border-2 border-gray-400 rounded-md w-[400px] h-[40px] mt-[20px] ml-[20px] pl-[10px]' placeholder='Authentication' />
      </div>
      <div className='flex justify-center mt-[20px] gap-4 flex-wrap'>
        {
          data.map((dataItem, index) => {
            return (
              <ShowAPI data={dataItem} key={index} />
            )
          }
          )
        }
      </div>
      <div className='fixed top-[30px] right-[30px] flex gap-3'>
        <Link className='bg-blue-200 px-3 py-2 rounded hover:bg-blue-400' to="/postapi">Post</Link>
        <Link className='bg-blue-200 px-3 py-2 rounded hover:bg-blue-400' to="/approve">Approve</Link>
      </div>
    </>
  )

}