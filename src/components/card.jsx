import React from "react";

function Showcards() {
  return (
    <div className="w-full h-screen flex items-center px-12 gap-5">
      <div className="cardcantainer  h-[50vh] w-1/2 ">
        <div className="card relative rounded-xl w-full h-full flex bg-[#004d43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 text-amber-200 px-3 py-1 border-1 rounded-full ">&copy;2024-2025</button>
        </div>
      </div>
      <div className="cardcantainer flex gap-5 h-[50vh] w-1/2 ">
        <div className="card relative rounded-xl w-1/2 w-full h-full flex bg-[#212121] flex items-center justify-center">
           <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-9 text-white  px-3 py-1 border-1 rounded-full ">Rating 5.0 on Clutch</button>
        </div>
        <div className="card relative  rounded-xl w-1/2 w-full h-full flex bg-[#212121] flex items-center justify-center">
           <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-10 bottom-7 text-white px-8.5 -py-1 border-1 rounded-full ">Business Bootcamp <br /> Alumni</button>
        </div>
      </div>
    </div>
  );
}

export default Showcards;
