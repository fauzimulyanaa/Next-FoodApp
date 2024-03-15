'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'menu',
    },
    {
      id: 4,
      link: 'contact',
    },
  ];
  return (
    <nav className="md:px-[90px] px-[50px] flex items-center justify-between pt-3 bg-[#202020] h-[60px]">
      <div className="logo flex items-center justify-center gap-2">
        <Image src="/icon.png" alt="icon app" width={40} height={40} className="mb-[20px]" />
        <h1 className="text-1xl font-bold text-white">BunBounty</h1>
      </div>
      <div className="">
        <ul className="hidden md:flex items-center justify-center">
          {links.map(({ id, link }) => (
            <li key={id} className="nav-links px-4 cursor-pointer capitalize text-[14px] text-white hover:scale-105 hover:text-gary-900 duration-200 link-underline">
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex items-center justify-center gap-2 border-[1px] border-gray-300 rounded-full">
        <div className="bg-gray-600 w-[30px] h-[30px] rounded-full flex justify-center items-center ">
          <Image src="/cart.png" alt="cart icon" width={22} height={22} />
        </div>
        <div className="pr-3">
          <p className="text-[13px] text-white">Cart (0)</p>
        </div>
      </div>
      <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 text-black md:hidden ">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <div className="menu-container flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-violet-600 to-indigo-600 text-white ">
          <ul className="flex flex-col justify-center items-center mb-5">
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-[19px]">
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 border-[1px] border-gray-300 rounded-full">
            <div className="bg-black w-[30px] h-[30px] rounded-full flex justify-center items-center ">
              <Image src="/cart.png" alt="cart icon" width={22} height={22} />
            </div>
            <div className="pr-3">
              <p>Cart (0)</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
