"use client"

import { useEffect, useState } from "react"

function Eye() {
  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      const deltax = mouseX - window.innerWidth / 2
      const deltay = mouseY - window.innerHeight / 2

      const angle = Math.atan2(deltay, deltax) * (180 / Math.PI)
      setRotate(angle - 180)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.5"
        className="relative w-full h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-3 md:gap-4 lg:gap-6 xl:gap-10">
          {/* Eye 1 */}
          <div className="w-[35vw] h-[35vw] sm:w-[30vw] sm:h-[30vw] md:w-[22vw] md:h-[22vw] lg:w-[18vw] lg:h-[18vw] xl:w-[15vw] xl:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line absolute top-1/2 left-1/2 w-full h-10"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="w-[35vw] h-[35vw] sm:w-[30vw] sm:h-[30vw] md:w-[22vw] md:h-[22vw] lg:w-[18vw] lg:h-[18vw] xl:w-[15vw] xl:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line absolute top-1/2 left-1/2 w-full h-10"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eye
