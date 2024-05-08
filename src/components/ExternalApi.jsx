import React from "react";
import { useState } from 'react'
import { useEffect } from 'react'
import { TailSpin } from "react-loader-spinner";

const ExternalApi = () => {
    const [data, setData] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=44.801472&lon=10.328000&appid=02750fdaf1f703a01b332712575efe6d&units=metric&lang=it')
            .then((resp) => resp.json())
            .then((apiData) => setData(apiData))
            .finally(() => setIsLoading(false))
    }, [])

    let stableData = data.list

    if (isLoading) {
        return <div className='flex justify-center'>
            <TailSpin color="red" radius={"8px"} />
        </div>
    }

    function capitalizeFirstLetter(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    function getTime(date) {
        return new Date(date).toLocaleTimeString('it-IT', {
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <div id='content'>
            <h1 className="my-10 text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Previsioni Meteo</h1>
            <div className="p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-h-full grid-flow-row justify-center">
                {stableData != undefined ? stableData.map((p) => (
                    <div key={p.dt} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div>
                                <img src={`http://openweathermap.org/img/wn/${p.weather[0].icon}.png`} alt="weather" />
                            </div>
                            <div className="font-bold text-xl mb-1">
                                {capitalizeFirstLetter(new Date(p.dt_txt).toLocaleDateString('it-IT', {
                                    weekday: 'long', // Name of the day (e.g., Monday)
                                    day: 'numeric', // Number of the day (e.g., 1)
                                    month: 'long', // Name of the month (e.g., January)
                                    year: 'numeric' // Year (e.g., 2024)
                                }))}
                            </div>
                            <p className="text-gray-700 font-bold text-lg mb-4">
                                {getTime(p.dt_txt)}
                            </p>
                            <p className="text-gray-700 text-3xl mb-4">
                                {p.main.temp}°C
                            </p>
                            <p className="text-gray-700 font-bold uppercase mb-2">
                                {capitalizeFirstLetter(p.weather[0].description)}
                            </p>
                            <p className="text-gray-700 text-base">
                                Umidità: {p.main.humidity}%
                            </p>
                            <p className="text-gray-700 text-base">
                                Vento: {p.wind.speed} m/s
                            </p>
                            <p className="text-gray-700 text-base">
                                Pressione: {p.main.pressure} hPa
                            </p>
                            <p className="text-gray-700 text-base">
                                Nuvolosità: {p.clouds.all}%
                            </p>
                            <p className="text-gray-700 text-base">
                                Visibilità: {p.visibility / 1000} km
                            </p>
                        </div>
                    </div>
                )) : <div className='flex justify-center'>
                    <TailSpin color="red" radius={"8px"} />
                </div>}
            </div>
        </div>

    )
}

export default ExternalApi;