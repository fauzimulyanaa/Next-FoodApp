import Image from 'next/image';
import React from 'react';

function Menu() {
  return (
    <div className="bg-[#FFF3C7] pb-[100px]  px-[70px] pt-20 flex justify-between flex-wrap items-center">
      <div className="w-[350px] h-[260px] rounded-[30px] " style={{ position: 'relative', overflow: 'hidden' }}>
        <Image src="/burger.jpg" alt="burger" layout="fill" objectFit="cover" style={{ filter: 'brightness(70%)' }} />
        <p className="absolute text-white pl-[30px] mt-[100px] w-[200px] text-4xl uppercase font-bold">breakfast meals</p>
      </div>
      <div className="w-[350px] h-[260px] rounded-[30px] " style={{ position: 'relative', overflow: 'hidden' }}>
        <Image src="/sandwich.jpg" alt="burger" layout="fill" objectFit="cover" style={{ filter: 'brightness(70%)' }} />
        <p className="absolute text-white pl-[30px] mt-[100px] w-[200px] text-4xl uppercase font-bold">breakfast sandwiches</p>
      </div>
      <div className="w-[350px] h-[260px] rounded-[30px] " style={{ position: 'relative', overflow: 'hidden' }}>
        <Image src="/buritos.jpg" alt="burger" layout="fill" objectFit="cover" style={{ filter: 'brightness(70%)' }} />
        <p className="absolute text-white pl-[30px] mt-[100px] w-[200px] text-4xl uppercase font-bold">breakfast meals</p>
      </div>
      <div className="w-[350px] mt-9 h-[260px] rounded-[30px] " style={{ position: 'relative', overflow: 'hidden' }}>
        <Image src="/potato.jpg" alt="burger" layout="fill" objectFit="cover" style={{ filter: 'brightness(70%)' }} />
        <p className="absolute text-white pl-[30px] mt-[100px] w-[200px] text-4xl uppercase font-bold">breakfast sides</p>
      </div>
      <div className="w-[780px] mt-9 h-[260px] rounded-[30px] " style={{ position: 'relative', overflow: 'hidden' }}>
        <Image src="/coffe.jpg" alt="burger" layout="fill" objectFit="cover" style={{ filter: 'brightness(70%)' }} />
        <p className="absolute text-white pl-[30px] mt-[100px] w-[200px] text-4xl uppercase font-bold">drinks & coffe</p>
      </div>
    </div>
  );
}

export default Menu;
