import { assets } from '../assets/assets'
import Container from "../components/Container";
import { motion } from "motion/react";
const Sixthpage = () => {
  return (
    <motion.section
      className='bg-primary py-14 sm:py-20 lg:py-28'
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-center'>
          <div className='w-full lg:w-1/2'>
            <img src={assets.Sixthpage} alt='' className='w-full rounded-lg object-cover' />
          </div>
          <div className='w-full lg:w-1/2'>
            <h3 className='text-4xl sm:text-5xl lg:text-7xl text-white font-black tracking-tight leading-none'>
              WE&apos;RE GROWING
              <br />
              MORE THAN
              <br />
              PLANTS...
            </h3>
            <p className='mt-4 text-white text-base sm:text-lg lg:pr-10'>
              We’re here to grow a positive, curious and thoughtful attitude to
              plant-based food. Which is why we put curiosity at the heart of
              everything we do. So much so, we’ve built our own vertical farm –
              a near-off-grid, plant playground where we’re researching how to
              add even more flavour, nutrition and sustainability to the way we
              all eat.
            </p>
            <button className='btn-farm-cta mt-8 rounded-full bg-pink-400 px-6 py-3 font-black text-black cursor-pointer'>
              <span className='inline-flex items-center gap-2 text-base sm:text-lg'>
                <span>VISIT SYAN FARMS</span>
                <span aria-hidden='true'>🌱</span>
              </span>
            </button>
          </div>
        </div>
      </Container>
    </motion.section>
  )
}

export default Sixthpage