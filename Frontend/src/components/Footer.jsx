import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='fixed inset-x-0 bottom-0 z-50'>
      <div className='flex overflow-hidden bg-pink-400'>
      <ul className='flex p-2.5 gap-4 text-sm sm:text-base lg:text-lg shrink-0 animate-loop-scroll2'>
        <li className='flex items-center font-black gap-4 shrink-0 flex-nowrap'>
        <img src={assets.cloud} alt='' className='w-10'/>
        FREE FROM 14 MAIN ALLERGENS
        </li>
        <li className='flex items-center font-black gap-4 shrink-0 flex-nowrap '>
        <img src={assets.cloud} alt='' className='w-10' />
          PACKED WITH FLAVOUR
        </li> 
        <li className='flex items-center font-black gap-4 shrink-0 flex-nowrap'>
        <img src={assets.cloud} alt='' className='w-10' />
          100% PLANT BASED
        </li>
      </ul>
      <ul className='flex p-2.5 gap-4 text-sm sm:text-base lg:text-lg shrink-0 animate-loop-scroll2'>
        <li className='flex items-center font-black gap-4 shrink-0 flex-nowrap'>
        <img src={assets.cloud} alt='' className='w-10'/>
        FREE FROM 14 MAIN ALLERGENS
        </li>
        <li className='flex items-center font-black gap-4 shrink-0 flex-nowrap'>
        <img src={assets.cloud} alt='' className='w-10' />
          PACKED WITH FLAVOUR
        </li> 
        <li className='flex items-center font-black gap-4 shrink-0 flex-nowrap'>
        <img src={assets.cloud} alt='' className='w-10' />
          100% PLANT BASED
        </li>
      </ul>
      <ul className='flex p-2.5 gap-4 text-sm sm:text-base lg:text-lg shrink-0 animate-loop-scroll2'>
        <li className='flex items-center font-black gap-4 shrink-0 flex-nowrap'>
        <img src={assets.cloud} alt='' className='w-10'/>
        FREE FROM 14 MAIN ALLERGENS
        </li>
        <li className='flex items-center font-black gap-4 shrink-0 flex-nowrap'>
        <img src={assets.cloud} alt='' className='w-10' />
          PACKED WITH FLAVOUR
        </li> 
        <li className='flex items-center font-black gap-4 shrink-0 flex-nowrap'>
        <img src={assets.cloud} alt='' className='w-10' />
          100% PLANT BASED
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Footer