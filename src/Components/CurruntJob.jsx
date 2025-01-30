import React from 'react'
import { MdWork } from 'react-icons/md'

const CurruntJob = ({colors, byDefaultColors}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className='relative left-5 font-bold text-2xl'>Currunt Role <MdWork className='inline-block' /></h1>
      <button className='text-white rounded-lg p-2 text-2xl' style={{backgroundImage:`linear-gradient(to left, ${byDefaultColors}, ${colors})`}}>Mern Stack Devloper</button>
    </div>
  )
}

export default CurruntJob
