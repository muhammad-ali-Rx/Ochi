"use client"

import { useState } from "react"
import { motion } from "framer-motion"

function Project() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const projects = [
    {
      title: "Salience Labs",
      tags: ["Brand Identity", "Pitch Deck"],
      image: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
      name: "VISI",
    },
    {
      title: "Cardboard Spaceship",
      tags: ["Branded Template", "Sales Deck", "Social Media Templates"],
      image: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
      name: "CARDOB",
    },
    {
      title: "AHB & Matt Horn",
      tags: ["Restaurant Template", "Food Deck"],
      image: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
      name: "ZARA",
    },
    {
      title: "Fyde",
      tags: ["App Showcase", "Product Launch"],
      image: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
      name: "DADA",
    },
  ]

  const getCenterTop = () => {
    if (hoveredCard === null) return "38%"
    if (hoveredCard === 0 || hoveredCard === 1) return "38%"
    if (hoveredCard === 2 || hoveredCard === 3) return "78%"
    return "38%"
  }

  return (
    <div className="w-full py-8 md:py-12 lg:py-16 xl:py-20 relative">
      {/* Heading */}
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-20 border-b-[1px] border-zinc-400 pb-6 md:pb-10 lg:pb-16 xl:pb-20">
        <h1 className='text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-["Neue_Montreal"]'>Featured Projects</h1>
      </div>

      {/* Shared Centered Animated Text */}
      {hoveredCard !== null && (
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[0px]"
          style={{ top: getCenterTop() }}
        >
          <motion.h1
            className="flex overflow-hidden text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-[#Cdea68] font-['Franklin_Gothic_Book']"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            {projects[hoveredCard].name.split("").map((item, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.06,
                }}
              >
                {item}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      )}

      {/* Cards */}
      <div className="px-4 md:px-6 lg:px-12 xl:px-16 relative z-[1]">
        <div className="cards w-full flex flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-8 md:mt-12 lg:mt-16 xl:mt-20 justify-between">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="cardcontainer relative w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-16px)] xl:w-[calc(50%-20px)] mt-4 md:mt-6 lg:mt-8 xl:mt-10"
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Title */}
              <div className="mb-3 md:mb-4 flex items-center gap-2">
                <span className="text-base md:text-lg lg:text-xl">●</span>
                <h2 className="text-[10px] md:text-xs lg:text-sm uppercase">{project.title}</h2>
              </div>

              {/* Card */}
              <div className="card w-full h-[35vh] md:h-[45vh] lg:h-[50vh] xl:h-[55vh] rounded-xl md:rounded-2xl overflow-hidden relative">
                <img
                  className="bg-cover object-cover w-full h-full"
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                />
              </div>

              {/* Tags with Framer Motion hover */}
              <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                {project.tags.map((tag, tIndex) => (
                  <motion.span
                    key={tIndex}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#000",
                      color: "#fff",
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                    className="border border-zinc-500 px-2 md:px-3 py-1 text-[9px] md:text-xs lg:text-sm rounded-full cursor-pointer"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
