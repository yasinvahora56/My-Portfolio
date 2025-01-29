import React from 'react'
import { MdWork } from 'react-icons/md'

const CurruntJob = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className='relative left-5 font-bold text-2xl'>Currunt Role <MdWork className='inline-block' /></h1>
      <button className='bg-sky-200 text-black rounded-lg p-2 text-2xl'>Mern Stack Devloper</button>
    </div>
  )
}

export default CurruntJob
