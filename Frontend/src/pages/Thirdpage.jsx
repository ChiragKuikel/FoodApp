import { assets } from '../assets/assets'
import Container from "../components/Container";
import { motion } from "motion/react";

const Thirdpage = () => {
  return (
    <motion.section
      className='bg-thirdpage pt-16 sm:pt-20 z-20'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container>
        <h2 className='text-center font-black text-3xl sm:text-4xl lg:text-5xl text-primary my-10 sm:my-16'>
            FEATURES & BENEFITS
        </h2>
        <div className='grid grid-cols-thirdpage gap-6 pb-16 sm:pb-24'>
            <div>
            <img src={assets.first} alt='' className='mx-auto w-40 sm:w-48 md:w-56'/>
            <h1 className='font-semibold text-3xl text-center mt-16'>PLANT BASED</h1>
            <h2 className='text-center mt-2'>Plant-protein yumminess, suitable for everyone</h2>
            </div>
            <div>
            <img src={assets.second} alt='' className='mx-auto w-40 sm:w-48 md:w-56'/>
            <h1 className='font-semibold text-3xl text-center mt-14'>REAL INGREDIENTS</h1>
            <h2 className='text-center mt-2'>If we don’t know exactly what an ingredient is, we don’t include it.</h2>
            </div>
            <div>
            <img src={assets.third} alt='' className='mx-auto w-40 sm:w-48 md:w-56'/>
            <h1 className='font-semibold text-3xl text-center mt-14'>UNREAL TEXTURE</h1>
            <h2 className='text-center mt-2'>It’s not meat. No really, it’s not!</h2>
            </div>
            <div>
            <img src={assets.fourth} alt='' className='mx-auto w-40 sm:w-48 md:w-56'/>
            <h1 className='font-semibold text-3xl text-center mt-14'>BLAND IS BANNED</h1>
            <h2 className='text-center mt-2'>Foodies unite, because here flavour rules.</h2>
            </div>
            
        </div>
      </Container>
    </motion.section>
  )
}

export default Thirdpage