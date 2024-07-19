import Link from 'next/link'
import React from 'react'

const Shelters = () => {
  return (
    <>
      <div>Shelters</div>
      <div className="pt-5 pl-5 grid grid-flow-row grid-flow-col gap-4 place-items-start text-neutral-300 m-5">
        Display listing here
      </div>
      <div className="flex justify-center items-center h-screen">
        <Link className="flex-1 text-center bg-yellow-300 text-slate-50 p-2 rounded-md m-5" href="/">Home</Link>
        <Link className="flex-1 text-center bg-yellow-300 text-slate-50 p-2 rounded-md m-5" href="/shelters/add">Add</Link>
      </div>
    </>
    
  )
}

export default Shelters