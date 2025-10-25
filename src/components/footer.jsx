function Footers() {
  const links = ["Facebook", "Instagram", "Twitter", "Discord", "Contact"]
  const address1 = ["202-1965 W 4th Ave", "Vancouver, Canada"]
  const address2 = ["30 Chukarina St", "Lviv, Ukraine"]
  const email = ["Hello@Developer.com"]

  const AnimatedLink = ({ item }) => (
    <a
      href="#"
      className="relative text-sm md:text-lg lg:text-xl font-['Neue_Montreal'] capitalize block font-light group overflow-hidden w-fit"
    >
      {/* Default text */}
      <span className="block text-black transition-all duration-500 ease-out group-hover:-translate-y-full group-hover:opacity-0">
        {item}
      </span>

      {/* Hover text (falls from top) */}
      <span className="absolute left-0 top-0 block translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] text-black">
        {item}
      </span>

      {/* Underline */}
      <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-black transition-all duration-500 ease-out group-hover:w-full"></span>
    </a>
  )

  return (
    <div className="w-full flex flex-col md:flex-row h-auto md:h-screen py-8 md:py-12 lg:py-16 xl:py-20 px-4 md:px-8 lg:px-16 xl:px-20 font-['Franklin_Gothic_Medium']">
      {/* Left Side */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-between mb-8 md:mb-0">
        {/* Heading */}
        <div className="heading">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[8vw] font-semibold uppercase leading-tight md:leading-[6vw] lg:leading-[8vw] xl:leading-[9vw] -mb-2 md:-mb-4 lg:-mb-8 xl:-mb-10">
            Eye
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[8vw] font-semibold uppercase leading-tight md:leading-[6vw] lg:leading-[8vw] xl:leading-[9vw] -mb-2 md:-mb-4 lg:-mb-8 xl:-mb-10">
            Opening
          </h1>
        </div>

        {/* SVG Logo */}
        <svg
          width="72"
          height="30"
          viewBox="0 0 72 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-4 md:w-14 md:h-5 lg:w-16 lg:h-6 xl:w-[72px] xl:h-[30px]"
        >
          <path
            d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032Z"
            fill="currentColor"
          ></path>
          <path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor"></path>
          <path
            d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[6vw] font-semibold uppercase leading-none -mb-2 md:-mb-4 lg:-mb-8 xl:-mb-10">
          Presentations
        </h1>

        <div className="mt-8 md:mt-12 lg:mt-16 xl:mt-20 flex flex-col md:flex-row gap-8 md:gap-0">
          {/* Left Column */}
          <div>
            <h1 className="mb-3 text-xs md:text-sm">S:</h1>
            {links.map((item, index) => (
              <AnimatedLink key={index} item={item} />
            ))}

            <h1 className="mb-2 md:mb-[1vw] mt-6 md:mt-[2vw] text-xs md:text-sm">A:</h1>
            {[...address1, ...address2].map((item, index) => (
              <AnimatedLink key={index} item={item} />
            ))}

            <h1 className="mb-2 md:mb-[1vw] mt-6 md:mt-[2vw] text-xs md:text-sm">E:</h1>
            {email.map((item, index) => (
              <AnimatedLink key={index} item={item} />
            ))}
          </div>

          {/* Right Column */}
          <div className="md:ml-auto flex flex-col justify-center items-start">
            <h1 className="mb-2 text-xs md:text-sm">M:</h1>
            {links.map((item, index) => (
              <AnimatedLink key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footers
