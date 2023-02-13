import React from 'react'

import { motion } from "framer-motion";

function Header() {
  return (
      <>

<article className='z-[1]'>
    <section className='h-[80vh] bg-black relative flex flex-col items-center justify-center overflow-hidden'>

    
<h1 class="md:text-7xl font-bold text-white">Lars <span
                className='text-sky-400 hover:scale-105 ease-in duration-800'> Vermeulen</span><br /><span
                className='text-sky-500 hover:scale-105 ease-in duration-800'>Student </span><span
                className='text-sky-600 hover:scale-105 ease-in duration-800'>Software </span><span
                className='text-sky-700 hover:scale-105 ease-in duration-800'>Developer</span>                <a class="col-span-4 justify-self-center w-48 pr-8" href='/contenten'><button type="submit" class="inline-flex items-center px-4 py-2 bg-sky-400 border border-transparent rounded-md font-semibold text-md text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 justify-center"> Projecten </button></a>
               <a class="col-span-4 justify-self-center w-48" href='/contenten'><button type="submit" class="inline-flex items-center px-4 py-2 bg-sky-400 border border-transparent rounded-md font-semibold text-md text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 justify-center"> Zie meer </button></a>
                </h1>
                

    </section>
</article>
</>
  )
}

export default Header
