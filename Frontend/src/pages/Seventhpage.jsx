import React from 'react'
import { assets } from '../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import { easeInOut, motion } from "motion/react"


const SeventhPage = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [move, setMove] = useState(false);
    const [move2, setMove2] = useState(false);
    const [move3, setMove3] = useState(false);
    const [move4, setMove4] = useState(false);
    const [move5, setMove5] = useState(false);
    const [move6, setMove6] = useState(false);
    const [move7, setMove7] = useState(false);
    const [move8, setMove8] = useState(false);
    const [move9, setMove9] = useState(false);
    const [move10, setMove10] = useState(false);
    const [move11, setMove11] = useState(false);
    const [move12, setMove12] = useState(false);
    const [move13, setMove13] = useState(false);
    const [move14, setMove14] = useState(false);

    const [button1, setButton1] = useState(true);
    const [button2, setButton2] = useState(false);
    {/*
    const [slides, setSlides] = useState(
    Array.from({length:15}).map((_,index) => <div className={`h-[90vh] bg-grid${[0, 2, 5, 11, 12].includes(index) ? 2 :[14].includes(index)?"primary":1} relative `}><img src={assets[`food${index + 1}`]} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4] '  /></div> )
    );
    const append = () => {
      };
    */}
  return (
    <div>
        
        
        <div className='h-[200px] bg-primary '></div>
        <div className='bg-primary pl-24'>
        <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={'auto'}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        
        className="mySwiper"
        
      >
        {/*slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index} className='overflow-hidden rounded-lg relative'>
            {slideContent}
          </SwiperSlide>
        ))*/}
        {/* ------------------SLIDER--------------------------------------*/}
        <SwiperSlide style={{width:move?"835px" : "400px",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='h-[90vh] w-[400px] bg-grid2 relative overflow-clip rounded-lg z-20' onClick={() => setMove(!move)}><img src={assets.food1} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]'  /></div>
        <motion.div className='h-[90vh] w-[400px] bg-white  overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move?{x:"435px"}:{x:"0"}}
        transition={{duration: 0.5, ease:easeInOut}}
        >
          <div className='flex flex row gap-0 pt-12 px-2'>
            <div className=' flex-1 text-center text-lg font-bold border p-3 cursor-pointer' style={{borderRadius : "10px 0 0 10px ", backgroundColor:button1?'#1abe71':'rgb(156 163 175)'}} onClick={() => {setButton1(true);setButton2(false)}}>
            INGREDIENTS
            </div>
            <div className='bg-gray-300 flex-1 text-center text-lg font-bold border p-3 cursor-pointer'style={{borderRadius : "0 10px 10px 0", backgroundColor:button2?'#1abe71':'rgb(156 163 175)'}} onClick={()=> {setButton2(true);setButton1(false)}}>
                STEPS
              </div>

          </div>
          {button1 && <div>Ingredients N/A</div>}
          {button2 && <div>Steps N/A</div>}
        </motion.div>
        </div>
        </SwiperSlide>
        {/* ------------------SLIDER------------------------------------------------------------------------------------------*/}
        <SwiperSlide style={{width:move2?"835px" : "400px",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='h-[90vh] w-[400px] bg-grid1 relative overflow-clip rounded-lg z-20' onClick={() => setMove2(!move2)}><img src={assets.food2} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]'  /></div>
        <motion.div className='h-[90vh] w-[400px] bg-white  overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move2?{x:"435px"}:{x:"0"}}
        transition={{duration: 0.5, ease:easeInOut}}
        >
          <div className='flex flex row gap-0 pt-12 px-2'>
            <div className=' flex-1 text-center text-lg font-bold border p-3 cursor-pointer' style={{borderRadius : "10px 0 0 10px ", backgroundColor:button1?'#1abe71':'rgb(156 163 175)'}} onClick={() => {setButton1(true);setButton2(false)}}>
            INGREDIENTS
            </div>
            <div className='bg-gray-300 flex-1 text-center text-lg font-bold border p-3 cursor-pointer'style={{borderRadius : "0 10px 10px 0", backgroundColor:button2?'#1abe71':'rgb(156 163 175)'}} onClick={()=> {setButton2(true);setButton1(false)}}>
                STEPS
              </div>

          </div>
          {button1 && <div>Ingredients N/A</div>}
          {button2 && <div>Steps N/A</div>}
        </motion.div>
        </div>
        </SwiperSlide>        {/* ------------------SLIDER------------------------------------------------------------------------------------------*/}
        <SwiperSlide style={{width:move3?"835px" : "400px",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='h-[90vh] w-[400px] bg-grid2 relative overflow-clip rounded-lg z-20' onClick={() => setMove3(!move3)}><img src={assets.food3} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]'  /></div>
        <motion.div className='h-[90vh] w-[400px] bg-white  overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move3?{x:"435px"}:{x:"0"}}
        transition={{duration: 0.5, ease:easeInOut}}
        >
          <div className='flex flex row gap-0 pt-12 px-2'>
            <div className=' flex-1 text-center text-lg font-bold border p-3 cursor-pointer' style={{borderRadius : "10px 0 0 10px ", backgroundColor:button1?'#1abe71':'rgb(156 163 175)'}} onClick={() => {setButton1(true);setButton2(false)}}>
            INGREDIENTS
            </div>
            <div className='bg-gray-300 flex-1 text-center text-lg font-bold border p-3 cursor-pointer'style={{borderRadius : "0 10px 10px 0", backgroundColor:button2?'#1abe71':'rgb(156 163 175)'}} onClick={()=> {setButton2(true);setButton1(false)}}>
                STEPS
              </div>

          </div>
          {button1 && <div>Ingredients N/A</div>}
          {button2 && <div>Steps N/A</div>}
        </motion.div>
        </div>
        </SwiperSlide>   
        {/* ------------------SLIDER------------------------------------------------------------------------------------------*/}
        <SwiperSlide style={{width:move4?"835px" : "400px",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='h-[90vh] w-[400px] bg-grid1 relative overflow-clip rounded-lg z-20' onClick={() => setMove4(!move4)}><img src={assets.food4} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]'  /></div>
        <motion.div className='h-[90vh] w-[400px] bg-white  overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move4?{x:"435px"}:{x:"0"}}
        transition={{duration: 0.5, ease:easeInOut}}
        >
          <div className='flex flex row gap-0 pt-12 px-2'>
            <div className=' flex-1 text-center text-lg font-bold border p-3 cursor-pointer' style={{borderRadius : "10px 0 0 10px ", backgroundColor:button1?'#1abe71':'rgb(156 163 175)'}} onClick={() => {setButton1(true);setButton2(false)}}>
            INGREDIENTS
            </div>
            <div className='bg-gray-300 flex-1 text-center text-lg font-bold border p-3 cursor-pointer'style={{borderRadius : "0 10px 10px 0", backgroundColor:button2?'#1abe71':'rgb(156 163 175)'}} onClick={()=> {setButton2(true);setButton1(false)}}>
                STEPS
              </div>

          </div>
          {button1 && <div>Ingredients N/A</div>}
          {button2 && <div>Steps N/A</div>}
        </motion.div>
        </div>
        </SwiperSlide>        
        {/* ------------------SLIDER------------------------------------------------------------------------------------*/}
        <SwiperSlide style={{width:move5?"835px" : "400px",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='h-[90vh] w-[400px] bg-grid1 relative overflow-clip rounded-lg z-20' onClick={() => setMove5(!move5)}><img src={assets.food5} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]'  /></div>
        <motion.div className='h-[90vh] w-[400px] bg-white  overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move5?{x:"435px"}:{x:"0"}}
        transition={{duration: 0.5, ease:easeInOut}}
        >
          <div className='flex flex row gap-0 pt-12 px-2'>
            <div className=' flex-1 text-center text-lg font-bold border p-3 cursor-pointer' style={{borderRadius : "10px 0 0 10px ", backgroundColor:button1?'#1abe71':'rgb(156 163 175)'}} onClick={() => {setButton1(true);setButton2(false)}}>
            INGREDIENTS
            </div>
            <div className='bg-gray-300 flex-1 text-center text-lg font-bold border p-3 cursor-pointer'style={{borderRadius : "0 10px 10px 0", backgroundColor:button2?'#1abe71':'rgb(156 163 175)'}} onClick={()=> {setButton2(true);setButton1(false)}}>
                STEPS
              </div>

          </div>
          {button1 && <div>Ingredients N/A</div>}
          {button2 && <div>Steps N/A</div>}
        </motion.div>
        </div>
        </SwiperSlide>        
        {/* ------------------SLIDER----------------------------------------------------------------------------------------*/}
        <SwiperSlide style={{width:move6?"835px" : "400px",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='h-[90vh] w-[400px] bg-grid1 relative overflow-clip rounded-lg z-20' onClick={() => setMove6(!move6)}><img src={assets.food6} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]'  /></div>
        <motion.div className='h-[90vh] w-[400px] bg-white  overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move6?{x:"435px"}:{x:"0"}}
        transition={{duration: 0.5, ease:easeInOut}}
        >
          <div className='flex flex row gap-0 pt-12 px-2'>
            <div className=' flex-1 text-center text-lg font-bold border p-3 cursor-pointer' style={{borderRadius : "10px 0 0 10px ", backgroundColor:button1?'#1abe71':'rgb(156 163 175)'}} onClick={() => {setButton1(true);setButton2(false)}}>
            INGREDIENTS
            </div>
            <div className='bg-gray-300 flex-1 text-center text-lg font-bold border p-3 cursor-pointer'style={{borderRadius : "0 10px 10px 0", backgroundColor:button2?'#1abe71':'rgb(156 163 175)'}} onClick={()=> {setButton2(true);setButton1(false)}}>
                STEPS
              </div>

          </div>
          {button1 && <div>Ingredients N/A</div>}
          {button2 && <div>Steps N/A</div>}
        </motion.div>
        </div>
        </SwiperSlide>        
        {/* ------------------SLIDER-----------------------------------------------------------------------------------------*/}
        <SwiperSlide style={{width:move7?"835px" : "400px",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='h-[90vh] w-[400px] bg-grid1 relative overflow-clip rounded-lg z-20' onClick={() => setMove7(!move7)}><img src={assets.food7} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]'  /></div>
        <motion.div className='h-[90vh] w-[400px] bg-white  overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move7?{x:"435px"}:{x:"0"}}
        transition={{duration: 0.5, ease:easeInOut}}
        >
          <div className='flex flex row gap-0 pt-12 px-2'>
            <div className=' flex-1 text-center text-lg font-bold border p-3 cursor-pointer' style={{borderRadius : "10px 0 0 10px ", backgroundColor:button1?'#1abe71':'rgb(156 163 175)'}} onClick={() => {setButton1(true);setButton2(false)}}>
            INGREDIENTS
            </div>
            <div className='bg-gray-300 flex-1 text-center text-lg font-bold border p-3 cursor-pointer'style={{borderRadius : "0 10px 10px 0", backgroundColor:button2?'#1abe71':'rgb(156 163 175)'}} onClick={()=> {setButton2(true);setButton1(false)}}>
                STEPS
              </div>

          </div>
          {button1 && <div>Ingredients N/A</div>}
          {button2 && <div>Steps N/A</div>}
        </motion.div>
        </div>
        </SwiperSlide>        
        {/* ------------------SLIDER-------------------------------------------------------------------------------------------*/}
        
        <SwiperSlide style={{width:move8?"835px" : "400px",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='h-[90vh] w-[400px] bg-grid1 relative overflow-clip rounded-lg z-20' onClick={() => setMove8(!move8)}><img src={assets.food8} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]'  /></div>
        <motion.div className='h-[90vh] w-[400px] bg-white  overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move8?{x:"435px"}:{x:"0"}}
        transition={{duration: 0.5, ease:easeInOut}}
        >
          <div className='flex flex row gap-0 pt-12 px-2'>
            <div className=' flex-1 text-center text-lg font-bold border p-3 cursor-pointer' style={{borderRadius : "10px 0 0 10px ", backgroundColor:button1?'#1abe71':'rgb(156 163 175)'}} onClick={() => {setButton1(true);setButton2(false)}}>
            INGREDIENTS
            </div>
            <div className='bg-gray-300 flex-1 text-center text-lg font-bold border p-3 cursor-pointer'style={{borderRadius : "0 10px 10px 0", backgroundColor:button2?'#1abe71':'rgb(156 163 175)'}} onClick={()=> {setButton2(true);setButton1(false)}}>
                STEPS
              </div>

          </div>
          {button1 && <div>Ingredients N/A</div>}
          {button2 && <div>Steps N/A</div>}
        </motion.div>
        </div>
        </SwiperSlide>        
        {/* ------------------SLIDER------------------------------------------------------------------------------------------------------------------------------------------*/}
        <SwiperSlide style={{width:move9?"835px" : "400px",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='h-[90vh] w-[400px] bg-grid1 relative overflow-clip rounded-lg z-20' onClick={() => setMove9(!move9)}><img src={assets.food9} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]'  /></div>
        <motion.div className='h-[90vh] w-[400px] bg-white  overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move9?{x:"435px"}:{x:"0"}}
        transition={{duration: 0.5, ease:easeInOut}}
        >
          <div className='flex flex row gap-0 pt-12 px-2'>
            <div className=' flex-1 text-center text-lg font-bold border p-3 cursor-pointer' style={{borderRadius : "10px 0 0 10px ", backgroundColor:button1?'#1abe71':'rgb(156 163 175)'}} onClick={() => {setButton1(true);setButton2(false)}}>
            INGREDIENTS
            </div>
            <div className='bg-gray-300 flex-1 text-center text-lg font-bold border p-3 cursor-pointer'style={{borderRadius : "0 10px 10px 0", backgroundColor:button2?'#1abe71':'rgb(156 163 175)'}} onClick={()=> {setButton2(true);setButton1(false)}}>
                STEPS
              </div>

          </div>
          {button1 && <div>Ingredients N/A</div>}
          {button2 && <div>Steps N/A</div>}
        </motion.div>
        </div>
        </SwiperSlide>        
        {/* ------------------SLIDER-----(alxi lagyo copy paste hanna yespaxi)---------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <SwiperSlide style={{width:"400px"}}><div className='h-[90vh] w-[400px] bg-grid1 relative overflow-clip rounded-lg'><img src={assets.food10} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]' /></div></SwiperSlide>
        {/* ------------------SLIDER-------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <SwiperSlide style={{width:"400px"}}><div className='h-[90vh] w-[400px] bg-grid1 relative overflow-clip rounded-lg'><img src={assets.food12} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]' /></div></SwiperSlide>
        {/* ------------------SLIDER-----------------------------------------------------------------------------------------------------------------------------------------------*/}
        <SwiperSlide style={{width:"400px"}}><div className='h-[90vh] w-[400px] bg-grid2 relative overflow-clip rounded-lg'><img src={assets.food13} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]' /></div></SwiperSlide>
        {/* ------------------SLIDER------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <SwiperSlide style={{width:"400px"}}><div className='h-[90vh] w-[400px] bg-grid2 relative overflow-clip rounded-lg'><img src={assets.food14} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]' /></div></SwiperSlide>
        {/* ------------------SLIDER-----------------------------------------------------------------------------------------------------------------------------------------------*/}
        <SwiperSlide style={{width:"400px"}}><div className='h-[90vh] w-[400px] bg-grid1 relative overflow-clip rounded-lg'><img src={assets.food15} alt='' className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 scale-[2.4]' /></div></SwiperSlide>
      </Swiper>
      </div>
      <div className='h-[200px] bg-primary'></div>
    </div>
  )
}

export default SeventhPage