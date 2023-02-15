import React from 'react'
import { useEffect, useState } from 'react'


export default function Projects() {
    return (
        <section  class="bg-dark h-fit px-12 py-24" >  
     


            <h2 class="font-semibold text-4xl mb-2 section-title" >Recent Projects</h2>
            <hr class=" h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-sky-400">
            </hr>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full gap-4 my-6">
                <article class="bg-darker min-h-[15rem] col-span-1 md:col-span-2 rounded-xl overflow-hidden text-color-1">
                    <a href="https://larschill.vercel.app/">
                        <img src='/assets/movie.png' class="w-full h-64 aspect-square object-cover object-center"></img>
                        <div class=""><h4 class="p-4 bg-black text-white font-semibold">Movie API application (Next.js)</h4></div></a></article>
                <article class="w-full min-h-[15rem] text-color-1"><div class="bg-darker w-full h-full rounded-md">
                    <a href="">
                        <img src='/assets/webshop.png' alt="placeholder image" class="w-full h-64 aspect-square object-cover object-center"></img>
                        <div class=""><h4 class="p-4 text-white bg-black font-semibold text-lg">Webshop (C# / Bootstrap)</h4></div></a></div></article>
                <article class="w-full min-h-[15rem] text-color-1"><div class="bg-darker w-full h-full rounded-md"><a href="https://ayizo.vercel.app/">
                    <img src="/assets/ayizo3.png" alt="placeholder image" class="w-full h-64 aspect-square object-cover object-center"></img>
                    <div class=""><h4 class="p-4 text-white bg-black font-semibold text-lg">Ayizo Webdesign</h4></div></a></div></article>
               </div>
               <a class="col-span-4 justify-self-center w-48" href='/contenten'><button type="submit" class="inline-flex items-center px-4 py-2 bg-sky-400 border border-transparent rounded-md font-semibold text-md text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 justify-center"> Zie meer </button></a>
               </section>
    )
}
