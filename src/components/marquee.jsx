"use client"

import { motion } from "framer-motion"

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-8 md:py-12 lg:py-20 rounded-tl-2xl md:rounded-tl-3xl rounded-tr-2xl md:rounded-tr-3xl bg-[#004D43] text-white"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden whitespace-nowrap">
        <div className="flex gap-4 md:gap-6 lg:gap-10">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 5 }}
            className='text-[12vw] md:text-[18vw] lg:text-[24vw] leading-none font-["Franklin_Gothic_Medium"] uppercase pt-1 -mb-[0.5vw] font-medium pr-4'
          >
            We are Ochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 5 }}
            className='text-[12vw] md:text-[18vw] lg:text-[24vw] leading-none font-["Franklin_Gothic_Medium"] uppercase pt-1 -mb-[0.5vw] font-medium pr-4'
          >
            We are Ochi
          </motion.h1>
        </div>
      </div>
    </div>
  )
}

export default Marquee
