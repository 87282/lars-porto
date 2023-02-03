import React from 'react'
import Navbar from '../components/navbar'
function Contact() {
    return (
    <>
    <Navbar />
        <div className='bg-black'>
            
            <section class="pt-24 max-w-[1200px] px-12 mx-auto bg-black">
                <div ><h2 class="font-semibold text-4xl mb-2 section-title text-white" >
                    About / <span className='text-sky-400'> Contact </span></h2>
                    <hr class=" h-1 mx-auto my-4 bg-gray-50 border-0 rounded md:my-10 dark:bg-sky-400"/>
</div><article class="my-2 grid md:grid-cols-3">
    <div class="md:col-span-2"><h5 class="font-bold text-sky-400">Over mij / Wie ben ik?</h5>
    <p className='text-white'>Mijn naam is Lars Vermeulen ik ben een 17 jaar oude student op het Grafisch Lyceum in Rotterdam. De opleiding die ik doe is Software Developer momenteel zit ik in het tweede leerjaar. Zelf heb ik al mijn examen Front-end succesvol afgerond en ook nog mijn examen ( Het beheren van virtuele machines met een virtueel ingestelde router). </p>
    <p class="mt-2 text-white">Ik ben een positief ingestelde jongen die heel leer gierig is en goed kan omgaan in een groep. Als er problemen zijn met het coderen zoek ik graag naar oplossingen voor het probleem en dat motiveert mij weer bij de opdracht. </p>
    <h5 class="font-bold mt-6 text-sky-400">U kunt contact met mij opnemen via de onderstaande methodes.</h5>
    <div class="social-links flex flex-row gap-4">
        <a href="">
            <img src="/assets/phone2.png" class="w-12 h-12" viewBox="0 0 24 24"></img></a> <p className='text-white'>U kunt me bellen via 0638272089</p>
            <a href="https://www.instagram.com/larsvermeulen._/">
                <img alt="github-social" src="/assets/instagram.png" class="w-12 aspect-square h-12 object-cover" /></a><p className='text-white'>Of via instagram ( klik op het icoon om naar mijn insta te gaan )</p></div>
                </div>
                    <article class="md:col-span-1"><div class="w-full aspect-square image-mask-1 relative overflow-hidden"><div class="image-container" data-v-2f9302fb=""><img alt="layer_1" class="absolute top-0 left-0 z-[3] hover:scale-105 ease-in duration-800" data-layer="1" data-speed="70" loading="lazy" src="/assets/port.jpeg" /></div></div><br/>
<br/>
<br/>
</article></article></section>


        <div/>
        </div></>
    )
}

export default Contact
