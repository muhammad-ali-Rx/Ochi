"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { HiArrowRight } from "react-icons/hi"

function About() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full p-4 md:p-8 lg:p-12 xl:p-20 bg-[#Cdea68] rounded-tl-xl md:rounded-tl-2xl rounded-tr-xl md:rounded-tr-2xl text-black">
      <h1 className="font-['Neue_Montreal'] text-xl md:text-2xl lg:text-3xl xl:text-[4.5vw] leading-tight md:leading-[3vw] lg:leading-[4vw] xl:leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products,
        explain complex ideas, and hire great people
      </h1>

      <div className="w-full flex flex-col md:flex-row border-t-[2px] pt-6 md:pt-8 lg:pt-10 xl:pt-10 mt-8 md:mt-12 lg:mt-16 xl:mt-20 border-[#a1b562] gap-8 md:gap-0">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl">Our Approach :</h1>

          <motion.button
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="px-4 md:px-6 lg:px-7 uppercase py-2 md:py-3 lg:py-4 flex gap-4 md:gap-6 lg:gap-10 items-center bg-gray-600 text-black mt-6 md:mt-8 lg:mt-10 rounded-full relative overflow-hidden group text-[10px] md:text-xs lg:text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Hover background */}
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "0%" : "-100%" }}
              transition={{ duration: 0.3 }}
            />

            {/* Text */}
            <div className="relative z-10 text-white font-semibold tracking-wide">Learn More</div>

            {/* Circle with arrow */}
            <motion.div
              className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 bg-white rounded-full relative z-10 flex items-center justify-center overflow-hidden flex-shrink-0"
              animate={{
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 10,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <HiArrowRight size={14} className="text-black md:w-4 md:h-4" />
              </motion.div>
            </motion.div>
          </motion.button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 h-[25vh] md:h-[30vh] lg:h-[35vh] rounded-2xl md:rounded-3xl overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="About us"
            className="object-cover rounded-2xl md:rounded-3xl w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default About
