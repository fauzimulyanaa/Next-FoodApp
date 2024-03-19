import Image from 'next/image';
import React from 'react';

function Contactpage() {
  return (
    <div className="menu-hero px-[90px] mt-[40px] text-white mb-[100px] flex justify-between items-center">
      <div className="left border-r-8 border-b-8 border-l-2 border-t-2 border-black w-[40%] h-[600px]">
        <div className="px-[25px] pt-10">
          <h1 className="text-4xl font-bold">{"We're waiting to hear from you"}</h1>
          <p className="text-[13px] mt-9">Please fill and submit this form to contact us</p>
          <div className="mt-6">
            <div className="name flex flex-col">
              <label htmlFor="firstname">First Name : </label>
              <input type="text" className="bg-gray-100 outline-none border-[1px] border-gray-500 w-[80%] py-2 rounded-lg pl-5 mt-2" placeholder="John Doe" id="firstname" />
            </div>
            <div className="name flex flex-col mt-4">
              <label htmlFor="email">Email Address : </label>
              <input type="email" className="bg-gray-100 outline-none border-[1px] border-gray-500 w-[80%] py-2 rounded-lg pl-5 mt-2" placeholder="JohnDoe@gmail.com" id="email" />
            </div>
            <div className="name flex flex-col mt-4">
              <label htmlFor="firstname">Message : </label>
              <textarea type="text" className="bg-gray-100 outline-none border-[1px] border-gray-500 w-[80%] py-2 rounded-lg pl-5 mt-2" placeholder="Type your message here...." id="firstname" />
            </div>
            <button className="flex items-center justify-center gap-3 py-2 rounded-xl bg-orange-500 w-full transition duration-300 transform hover:scale-105 mt-6 text-white">Send Message</button>
          </div>
        </div>
      </div>
      <div className="right w-[50%] ">
        <Image src="/contact.png" alt="contact image" width={500} height={500} />
        <div className="flex items-center gap-10"></div>
      </div>
    </div>
  );
}

export default Contactpage;
