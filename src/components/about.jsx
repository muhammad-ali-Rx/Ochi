import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#Cdea68] rounded-tl-2xl rounded-tr-2xl text-black ">
      <h1 className="font-['Neue_Montreal'] text-[4.5vw]  leading-[4.5vw] tracking-tight ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people
      </h1>
      <div className="w-full flex border-t-[2px] pt-10 mt-20 border-[#a1b562] ">
        <div className="w-1/2 ">
          <h1 className="text-6xl">Our Approach : </h1>
          <button className="px-7 uppercase py-4 flex gap-10 items-center bg-zinc-800 text-white mt-10 rounded-full">
            Learn More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
              <div className="w-1/2 h-[35vh] bg-red-500 rounded-3xl ">
                <img
                    src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                    alt="About us"
                    className=" object-cover rounded-3xl"
                />
              </div>
      </div>
    </div>
  );
}

export default About;
