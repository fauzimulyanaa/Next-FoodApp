'use client';

import Image from 'next/image';
import React from 'react';

function BestSeller() {
  return (
    <div className="px-[20px] bg-orange-600 pb-[100px]">
      <h1 className="text-4xl underline text-white text-center font-custom pt-9 pb-9">Best Deals</h1>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex items-center  w-[650px]">
          <div className="pt-5 w-[300px] flex justify-center relative">
            <Image src="/burger-1.png" alt="burger" width={230} height={376} className="z-[99999]" />
            <div className="w-[220px] h-[110px] bg-[#00224D] absolute bottom-3 rounded-3xl"></div>
          </div>
          <div className="w-[300px] mt-[65px]">
            <h1 className="text-2xl text-white font-bold mb-3">Veggie burger Chicken</h1>
            <p className="text-white text-[14px]">A &frac14; of flame-grilled beef patty topped with juicy tomatoes, crisp lettuce, creamy...</p>
            <div className="flex items-center mt-3 gap-5 justify-between">
              <div
                className="bg-[#00224D] text-white w-[90px] flex justify-start px-3
          py-2 rounded-3xl items-center gap-2 "
              >
                <div className="w-[15px] h-[15px] bg-white rounded-full border-4 border-orange-600"></div>
                <p className="font-bold">$30</p>
              </div>
              <div className="">
                <button className="text-white uppercase underline btn">Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center  w-[650px]">
          <div className="pt-5 w-[300px] flex justify-center relative">
            <Image src="/burger-1.png" alt="burger" width={230} height={376} className="z-[99999]" />
            <div className="w-[220px] h-[110px] bg-[#00224D] absolute bottom-3 rounded-3xl"></div>
          </div>
          <div className="w-[300px] mt-[65px]">
            <h1 className="text-2xl text-white font-bold mb-3">Veggie burger Chicken</h1>
            <p className="text-white text-[14px]">A &frac14; of flame-grilled beef patty topped with juicy tomatoes, crisp lettuce, creamy...</p>
            <div className="flex items-center mt-3 gap-5 justify-between">
              <div
                className="bg-[#00224D] text-white w-[90px] flex justify-start px-3
          py-2 rounded-3xl items-center gap-2 "
              >
                <div className="w-[15px] h-[15px] bg-white rounded-full border-4 border-orange-600"></div>
                <p className="font-bold">$30</p>
              </div>
              <div className="">
                <button className="text-white uppercase underline btn">Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center  w-[650px]">
          <div className="pt-5 w-[300px] flex justify-center relative">
            <Image src="/burger-1.png" alt="burger" width={230} height={376} className="z-[99999]" />
            <div className="w-[220px] h-[110px] bg-[#00224D] absolute bottom-3 rounded-3xl"></div>
          </div>
          <div className="w-[300px] mt-[65px]">
            <h1 className="text-2xl text-white font-bold mb-3">Veggie burger Chicken</h1>
            <p className="text-white text-[14px]">A &frac14; of flame-grilled beef patty topped with juicy tomatoes, crisp lettuce, creamy...</p>
            <div className="flex items-center mt-3 gap-5 justify-between">
              <div
                className="bg-[#00224D] text-white w-[90px] flex justify-start px-3
          py-2 rounded-3xl items-center gap-2 "
              >
                <div className="w-[15px] h-[15px] bg-white rounded-full border-4 border-orange-600"></div>
                <p className="font-bold">$30</p>
              </div>
              <div className="">
                <button className="text-white uppercase underline btn">Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center  w-[650px]">
          <div className="pt-5 w-[300px] flex justify-center relative">
            <Image src="/burger-1.png" alt="burger" width={230} height={376} className="z-[99999]" />
            <div className="w-[220px] h-[110px] bg-[#00224D] absolute bottom-3 rounded-3xl"></div>
          </div>
          <div className="w-[300px] mt-[65px]">
            <h1 className="text-2xl text-white font-bold mb-3">Veggie burger Chicken</h1>
            <p className="text-white text-[14px]">A &frac14; of flame-grilled beef patty topped with juicy tomatoes, crisp lettuce, creamy...</p>
            <div className="flex items-center mt-3 gap-5 justify-between">
              <div
                className="bg-[#00224D] text-white w-[90px] flex justify-start px-3
          py-2 rounded-3xl items-center gap-2 "
              >
                <div className="w-[15px] h-[15px] bg-white rounded-full border-4 border-orange-600"></div>
                <p className="font-bold">$30</p>
              </div>
              <div className="">
                <button className="text-white uppercase underline btn">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-white border-2 mt-9"></div>
    </div>
  );
}

export default BestSeller;
