import { assets } from '../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState, useRef } from 'react';
import { easeInOut, motion } from "motion/react"
import Container from "../components/Container";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // You'll need to install react-icons or use your own icons

const SeventhPage = () => {
    const [move, setMove] = useState(false);
    const [move2, setMove2] = useState(false);
    const [move3, setMove3] = useState(false);
    const [move4, setMove4] = useState(false);
    const [move5, setMove5] = useState(false);
    const [move6, setMove6] = useState(false);
    const [move7, setMove7] = useState(false);
    const [move8, setMove8] = useState(false);
    const [move9, setMove9] = useState(false);

    const [button1, setButton1] = useState(true);
    const [button2, setButton2] = useState(false);
    
    // Create a ref for the Swiper instance
    const swiperRef = useRef(null);

    return (
    <div>
        <div className='h-16 sm:h-24 bg-primary '></div>
        <div className='bg-primary relative'>
        <Container className="px-0 sm:px-6 lg:px-8">
            {/* Navigation Buttons */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:block">
                <button 
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                    <FaArrowLeft size={24} />
                </button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden md:block">
                <button 
                    onClick={() => swiperRef.current?.slideNext()}
                    className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                    <FaArrowRight size={24} />
                </button>
            </div>

        <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={'auto'}
        spaceBetween={16}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={false} // Disable default navigation since we're using custom buttons
        breakpoints={{
          640: { spaceBetween: 24 },
          1024: { spaceBetween: 30 },
        }}
        
        className="mySwiper"
      >
        <SwiperSlide style={{width:move?"min(92vw,835px)" : "min(92vw,400px)",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid2 relative overflow-clip rounded-lg z-20 cursor-pointer' onClick={() => setMove(!move)}><img src={assets.food1} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]'  /></div>
        <motion.div className='aspect-[3/4] w-[min(92vw,400px)] bg-white overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move?{x:"min(92vw,435px)"}:{x:"0"}}
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
        
        <SwiperSlide style={{width:move2?"min(92vw,835px)" : "min(92vw,400px)",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid1 relative overflow-clip rounded-lg z-20 cursor-pointer' onClick={() => setMove2(!move2)}><img src={assets.food2} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]'  /></div>
        <motion.div className='aspect-[3/4] w-[min(92vw,400px)] bg-white overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move2?{x:"min(92vw,435px)"}:{x:"0"}}
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
        
        <SwiperSlide style={{width:move3?"min(92vw,835px)" : "min(92vw,400px)",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid2 relative overflow-clip rounded-lg z-20 cursor-pointer' onClick={() => setMove3(!move3)}><img src={assets.food3} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]'  /></div>
        <motion.div className='aspect-[3/4] w-[min(92vw,400px)] bg-white overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move3?{x:"min(92vw,435px)"}:{x:"0"}}
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
        
        <SwiperSlide style={{width:move4?"min(92vw,835px)" : "min(92vw,400px)",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid1 relative overflow-clip rounded-lg z-20 cursor-pointer' onClick={() => setMove4(!move4)}><img src={assets.food4} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]'  /></div>
        <motion.div className='aspect-[3/4] w-[min(92vw,400px)] bg-white overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move4?{x:"min(92vw,435px)"}:{x:"0"}}
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
        
        <SwiperSlide style={{width:move5?"min(92vw,835px)" : "min(92vw,400px)",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid1 relative overflow-clip rounded-lg z-20 cursor-pointer' onClick={() => setMove5(!move5)}><img src={assets.food5} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]'  /></div>
        <motion.div className='aspect-[3/4] w-[min(92vw,400px)] bg-white overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move5?{x:"min(92vw,435px)"}:{x:"0"}}
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
        
        <SwiperSlide style={{width:move6?"min(92vw,835px)" : "min(92vw,400px)",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid1 relative overflow-clip rounded-lg z-20 cursor-pointer' onClick={() => setMove6(!move6)}><img src={assets.food6} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]'  /></div>
        <motion.div className='aspect-[3/4] w-[min(92vw,400px)] bg-white overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move6?{x:"min(92vw,435px)"}:{x:"0"}}
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
        
        <SwiperSlide style={{width:move7?"min(92vw,835px)" : "min(92vw,400px)",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid1 relative overflow-clip rounded-lg z-20 cursor-pointer' onClick={() => setMove7(!move7)}><img src={assets.food7} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]'  /></div>
        <motion.div className='aspect-[3/4] w-[min(92vw,400px)] bg-white overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move7?{x:"min(92vw,435px)"}:{x:"0"}}
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
        
        <SwiperSlide style={{width:move8?"min(92vw,835px)" : "min(92vw,400px)",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid1 relative overflow-clip rounded-lg z-20 cursor-pointer' onClick={() => setMove8(!move8)}><img src={assets.food8} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]'  /></div>
        <motion.div className='aspect-[3/4] w-[min(92vw,400px)] bg-white overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move8?{x:"min(92vw,435px)"}:{x:"0"}}
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
        
        <SwiperSlide style={{width:move9?"min(92vw,835px)" : "min(92vw,400px)",transition: "width 0.5s ease"}}>
        <div className='relative'>
        <div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid1 relative overflow-clip rounded-lg z-20 cursor-pointer' onClick={() => setMove9(!move9)}><img src={assets.food9} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]'  /></div>
        <motion.div className='aspect-[3/4] w-[min(92vw,400px)] bg-white overflow-clip rounded-lg absolute z-10 top-0 '
        initial={{x:0}}
        animate={move9?{x:"min(92vw,435px)"}:{x:"0"}}
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
        
        <SwiperSlide style={{width:"min(92vw,400px)"}}><div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid1 relative overflow-clip rounded-lg'><img src={assets.food10} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]' /></div></SwiperSlide>
        
        <SwiperSlide style={{width:"min(92vw,400px)"}}><div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid1 relative overflow-clip rounded-lg'><img src={assets.food12} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]' /></div></SwiperSlide>
        
        <SwiperSlide style={{width:"min(92vw,400px)"}}><div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid2 relative overflow-clip rounded-lg'><img src={assets.food13} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]' /></div></SwiperSlide>
        
        <SwiperSlide style={{width:"min(92vw,400px)"}}><div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid2 relative overflow-clip rounded-lg'><img src={assets.food14} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]' /></div></SwiperSlide>
        
        <SwiperSlide style={{width:"min(92vw,400px)"}}><div className='aspect-[3/4] w-[min(92vw,400px)] bg-grid1 relative overflow-clip rounded-lg'><img src={assets.food15} alt='' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[2.2]' /></div></SwiperSlide>
      </Swiper>
      </Container>
      </div>
      <div className='h-16 sm:h-24 bg-primary'></div>
    </div>
  )
}

export default SeventhPage