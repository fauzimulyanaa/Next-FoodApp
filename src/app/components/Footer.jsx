import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="bg-orange-600 h-auto px-[90px] py-[80px]">
        <div className="border-[1px] border-white mb-20"></div>
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-5xl w-[60%] font-bold text-white">Subscribe To Our Newsletter</h1>
          </div>
          <div className="relative">
            <input type="email" name="" id="" className="bg-orange-700 py-[14px] px-[80px] rounded-full border-[2px] border-white pl-[57px] placeholder-white placeholder:text-[14px]" placeholder="Enter Your Email" />
            <Image src="/email.png" alt="email" width={20} height={20} className="absolute top-[50%] transform translate-y-[-50%] left-[30px] " />
            <button className="absolute top-[50%] transform translate-y-[-50%] right-[6px] bg-blue-800 text-white px-3 py-3 text-[12px] rounded-full ">Subscribe</button>
          </div>
        </div>
        <div className="border-[1px] border-white mt-20"></div>
        <div className="mt-10 flex justify-between">
          <div className="w-[400px]">
            <h1 className="text-white text-2xl font-bold font-custom">BunBounty</h1>
            <p className="text-[14px] text-gray-300 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, possimus? Repellat illum officiis eligendi.</p>
          </div>
          <div className="">
            <h1 className="text-white font-bold mb-4">Company</h1>
            <ul className="text-gray-200 text-[14px]">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Blog</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-white font-bold mb-4">Product</h1>
            <ul className="text-gray-200 text-[14px]">
              <li className="mb-2">Pricing Product</li>
              <li className="mb-2">Mobile Apps</li>
              <li className="mb-2">Updates</li>
              <li className="mb-2">New Menu</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-white font-bold mb-4">Help</h1>
            <ul className="text-gray-200 text-[14px]">
              <li className="mb-2">Payment Method</li>
              <li className="mb-2">Knowledge Base</li>
              <li className="mb-2">Tutorials</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-white font-bold mb-4">Social Media</h1>
            <div className="flex items-center gap-2">
              <Image src="/facebook.png" alt="facebook" width={30} height={30} />
              <Image src="/instagram.png" alt="instagram" width={30} height={30} />
              <Image src="/yt.png" alt="Tiktok" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
