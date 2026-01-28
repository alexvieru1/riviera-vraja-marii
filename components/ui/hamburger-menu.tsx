"use client";

import React from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  color?: string; // Opțional: pentru a schimba culoarea liniilor (ex: 'bg-blue-900')
}

const HamburgerMenu = ({ isOpen, setIsOpen, color = "bg-slate-900" }: HamburgerMenuProps) => {
  return (
    <div 
      className="flex flex-col gap-2 w-8 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`rounded-none h-[3px] w-1/2 ${color} duration-500 origin-right transition-all ${
          isOpen ? "rotate-[225deg] -translate-x-[12px] -translate-y-[1px]" : ""
        }`}
      ></div>
      <div
        className={`rounded-none h-[3px] w-full ${color} duration-500 transition-all ${
          isOpen ? "-rotate-45" : ""
        }`}
      ></div>
      <div
        className={`rounded-none h-[3px] w-1/2 ${color} duration-500 place-self-end origin-left transition-all ${
          isOpen ? "rotate-[225deg] translate-x-[12px] translate-y-[1px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default HamburgerMenu;