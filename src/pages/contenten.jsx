import React from 'react'
import Navbar from '../components/navbar'


function contenten() {
    return (
        <>
            <Navbar></Navbar>
            <section class="flex flex-col items-center w-full" data-v-1af3a5fc=""><div class="section-large mt-12" data-v-1af3a5fc=""><div class="text-color-1 px-2" ><h2 class="font-semibold text-4xl mb-2 section-title text-sky-400" data-v-42617283=""><span className='text-black font-bold'>Mijn </span> projecten /<span className='text-black'> opdrachten</span> </h2><hr class=" h-1 mx-auto my-4 bg-gray-50 border-0 rounded md:my-10 dark:bg-sky-400"/></div></div> </section>
            <section class="max-w-[1200px] mx-auto px-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
                <article class="bg-darker rounded-md overflow-hidden shadow-lg bg-black">
                    <a href="https://larschill.vercel.app/">
                        <img src="/assets/movie.png" alt="placeholder image" class="w-full h-64 aspect-square object-cover object-center"/>
                        <div class=""><h4 class="p-4 text-white font-semibold">Movie webapp ( Api and Next.js)</h4></div></a></article>
                        
                        <article class="bg-darker rounded-md overflow-hidden shadow-lg bg-black">
                            <a href="https://87282.stu.sd-lab.nl/VERZAMELAAR/shoequb/">
                                <img src="/assets/shoehub.png" alt="placeholder image" class="w-full h-64 aspect-square object-cover object-center"/>
                                <div class=""><h4 class="p-4 text-white font-semibold">Shoehub ( Beroeps opdracht )</h4></div></a></article>
                                
                                <article class="bg-darker rounded-md overflow-hidden shadow-lg bg-black">
                                    <a href="https://87282.stu.sd-lab.nl/beroepseind/1/index.html">
                                        <img src="/assets/huizen.png" alt="placeholder image" class="w-full h-64 aspect-square object-cover object-center"/>
                                        <div class=""><h4 class="p-4 text-white font-semibold">Huizen te koop site</h4></div></a></article>
                                        
                                        <article class="bg-darker rounded-md overflow-hidden shadow-lg bg-black">
                                            <a href="https://chrisvanlier.nl/content/portfolio-1-0">
                                                <img src="/assets/portfolio.png" alt="placeholder image" class="w-full h-100  object-cover object-center"/>
                                                <div class=""><h4 class="p-4 text-white font-semibold">Portfolio versie 1 - Lars Vermeulen</h4></div></a></article>
                                                
                                                </section>

        </>
    )
}

export default contenten
