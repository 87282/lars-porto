import { motion } from "framer-motion"

const  Skills = ()=> {
  return (
    <>
    <section className='bg-darker h-fit px-12 py-24 bg-black'>
  <div class="text-white" ><h2 class="font-semibold text-4xl mb-2 section-title" >Technieken</h2><hr class=" h-1 mx-auto my-4 bg-gray-50 border-0 rounded md:my-10 dark:bg-sky-400" /></div>


  <article class="grid md:grid-cols-2 gap-2 mt-14">
    <article class="p-2 flex flex-col gap-3">



        <h2 class="text-sky-400 font-bold text-3xl">Frameworks</h2>
   
        <details class="bg-white rounded-md px-5 py-1" 
      >
            <summary class="bg-white h-16 relative flex items-center gap-6 justify-start rounded-md px-4">
            
                <img alt="Laravel"
                    src="/assets/nextjs.png" class="w-8 aspect-square object-cover"
                    loading="lazy"/>
                <h3 className="font-bold text-xl">Next.JS</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
                    
            </summary>

Next.js is een javascript framework die ik zelf veel gebruik. Deze framework heb ik mezelf aangeleerd.   <br/><br/>
<a class="bg-sky-400 text-white px-4 py-1 rounded-md hover:bg-primary-light transition-all duration-300 " href="https://ayizo.vercel.app">Ayizo Web</a> 
<a class="bg-sky-400 text-white px-4 py-1 rounded-md hover:bg-primary-light transition-all duration-300" href="https://larschill2.vercel.app/">Movie API</a>

     </details>
        <details class="bg-white rounded-md px-5 py-1" >
            <summary class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt="Vue.js"
                    src="/assets/reactjs.png" class="w-8 aspect-square object-cover" />
                <h3 className="font-bold text-xl">React.JS</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </summary>
            React.js is een framework die ik mezlef heb aangeleerd<br/><br/>

        </details>
        <details class="bg-white rounded-md px-5 py-1" >
            <summary class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt=".NET"
                    src="/assets/tailwind.png"
                    class="w-8 aspect-square object-cover" />
                <h3 className="font-bold text-xl">Tailwindcss</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </summary>
            Tailwind is een framework die je gebruikt om het stylen van een applicatie te versnellen en te versoepelen. Zelf gebruik ik het heel veel omdat het heel fijn is<br/><br/>
            <a class="bg-sky-400 text-white px-4 py-1 rounded-md hover:bg-primary-light transition-all duration-300" href="https://larschill2.vercel.app/">Movie API</a>
            <a class="bg-sky-400 text-white px-4 py-1 rounded-md hover:bg-primary-light transition-all duration-300 " href="https://ayizo.vercel.app">Ayizo Web</a> 

        </details>
        <details class="bg-white rounded-md px-5 py-1" >
            <summary class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt=".NET"
                    src="/assets/bootstrap.svg"
                    class="w-8 aspect-square object-cover" />
                <h3 className="font-bold text-xl">Bootstrap</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </summary>
            Bootstrap is een framework die het stylen van de opmaak van de site te verbeteren zlef heb ik hier het een en al over geleerd door school opdrachten er mee te maken 
        </details>
    </article>
    <article class="p-2 flex flex-col gap-3 mt-1">
        <h2 class="text-sky-400 font-bold text-2xl">Talen</h2>
        <details class="bg-white rounded-md px-5 py-1" >
            <summary class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt="PHP"
                    src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
                    class="w-8 aspect-square object-cover" loading="lazy"/>
                <h3 className="font-bold text-xl">HTML</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </summary>
            HTML is een taal voor het coderen van een web applicatie. Het is eigenlijk het begin van het coderen veel alle Software Developers weten wat het is , zelf weet ik ook alles hier over.
        </details>
        <details class="bg-white rounded-m px-5 py-1" >
            <summary class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt="C++"
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg"
                    class="w-8 aspect-square object-cover" loading="lazy"/>
                <h3 className="font-bold text-xl">CSS</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </summary>
            CSS is een taal voor het stylen van een web applicatie ( HTML Page) zelf weet ik veel hierover en heb ik er veel mee gewerkt opschool. In mijn vrije tijd probeer ik altijd nog wel nieuwe technieken te leren voor het stylen.
        </details>
        <details class="bg-white rounded-md px-5 py-1" >
            <summary class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img alt="C#"
                    src="/assets/java-script.png"
                    class="w-8 aspect-square object-cover" loading="lazy"/>
                <h3 className="font-bold text-xl">Javascript</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </summary>
            JavaScript is een scripttaal waarmee u dynamisch bijgewerkte inhoud kunt maken, multimedia kunt bedienen, afbeeldingen kunt animeren en vrijwel al het andere. Zelf weet ik ook wel wat hier over.
        </details>
        <details class="bg-white rounded-md px-5 py-1" >
            <summary class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img
                    alt="JavaScript"
                    src="/assets/c4.svg"
                    class="w-8 aspect-square object-cover" loading="lazy"/>
                <h3 className="font-bold text-xl" >C# ( Sharp )</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </summary>
        </details>
        <details class="bg-white rounded-md px-5 py-1" >
            <summary class="bg-white h-16 relative flex items-center gap-6 justify-start px-4 rounded-md"><img
                    alt="JavaScript"
                    src="/assets/php.png"
                    class="w-8 aspect-square object-cover" loading="lazy"/>
                <h3 className="font-bold text-xl" >PHP</h3><span
                    class="text-primary text-4xl absolute right-4 font-bold cursor-pointer select-none transition-all duration-300"></span>
            </summary>
        </details>
        
    </article>
</article>




  </section>
    </>
  )
}

export default Skills
