import React, { useContext } from 'react' 
/* #042F1A */ 
import { assets } from '../assets/assets'
import { NavLink } from 'react-router';
import { HiddenContext } from '../pages/Home';
const Header = () => {
  const hidden = useContext(HiddenContext);
  return (
    <div className='flex invisible  md:visible font-bold text-white w-full px-20 items-center absolute ' style={{top:hidden? '-150px': '0',transition:"top 0.6s ease",zIndex: 50, }} >
        
        <NavLink className='flex-1'>
            ABOUT
        </NavLink>
        <NavLink className='flex-1'>
            PRODUCTS
        </NavLink>
        <div className='flex-1'>
        <img className='w-32' src={assets.LOGO} alt='' />
        </div>
        <NavLink className='flex-1'>
            RECIPES
        </NavLink>
        
       <button className='bg-pink-400  p-2 rounded-lg font-black  overflow-hidden text-sm text-black cursor-pointer'>
        <div className='flex whitespace-nowrap w-24 gap-4 hover:animate-loop-scroll1 '>
        <div className=''>CONTACT US</div>
        <div className='' aria-hidden="true">CONTACT US</div>
        </div>
        </button>
    </div>
  )
}

export default Header;