import React from 'react'
import { assets } from '../assets/assets'
const Sixthpage = () => {
  return (
    <div className=' bg-primary pt-44 pb-44'>
        <div className='flex gap-2'>
            {/* left side */}
            <div className='flex-1 p-24 '> {/* Flex-1 means the starting size is 0 and the element can grow or sink to fill. Since both parts have flex-1 both start at 0 and expand equally so the take 50 50 space */}
                <img src={assets.Sixthpage} alt='xaina' className='rounded-lg'/>
            </div>
            {/* right side */}
            <div className='flex-1 p-8'>
                <h3 className='text-7xl text-white font-black tracking-tighter'>
                    WE'RE GROWING <br />
                    MORE THAN <br />
                    PLANTS...<br />
                </h3>
                <p className='text-white text-lg pr-20'>
                We’re here to grow a positive, curious and thoughtful attitude to  plant-based food. Which is why we put curiosity at the heart of everything we do. So much so, we’ve built our own vertical farm – a near-off-grid, plant playground where we’re researching how to add even more flavour, nutrition and sustainability to the way we all eat.
                </p>
                <button className='bg-pink-400 py-2 px-2 rounded font-black  overflow-hidden text-sm text-black cursor-pointer mt-16'>
        <div className='flex whitespace-nowrap w-48 gap-2.5 hover:animate-loop-scroll1 '>
        <div className='text-xl '>VISIT SYAN FARMS</div>
        <div className='text-xl' aria-hidden="true">VISIT SYAN FARMS</div>
        </div>
        </button>
            </div>
        </div>
    </div>
  )
}

export default Sixthpage