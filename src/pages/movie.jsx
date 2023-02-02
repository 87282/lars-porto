import React from 'react'
import Navbar from '../components/navbar'

function Movie() {
  return (
  <>
  <Navbar/>
<section class="header h-96 flex items-center justify-center bg-darker pt-12 flex-col gap-4 relative z-0"><img src="/assets/shoehub.png" alt="thumbnail" class="w-full h-full absolute object-cover opacity-25 top-0 z-[-1] select-none pointer-events-none cursor-none blur-sm"/><h1 class="font-bold text-color-1 px-2">Shoehub bestel site</h1><div class="flex gap-3 px-2"><button class="p-2 px-4 rounded-md shadow-xl hover:bg-pink-600 hover:text-white transition-all duration-150 active:bg-pink-900 focus:ring-2 focus:ring-pink-600 text-pink-600 bg-transparent border border-pink-600 text-white font-bold p-0 px-2 md:px-3t border-emerald-400 text-emerald-400 hover:bg-emerald-600">c++</button><button class="p-2 px-4 rounded-md shadow-xl hover:bg-pink-600 hover:text-white transition-all duration-150 active:bg-pink-900 focus:ring-2 focus:ring-pink-600 text-pink-600 bg-transparent border border-pink-600 text-white font-bold p-0 px-2 md:px-3t border-emerald-400 text-emerald-400 hover:bg-emerald-600">zlib</button><button class="p-2 px-4 rounded-md shadow-xl hover:bg-pink-600 hover:text-white transition-all duration-150 active:bg-pink-900 focus:ring-2 focus:ring-pink-600 text-pink-600 bg-transparent border border-pink-600 text-white font-bold p-0 px-2 md:px-3t border-emerald-400 text-emerald-400 hover:bg-emerald-600">REST</button><button class="p-2 px-4 rounded-md shadow-xl hover:bg-pink-600 hover:text-white transition-all duration-150 active:bg-pink-900 focus:ring-2 focus:ring-pink-600 text-pink-600 bg-transparent border border-pink-600 text-white font-bold p-0 px-2 md:px-3t border-emerald-400 text-emerald-400 hover:bg-emerald-600">API</button><button class="p-2 px-4 rounded-md shadow-xl hover:bg-pink-600 hover:text-white transition-all duration-150 active:bg-pink-900 focus:ring-2 focus:ring-pink-600 text-pink-600 bg-transparent border border-pink-600 text-white font-bold p-0 px-2 md:px-3t border-emerald-400 text-emerald-400 hover:bg-emerald-600">PHP</button></div></section>
  </>
  )
}

export default Movie
