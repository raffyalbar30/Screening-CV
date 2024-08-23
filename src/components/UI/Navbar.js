"use client"
import React from 'react';
import { Poppins } from "next/font/google";
import { RiMenu3Fill } from "react-icons/ri";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const font = Poppins({
    weight: '400',
    subsets: ['latin'] 
});

// navbar
const Navbar = () => {
    return (
        <>
         <div className={`${font.className} flex items-center lg:ml-4`}>
         <div className="ml-8 px-4 py-2 rounded-lg bg-indigo-800">
             <span className="text-xl text-white">R</span>
         </div>
          <span className="ml-1 text-xl font-semibold text-slate-500 font-white">affsume</span>
         </div>
    
        <div className="mr-16 hidden">
          <ul className={`${font.className} flex gap-x-6 font-semibold`}>
              <li>Buat Cv Sekarang</li>
              <li>Tempalate CV</li>
              <li>Feedback</li>
          </ul>
        </div>
         <Example />
        <div>
        </div>
        </>
    );
}

export default Navbar;


function Example() {


  return (
    <>
       <div className="fixed right-8">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        <RiMenu3Fill className="text-2xl" />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              edite
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                Duplicate
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
        </MenuItems>
      </Menu>
    </div>
    </>
  )
}