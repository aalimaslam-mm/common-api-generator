import React from 'react'
import { Link } from 'react-router-dom'

export default function Approve() {
    let [data, setData] = React.useState<any>([])
    let [open, setOpen] = React.useState<boolean>(false)
    let [code, setCode] = React.useState<string>('')
    let [Id, setId] = React.useState<string>('')

    let openModal = (e: string, id: string) => {
        setCode(e)
        setOpen(true)
        setId(id)
    }
    let closeModal = () => {
        setOpen(false)
        setCode('')
        setId("")
    }



    React.useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        fetch('http://localhost:3000/getall')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }

    const approveApi = (id: string) => {
        fetch('http://localhost:3000/approve', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then(res => res.json())
            .then(data => {
                alert('Approved');
                fetchData()
            })
    }
    return (
        <>
            <div className='mt-[50px]'>
                <div className='text-center text-2xl font-bold'>Approve</div>
                <table className='w-full'>
                    <thead className='bg-gray-800 text-white w-full'>
                        <tr className='w-full'>
                            <th className="text-center">Id</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Url</th>
                            <th className="text-center">Method</th>
                            <th className="text-center">Description</th>
                            <th className="text-center">Code</th>
                            <th className="text-center">Approve</th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        {
                            data.map((dataItem: any, index: any) => {
                                return (
                                    <tr key={index} className='w-full'>
                                        <td className='text-[14px] bg-slate-100 p-2 text-center'>{dataItem._id}</td>
                                        <td className='text-[14px] bg-slate-200 p-2 text-center'>{dataItem.name}</td>
                                        <td className='text-[14px] bg-slate-300 p-2 text-center'>{dataItem.url}</td>
                                        <td className='text-[14px] bg-slate-400 p-2 text-center'>{dataItem.method}</td>
                                        <td className='text-[14px] bg-slate-500 text-white w-[200px] p-2 text-center'>{dataItem.description}</td>
                                        <td className='text-[14px] bg-slate-600 text-white w-[200px] p-2 text-center'>
                                            <button className='bg-slate-300 px-3 py-2 text-black rounded hover:bg-slate-400' onClick={() => openModal(dataItem.code, dataItem._id)}>See Code</button>
                                        </td>
                                        {
                                            dataItem.approved ? <td className='text-[14px] bg-green-500 text-white w-[200px] p-2 text-center'>Approved</td> : <td className='text-[14px] bg-red-500 text-white w-[200px] p-2 text-center'>Not Approved</td>
                                        }
                                        <td className='text-center'><button className={`${dataItem.approved ? ("bg-slate-200") : ("bg-green-500 hover:bg-green-600 text-white")} px-2 py-1 rounded-md`} disabled={dataItem.approved} onClick={() => approveApi(dataItem._id)}>Approve</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {open && <CodeDialog code={code} closeModal={closeModal} approveCode={approveApi} Id={Id} />}
            <div className='absolute top-[30px] right-[30px] flex gap-2'>
                <Link to="/" className='bg-slate-300 px-3 py-1 rounded hover:bg-slate-400'>Home</Link>
                <Link to="/postapi" className='bg-slate-300 px-3 py-1 rounded hover:bg-slate-400'>Post</Link>
            </div>
        </>
    )
}

function CodeDialog({ code, closeModal, approveCode, Id }: { code: string, closeModal: () => void, approveCode: (e: string) => void, Id: string }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40">
            <div className="w-[90%] h-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-md p-5 flex flex-col justify-between">
                <pre>{code}</pre>
                <div className="flex gap-1 mt-[50px]">
                    <button className="bg-red-500 w-1/2 hover:bg-red-600 text-white px-2 py-1 rounded-md" onClick={closeModal}>Close</button>
                    <button className='bg-green-500 w-1/2 hover:bg-green-600 px-2 py-1 rounded-md' onClick={() => approveCode(Id)}>Approve</button>
                </div>
            </div>
        </div>
    )
}