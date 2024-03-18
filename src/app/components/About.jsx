import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <div className="bg-orange-600 h-auto pb-32 flex justify-between px-[70px]">
      <div className="text-center w-[40%] text-white flex justify-start items-center flex-col">
        <h1 className="text-6xl  w-[400px] font-bold">We From Home Made</h1>
        <p className="mt-5 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A omnis nihil quasi sunt dolores nulla labore sit laudantium minima illo neque, incidunt expedita deserunt adipisci quis deleniti.</p>
        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A itaque porro fugit cumque reprehenderit sapiente nesciunt at possimus sed corporis?</p>
        <div className="text-black mt-[70px] border-2 border-white rounded-[70px] p-2">
          <div className="flex bg-white w-[500px] justify-between px-[80px] py-7 items-center rounded-[50px]">
            <div className="">
              <h1 className="font-bold text-2xl text-blue-950">220+</h1>
              <p className="uppercase font-bold">outline</p>
            </div>
            <div className="">
              <h1 className="font-bold text-2xl text-blue-950">45+</h1>
              <p className="uppercase font-bold">City</p>
            </div>
            <div className="">
              <h1 className="font-bold text-2xl text-blue-950">20</h1>
              <p className="uppercase font-bold">Menu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="border-4 border-white rounded-xl overflow-hidden">
          <div className="p-4 overflow-hidden">
            <Image src="/cafe.jpg" alt="cafe" width={530} height={400} className="rounded-lg " />
          </div>
        </div>
        <div className="border-4 border-white rounded-xl overflow-hidden absolute bottom-[-30px] left-[-90px] ">
          <div className="overflow-hidden">
            <Image src="/burger-3.jpg" alt="cafe" width={200} height={80} className="rounded-lg " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
