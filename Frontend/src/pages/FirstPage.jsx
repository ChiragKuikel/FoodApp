import React from 'react';
import { assets } from '../assets/assets';

const Firstpage = () => {
  return (
    <div className='relative z-40'>
      {/* Hero Section */}
      <div className="bg-primary ">
        <div className='relative'>
        <div className="flex flex-col flex-wrap -space-y-16 sm:-space-y-24 md:space-y-0 md:flex-row font-black text-[130px] sm:text-[150px] md:text-[200px] w-full  text-white justify-center items-center ">
          <h1 className="mt-4 md:mt-10 ">MEAT</h1>
          <h1 className="hidden lg:block">-</h1>
          <h1 className="mt-4 md:mt-10 ">FREE</h1>
          
        </div>
        <img
            src={assets.food}
            alt=""
            className="w-full  absolute top-64 md:w-[400px] md:left-[50%] md:-translate-x-[50%] md:top-[70%]"
          />
          </div>
        <div className="flex flex-col -space-y-16 sm:-space-y-24 md:space-y-0 md:flex-row flex-wrap justify-center font-black text-[130px] mt-80 md:mt-0 sm:text-[150px] md:text-[200px]  text-white items-center relative">
          <h1>YOUR</h1>
          <h1 className="md:ml-2">MIND</h1>
        </div>
      </div>

      {/* Decorative SVG Section */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 160 2400 500"
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
        <div className="flex flex-col-reverse md:flex-row items-center bg-secondary gap-6 px-6 sm:px-12 pb-20">
          {/* Left Side */}
          <div className="flex flex-col text-center md:text-left">
            <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl">
              CURIOUS...BY NAME, BY <br /> NATURE
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              It's what inspires us to whip up, throw <br />
              together, tear, shake, and break the rules <br />
              on a mission to redefine food for a new generation.
            </p>
          </div>
          {/* Right Side */}
          <div className="flex justify-center md:justify-end">
            <img src={assets.chef} alt="" className="w-3/4 sm:w-1/2 md:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
