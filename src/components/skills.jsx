const  Skills = ()=> {
  return (
    <>
    <section className='bg-darker h-fit px-12 py-24 bg-black'>
  <div class="text-white" ><h2 class="font-semibold text-4xl mb-2 section-title" >Skills and Experiences</h2><hr class=" h-1 mx-auto my-4 bg-gray-50 border-0 rounded md:my-10 dark:bg-sky-400" /></div>

  <div class="c">
  <input type="checkbox" id="faq-1"/>
  <h1><label for="faq-1"><img src="/assets/nextjs.png" width={"40px"} alt="" />   Next.JS</label></h1>
  <div class="p">
    <p>Next.js is een framework gemaakt door Javascript, zelf ben ik hiermee best bekend mee omdat ik veel oopdrachten hiermee maak zoals deze portfolio. </p>
  </div>
</div>
<div class="c">
  <input type="checkbox" id="faq-2"/>
  <h1><label for="faq-2"><img src="/assets/reactjs.png" width={"40px"} alt="" /> React.JS</label></h1>
  <div class="p">
    <p>Raect.js is een framework van Javascript, zelf heb ik hier wel wat verstand dat komnt omdat ik soms uitmzelf hierin verdiept hebt en een paar projecten mee heb gemaakt.</p>
  </div>
</div>
<div class="c">
  <input type="checkbox" id="faq-3"/>
  <h1><label for="faq-3"><img src="/assets/tailwind.png" width={"40px"} alt="" />Tailwindcss</label></h1>
  <div class="p">
    <p>Tailwindcss ben ik heel erg bekend mee omdat ik dit gebruik voor elk project dat ik maak omdat het heetl gemakkelijk is en heel fijn werkt.
    </p>
  </div>
</div>


  </section>
    </>
  )
}

export default Skills
