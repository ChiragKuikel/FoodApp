import React from 'react'
import { assets } from '../assets/assets'

const Eighthpage = () => {
  return (
    <div className='sticky top-0 z-10'>
        <div className='flex flex-col items-center p-32 '>
            <div className='text-7xl font-black text-primary tracking-tighter justify-items-center'>
                INTRIGUED?
            </div>
            <div className='justify-items-center relative'>
                <img src={assets.home6} alt='' className='w-2/3' />
                <button className='bg-pink-400 p-2.5 pl-5 rounded font-black  overflow-hidden text-xl text-black cursor-pointer absolute top-[5%] left-[40%]'>
        <div className='flex whitespace-nowrap w-28 gap-4 hover:animate-loop-scroll1 '>
        <div className='tracking-tighter'>LET'S CHAT</div>
        <div className='tracking-tighter' aria-hidden="true">LET'S CHAT</div>
        </div>
        </button>        
            </div>
        </div>
    </div>
  )
}

export default Eighthpage