import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-full   pt-1 text-white">
      <div className="Landing mt-52   px-20">
        {["We Create", "Eye-Opening", "presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1,
                    }}
                    className="mr-[1vw] rounded-md w-[8vw] h-[5.5vw] bg-zinc-400 flex-shrink-0 flex items-center justify-center"
                  >
                    <img
                      src="/src/assets/content-image01.jpg"
                      alt="Decorative"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </motion.div>
                )}
                <h1 className="flex text-black items-center text-[9vw] uppercase leading-[7vw] tracking-tight font-['Franklin_Gothic_Medium'] font-light">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-900 mt-[26vw] flex justify-between items-center font-['Franklin_Gothic_Book'] py-5 px-20">
        {[
          "For public and private companies ",
          "From the first pitch to IPO",
        ].map((iteam, index) => (
          <p className="text-sm text-black font-light tracking-tight leading-none ">
            {iteam}
          </p>
        ))}
        <div className="start flex text-black items-center gap-1.5">
          <div className="px-2 py-1 border text-black border-zinc-900 font-light text-sm uppercase rounded-full flex items-center ">
            Start The Project
          </div>
          <div className="w-7 h-7 flex items-center justify-center border border-zinc-900 rounded-full">
            <span className="rotate-45 text-black">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
