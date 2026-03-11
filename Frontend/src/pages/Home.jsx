import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import Header from "../components/Header";
import { HiddenContext } from "../contexts/HiddenContext";
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
  const [hidden,setHidden] = useState(false);
  
useEffect(() => {
  let currentValue = 0;
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
