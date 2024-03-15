import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <>
      <div className="bg-[#202020] flex justify-center items-center flex-col mt-[70px] pb-[90px] relative menu-hero">
        <div className="">
          <h1 className="text-6xl w-[990px] text-center font-custom text-white">{"Taste the Juicy Difference Where Every Bite's a Burger Bliss!"}</h1>
        </div>
        <div className="">
          <Image src="/hero.png" alt="burger photo" width={800} height={374} />
        </div>
        <div className="w-[250px] h-[200px] bg-red-800 rounded-xl px-9 py-6 text-white absolute left-9 shadow-sm shadow-white">
          <p className="uppercase text-1xl font-bold">big boss</p>
          <p className="mt-3 text-yellow-300">Bite into burger bliss</p>
          <h1 className="mt-3 text-3xl font-bold">$20.99</h1>
          <button className="mt-3 bg-white text-red-800 px-8 rounded-lg py-[4px] font-bold">Buy Now</button>
        </div>
        <div className="absolute right-10 bottom-[240px]">
          <Image src="/icon-burger.jpg" alt="burger" width={200} height={200} className="rounded-full" />
        </div>
      </div>
      <div className="bg-[#F6FA70] w-[90%] h-[450px] mx-auto rounded-[60px] mb-[90px] flex justify-between  items-center px-[90px]">
        <div className=" w-[450px]">
          <h1 className="text-7xl font-bold uppercase">The Burger Above All Burgers</h1>
        </div>
        <div className="w-[40%]">
          <p className="text-[18px] font-bold mb-8">{'"Built with love and a passion, our team comprises talented culinary experts who strive to create high-quality burgers using fresh, premium ingredients"'}</p>
          <button className="button">About Us</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
