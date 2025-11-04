import React from 'react'
import { assets } from '../assets/assets'
const Secondpage = () => {
  return (
    <div className='sticky bottom-0 size-full z-30'>
    <div className='flex bg-thirdpage items-center py-24 pl-12 pr-6 '>
      <div> 
        <img src={assets.hug} alt='' className='w-10/12'/>
      </div>
      <div className='flex flex-col '>
        <h1 className='font-black text-5xl tracking-tighter '>
          INSPIRING GOOD THROUGH <br />TASTY GOODNESS
        </h1>
        <br />
        <p className='text-xl tracking-tighter'>We're here to inspire discovery and tempt everyone to <br />eat more plants. Because we care about the future <br /> yours, ours and  the planet's.</p>
      </div>
    </div>
    </div>
  )
}

export default Secondpage;