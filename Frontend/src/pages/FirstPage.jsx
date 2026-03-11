import { assets } from '../assets/assets';
import Container from "../components/Container";
import { motion } from "motion/react";

const Firstpage = () => {
  return (
    <div className='relative z-40'>
      {/* Hero Section */}
      <motion.section
        className="bg-primary pt-24 pb-12 md:pt-28 md:pb-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-secondary blur-3xl" />
          <div className="absolute bottom-0 -right-24 h-72 w-72 rounded-full bg-emerald-400/40 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="mb-6 flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              100% PLANT-BASED JOY
            </span>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6 text-center lg:text-left">
              <motion.h1
                className="font-black leading-none tracking-tight text-white text-[clamp(3rem,8vw,5.5rem)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                MEAT-FREE
                <br />
                YOUR MIND
              </motion.h1>
              <motion.p
                className="mx-auto max-w-xl text-base sm:text-lg text-emerald-100/90"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.55 }}
              >
                Bold, playful, plant-forward food that rewires what “meat-free”
                can taste like. Big flavour, zero compromise, and plates that
                stay curious.
              </motion.p>
              <motion.div
                className="mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <button className="rounded-full bg-white px-6 py-3 text-sm font-black tracking-tight text-primary shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  EXPLORE PRODUCTS
                </button>
                <button className="rounded-full border border-emerald-200/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-100/10">
                  WHY MEAT-FREE?
                </button>
              </motion.div>
            </div>
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, type: "spring", stiffness: 120 }}
            >
              <div className="relative w-[min(92vw,520px)] max-w-md">
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md" />
                <img
                  src={assets.food}
                  alt="Hero dish"
                  className="relative z-10 w-full rounded-[2.5rem] border border-white/15 bg-gradient-to-br from-white/10 to-white/0 p-4 object-contain"
                />
                <motion.div
                  className="absolute -bottom-4 left-6 rounded-2xl bg-white/90 px-4 py-2 text-xs font-semibold text-primary shadow-lg"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.45 }}
                >
                  100% PLANT PROTEIN • ZERO MEAT
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </motion.section>

      {/* Decorative SVG Section */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 160 2400 500"
          width="100%"
          preserveAspectRatio="none"
        >
          <rect width="2400" height="300" y="160" fill="#042F1A" />
          <g
            fill="#ff73b5"
            transform="matrix(1,0,0,1,9.109130859375,342.9153594970703)"
          >
            <path
              d="M-10,10C37.53787878787879,21.25,125.18939393939395,76.08333333333333,218.1818181818182,64C311.17424242424244,51.91666666666667,345.4545454545455,-40.291666666666664,436.3636363636364,-48C527.2727272727273,-55.708333333333336,563.6363636363636,28.458333333333332,654.5454545454545,27C745.4545454545454,25.541666666666668,781.8181818181818,-65.41666666666667,872.7272727272727,-55C963.6363636363637,-44.58333333333333,1000.0000000000001,75.125,1090.909090909091,77C1181.818181818182,78.875,1218.181818181818,-43.916666666666664,1309.090909090909,-46C1400,-48.083333333333336,1436.3636363636363,60.75,1527.2727272727273,67C1618.1818181818182,73.25,1654.5454545454545,-12.875,1745.4545454545455,-16C1836.3636363636365,-19.125,1872.7272727272727,49.916666666666664,1963.6363636363637,52C2054.5454545454545,54.083333333333336,2090.909090909091,-7.875,2181.818181818182,-6C2272.727272727273,-4.125,2302.462121212121,-23.583333333333343,2400,61C2497.537878787879,145.58333333333334,3254.1666666666665,225.20833333333331,2650,400C2045.8333333333335,574.7916666666667,156.25,795.8333333333334,-500,900"
              transform="matrix(1,0,0,1,0,35)"
            ></path>
          </g>
        </svg>

        {/* Content Section */}
        <motion.section
          className="bg-secondary py-12 sm:py-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Container>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="text-center md:text-left">
                <h2 className="font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                  CURIOUS...BY NAME, BY NATURE
                </h2>
                <p className="mt-4 text-base sm:text-lg">
                  It’s what inspires us to whip up, throw together, tear, shake,
                  and break the rules on a mission to redefine food for a new
                  generation.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  src={assets.chef}
                  alt=""
                  className="w-[min(85vw,520px)]"
                />
              </div>
            </div>
          </Container>
        </motion.section>
      </div>
    </div>
  );
};

export default Firstpage;
