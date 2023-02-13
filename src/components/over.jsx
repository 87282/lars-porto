import React from 'react'

export default function Over() {
    return (
        <div className=''>
            <section class="bg-dark h-fit py-24">

                <h2 class="text-black text-4xl mb-2 section-title px-3" >Over mij en <span className='text-sky-400'> deze Portfolio </span></h2>
                <hr class=" h-1 mx-auto my-4 bg-gray-50 border-0 rounded md:my-10 dark:bg-sky-400">
                </hr>
                <br/>
                <article class="grid md:grid-cols-4 px-3"><div class="md:col-span-2"><h5 class="font-bold text-sky-400">Over mij / Wie ben ik?</h5><p className='text-black'>Mijn naam is Lars Vermeulen ik ben een 17 jaar oude student op het Grafisch Lyceum in Rotterdam. In deze portfolio gaat u meer te weten komen over mij en hoe ik de portoflio heb gemaakt, u gaat ook zien wat voor projecten ik heb gemaakt of wat voor Frameworks en talen ik ken of hoe u mij kunt contacteren. </p><br/><h5 class="font-bold text-sky-400">Deze portfolio</h5><p className='text-black'>Deze portfolio is gemaakt met Next.js en Tailwindcss, Next.js is een framework van javascript en Tailwind is een styling framework om het stylen van je pagina beter te maken <br/>
                 </p><br/><h5 class="font-bold text-sky-400">Online zetten van de portfolio</h5><p>De portfolio heb ik online gezet met Vercel en Github, als eerst heb ik het project geplaatst in Github vervolgens gebruite ik de volgende commands in de terminal </p><br/><ol>            <li>~ git init </li>
    <li>~ git commit -m "test" <span className='text-green-600'>//naam van de commit//</span></li>
    <li>~ git branch -M main</li>
    <li>~ git remote add origin https://github.com/87282/test.git <span>//link naar je git project</span></li>
    <li>~ git push -u origin main<span className='text-green-600'> //hier push je het//</span>
</li></ol><br/>
<p>Na deze commands staat het in je Github repository vervolgens ging ik naar Vercel en had ik het project geimport vervolgens klikte ik op deploy en kwam die online te staan </p>

</div>
<article class="md:col-span-2"><h5 class="font-bold text-sky-400">       Een foto van mij</h5><br/> <div class=" aspect-square relative overflow-hidden"><div class="image-container" ><img  class="absolute top-0 left-0 z-[3] hover:scale-105 ease-in duration-800 "   src="/assets/port.jpeg" /></div></div></article></article>
            </section>
        </div>
    )
}
