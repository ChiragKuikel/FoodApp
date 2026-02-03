import React, { useRef } from 'react'
import {  motion, useScroll,useTransform,useMotionValue } from 'framer-motion'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Header from '../components/Header';
export const HiddenContext = createContext('false');
import Firstpage from './FirstPage';
import Thirdpage from './Thirdpage';
import Secondpage from './secondpage';
import Fifthpage from './Fifthpage';
import Sixthpage from './Sixthpage';
import SeventhPage from './Seventhpage';
import Eighthpage from './eighthpage';
import Lastpage from './lastpage';

const Home = () => {
  const {scrollYProgress} = useScroll();
  const scrollRef = useRef(null);
 
  const { scrollYProgress: firstPageScrollYProgress } = useScroll(
    {
      container:scrollRef
    }
  );
{/*const translateY = useTransform(firstPageScrollYProgress,[0,1],[0,-1600]);*/}
  const [hidden,setHidden] = useState(false);
  
useEffect(() => {
  let currentValue = 0;
  {/*
  const subscribe = firstPageScrollYProgress.onChange((value) => {
  
    console.log('1stpage',value);
    
  });
*/}
  const unsubscribe = scrollYProgress.onChange((value) => {
    if(value>currentValue){
      setHidden(true);
    } 
    else if(value<currentValue){
      setHidden(false);
    }
    currentValue = value;

 
  });

  return () => unsubscribe(); // Cleanup listener on unmount
}, [scrollYProgress]);



  return (
    <HiddenContext.Provider value={hidden}>
      <div>
        {/*  <div className='relative'>
    <div  ref={scrollRef}>
  
    <motion.div className='absolute size-full z-10' style={{ y: translateY }}  >
    <Firstpage  />
    </motion.div>
    
    </div>
      <div className='absolute size-full'><Thirdpage /></div>
    </div>*/}
    <Header />
    
  
    <Firstpage />
    <Secondpage />
    <Thirdpage />
  
    
   <Fifthpage />
    <Sixthpage />
    <SeventhPage />
    <Eighthpage />
    <Lastpage />
  </div>
   
   

    </HiddenContext.Provider>
  )
}

export default Home
