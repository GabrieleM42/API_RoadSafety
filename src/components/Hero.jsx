import React from 'react'
import cartelli from '../assets/cartelli.jpg'

export const Hero = () => {
    return (
        <div className="h-full">
            <h1 className="mb-4 mt-4 text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">API Sicurezza stradale: Le conoscenze per un viaggio più sicuro</h1>
            <section className="text-gray-600 body-font flex justify-center items-center">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Cartelli stradali: un viaggio più sicuro</h1>
                        <p className="mb-8 leading-relaxed">Attraversare le strade del mondo è un viaggio costellato di segnali e simboli, ognuno portatore di un messaggio vitale per la sicurezza stradale. Da indicazioni di precedenza a divieti di sosta, da avvisi di pericolo a obblighi di velocità minima, i cartelli stradali sono i custodi delle regole che governano il nostro percorso sulla strada. In questo tour digitale, esploreremo il significato dietro questi segni distintivi, illuminando il loro ruolo nel mantenere la fluidità del traffico e proteggere la vita di coloro che viaggiano lungo le nostre strade. Preparatevi per un'immersione nel mondo dei cartelli stradali e scoprite come questi semplici simboli possono trasformare il vostro viaggio in un'esperienza più sicura e consapevole.
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-">
                        <img className="object-cover object-center rounded" alt="hero" src={cartelli} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;
