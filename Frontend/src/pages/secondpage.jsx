import { assets } from '../assets/assets'
import Container from "../components/Container";
import { motion } from "motion/react";
const Secondpage = () => {
  return (
    <motion.section
      className="bg-thirdpage z-30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">
          <div className="w-full md:w-1/2">
            <img src={assets.hug} alt="" className="mx-auto w-[min(92vw,520px)]" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              INSPIRING GOOD THROUGH TASTY GOODNESS
            </h2>
            <p className="mt-4 text-base sm:text-lg">
              We’re here to inspire discovery and tempt everyone to eat more
              plants. Because we care about the future — yours, ours and the
              planet’s.
            </p>
          </div>
        </div>
      </Container>
    </motion.section>
  )
}

export default Secondpage;