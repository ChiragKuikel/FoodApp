import React from 'react'
import { assets } from '../assets/assets'

const Thirdpage = () => {
  return (
    <div className='bg-thirdpage pt-20 sticky -bottom-20 size-full z-20'>
        <h1 className='text-center font-black text-5xl text-primary my-20'>
            FEATURES & <br /> BENEFITS
        </h1>
        <div className='grid grid-cols-thirdpage gap-2 ml-20 mr-20 pb-36'>
            <div>
            <img src={assets.first} alt='' className='w-56  justify-self-center'/>
            <h1 className='font-semibold text-3xl text-center mt-16'>PLANT BASED</h1>
            <h2 className='text-center mt-2'>Plant-protein yumminess, suitable for everyone</h2>
            </div>
            <div>
            <img src={assets.second} alt='' className='w-56 justify-self-center'/>
            <h1 className='font-semibold text-3xl text-center mt-14'>REAL INGREDIENTS</h1>
            <h2 className='text-center mt-2'>If we don't know exactly what an ingredient is, we don't include it.</h2>
            </div>
            <div>
            <img src={assets.third} alt='' className='w-56 justify-self-center'/>
            <h1 className='font-semibold text-3xl text-center mt-14'>UNREAL TEXTURE</h1>
            <h2 className='text-center mt-2'>It's not meat. No really, it's not!</h2>
            </div>
            <div>
            <img src={assets.fourth} alt='' className='w-56 justify-self-center'/>
            <h1 className='font-semibold text-3xl text-center mt-14'>BLAND IS BANNED</h1>
            <h2 className='text-center mt-2'>Foodies unite, because here flavour rules.</h2>
            </div>
            
        </div>
    </div>
  )
}

export default Thirdpage