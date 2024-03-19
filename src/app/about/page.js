import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';

function Aboutpage() {
  return (
    <div className="menu-hero px-[90px] mt-[30px] mb-[200px] text-white">
      <div className="">
        <div className="flex justify-end relative">
          <Image src="/about.jpg" alt="burger" width={750} height={700} className="rounded-lg" />
          <h1 className="font-custom absolute left-0 top-10 text-8xl w-[600px] uppercase font-bold">Crafting delicious burgers with love</h1>
        </div>
      </div>
      <div className="mt-20 flex items-end">
        <div className="left w-[200px]">
          <h1>Follow Us</h1>
          <div className="border-[1px] border-white mt-3"></div>
          <div className="flex justify-between items-center mt-4 cursor-pointer">
            <p>Instagram</p>
            <Image src="/arrow.png" alt="arrow" width={20} height={20} />
          </div>
          <div className="border-[1px] border-white mt-3"></div>
          <div className="flex justify-between items-center mt-4 cursor-pointer">
            <p>Youtube</p>
            <Image src="/arrow.png" alt="arrow" width={20} height={20} />
          </div>
        </div>
        <div className="ml-[130px] w-[410px]">
          <h1 className="text-2xl font-bold font-custom underline">The Story of BunBounty</h1>
          <p className="text-[14px] mt-4 text-justify">
            Located in the heart of downtown, BunBounty is a culinary haven for burger enthusiasts seeking an unforgettable dining experience. With its cozy yet vibrant ambiance, the restaurant invites patrons to indulge in a world of
            savory delights. From classic cheeseburgers to innovative gourmet creations, BunDBounty offers a diverse menu crafted with the finest ingredients sourced locally.
          </p>
          <p className="text-[14px] mt-4 text-justify">
            {
              "At BunDBounty, hospitality is as paramount as the quality of our food. Our friendly and attentive staff are dedicated to providing exceptional service, ensuring that every visit is met with warmth and satisfaction. Whether you're grabbing a quick bite during lunch or enjoying a leisurely dinner with friends and family, BunDBounty promises an experience that goes beyond just a meal."
            }
          </p>
        </div>
        <div className="w-[400px] ml-[100px] mb-[50px]">
          <p className="mt-[90px] font-custom text-justify text-[17px] text-orange-500">
            {
              "'Indulge in the bounty of flavor at BunDBounty, where every bite tells a savory story. Savor the moment, relish the taste, and discover the true essence of gourmet burgers crafted with passion and perfection. Welcome to a world where culinary creativity meets gastronomic delight – welcome to BunDBounty, where every bite is an adventure.'"
            }
          </p>
          <div className="border-[1px] border-white mt-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
