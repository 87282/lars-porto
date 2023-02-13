import { motion } from "framer-motion"

const  Skills = ()=> {
  return (
    <>
    <section className='bg-darker h-fit px-12 py-24 bg-black'>
  <div class="text-white" ><h2 class="font-semibold text-4xl mb-2 section-title" >Technieken</h2><hr class=" h-1 mx-auto my-4 bg-gray-50 border-0 rounded md:my-10 dark:bg-sky-400" /></div>


  <article class="grid md:grid-cols-2 gap-2 mt-14">
    <article class="p-2 flex flex-col gap-3">



        <h2 class="text-sky-400 font-bold text-3xl">Frameworks</h2>
   
        <div class="diva" 
      >
            <div class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt="Laravel"
                    src="/assets/nextjs.png" class="w-8 aspect-square object-cover"
                    loading="lazy"/>
                <h3 className="font-bold text-xl">Next.JS</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </div>
        </div>
        <div class="" >
            <div class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt="Vue.js"
                    src="/assets/reactjs.png" class="w-8 aspect-square object-cover" />
                <h3 className="font-bold text-xl">React.JS</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </div>
        </div>
        <div class="" >
            <div class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt=".NET"
                    src="/assets/tailwind.png"
                    class="w-8 aspect-square object-cover" />
                <h3 className="font-bold text-xl">Tailwindcss</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </div>
        </div>
        <div class="" >
            <div class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt=".NET"
                    src="/assets/bootstrap.svg"
                    class="w-8 aspect-square object-cover" />
                <h3 className="font-bold text-xl">Bootstrap</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </div>
        </div>
    </article>
    <article class="p-2 flex flex-col gap-3">
        <h2 class="text-sky-400 font-bold text-2xl">Talen</h2>
        <div class="" >
            <div class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt="PHP"
                    src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
                    class="w-8 aspect-square object-cover" loading="lazy"/>
                <h3 className="font-bold text-xl">HTML</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </div>
        </div>
        <div class="" >
            <div class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt="C++"
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg"
                    class="w-8 aspect-square object-cover" loading="lazy"/>
                <h3 className="font-bold text-xl">CSS</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </div>
        </div>
        <div class="" >
            <div class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt="C#"
                    src="/assets/java-script.png"
                    class="w-8 aspect-square object-cover" loading="lazy"/>
                <h3 className="font-bold text-xl">Javascript</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </div>
        </div>
        <div class="" >
            <div class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img
                    alt="JavaScript"
                    src="/assets/c4.svg"
                    class="w-8 aspect-square object-cover" loading="lazy"/>
                <h3 className="font-bold text-xl" >C# ( Sharp )</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </div>
        </div>

        
    </article>
</article>




  </section>
    </>
  )
}

export default Skills
