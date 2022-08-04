import Link from 'next/link'
import React from 'react'

const HIWComponent = ({Heading,Paragraph}: {Heading:string, Paragraph: string}) => {
  return (
    <div className="group w-full max-w-[360px] sm:w-[360px] m-4 rounded-lg border shadow-md bg-white hover:bg-[#f17732] border-gray-700 px-4 py-6 flex flex-col items-center justify-between">
       <div className='mb-4'>

        <h1 className='mb-4 text-3xl text-center text-[#f17732] group-hover:text-white font-semibold'>{Heading}</h1>
        <p className='text-lg text-center group-hover:text-white'>{Paragraph}</p>
       </div>
        <Link href="https://bit.ly/3IRQQAP">
            <div className='w-[fit-content] text-lg font-semibold border-2 bg-[#e1e2f6] text-[#565acf] px-6 py-2 rounded-lg group-hover:bg-white group-hover:text-[#f17732] cursor-pointer'>
                <p>Join Us</p>
            </div>
        </Link>
    </div>
  )
}

export default HIWComponent