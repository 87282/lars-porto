import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";


const Navbar = () => {
  return (
      <>
      <motion.div
  animate={{ x: 20 }}
  transition={{ type: "spring", stiffness: 100 }}
>
<nav class="sticky nav flex flex-wrap items-center justify-between px-4 ">
  <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
    <span class="font-semibold text-xl tracking-tigh ">Lars Vermeulen</span>
  </div>

  <input class="menu-btn hidden items-center" type="checkbox" id="menu-btn"/>
  <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span class="navicon bg-grey-darkest flex items-center relative"></span>
  </label>

  <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li class="border-t md:border-none">
      <a href="/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-sky-400 font-bold items-center">Home</a>
    </li>
    
    <li class="border-t md:border-none">
      <a href="/contenten" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-sky-400 font-bold items-center">Projecten</a>
    </li>
    
    <li class="border-t md:border-none">
      <a href="/contact" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-sky-400 font-bold items-center">About/Contact</a>
    </li>
    <a href="/contact"><button class="p-2 px-4 rounded-md shadow-xl hover:bg-sky-400 hover:text-white transition-all duration-150 active:bg-sky-900 focus:ring-2 focus:ring-sky-600 text-sky-400 bg-transparent border border-sky-400 text-white font-bold ">Contact mij</button></a>
  </ul>
</nav>
</motion.div>
</>
  )

}



export default Navbar
