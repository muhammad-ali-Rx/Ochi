"use client"
import { FaArrowUpLong } from "react-icons/fa6"
import { motion } from "framer-motion"

function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-full pt-1 text-white">
      <div className="Landing mt-8 md:mt-20 lg:mt-40 xl:mt-52 px-4 md:px-8 lg:px-16 xl:px-20">
        {["We Create", "Eye-Opening", "presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="flex items-center gap-2 md:gap-4">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1,
                    }}
                    className="mr-2 md:mr-[1vw] rounded-md w-[25vw] h-[18vw] md:w-[15vw] md:h-[10vw] lg:w-[12vw] lg:h-[8vw] xl:w-[8vw] xl:h-[5.5vw] bg-zinc-400 flex-shrink-0 flex items-center justify-center"
                  >
                    <img
                      src="/src/assets/content-image01.jpg"
                      alt="Decorative"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </motion.div>
                )}
                <h1 className="flex text-black items-center text-[6vw] md:text-[7vw] lg:text-[8vw] xl:text-[9vw] uppercase leading-[5vw] md:leading-[6vw] lg:leading-[7vw] xl:leading-[8vw] tracking-tight font-['Franklin_Gothic_Medium'] font-light">
                  {item}
                </h1>
              </div>
            </div>
          )
        })}
      </div>
      <div className="border-t-[1px] border-zinc-900 mt-[50vw] md:mt-[35vw] lg:mt-[28vw] xl:mt-[26vw] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 font-['Franklin_Gothic_Book'] py-4 md:py-5 px-4 md:px-8 lg:px-16 xl:px-20">
        {["For public and private companies ", "From the first pitch to IPO"].map((iteam, index) => (
          <p
            key={index}
            className="text-[10px] md:text-xs lg:text-sm text-black font-light tracking-tight leading-none"
          >
            {iteam}
          </p>
        ))}
        <div className="start flex text-black items-center gap-1.5">
          <div className="px-2 py-1 border text-black border-zinc-900 font-light text-[10px] md:text-xs lg:text-sm uppercase rounded-full flex items-center whitespace-nowrap">
            Start The Project
          </div>
          <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center border border-zinc-900 rounded-full flex-shrink-0">
            <span className="rotate-45 text-black text-sm md:text-base">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
