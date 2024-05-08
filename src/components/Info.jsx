import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { TailSpin } from "react-loader-spinner";

const Info = () => {
    const [data, setData] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://gabrielem42.github.io/api_cartelli/cartelli.json')
            .then((resp) => resp.json())
            .then((apiData) => setData(apiData))
            .finally(() => setIsLoading(false))
    }, [])

    let stableData = data.cartelli
    if (isLoading) {
        return <div className='flex justify-center'>
            <TailSpin color="red" radius={"8px"} />
        </div>
    }

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    function ImgError(e) {
        e.target.src = 'https://via.placeholder.com/150'
    }

    let filteredData = searchInput ? stableData.filter((p) => p.type.toLowerCase().includes(searchInput.toLowerCase()) || p.name.toLowerCase().includes(searchInput.toLowerCase())) : stableData;

    return (
        // input search bar
        <div id='content'>
            <h1 className="my-10 text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Cartelli Stradali</h1>
            <form className='p-10'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" onChange={handleChange} value={searchInput} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#4F45E4] focus:border-[#4F45E4] dark:bg-[#ebebec] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-[#4F45E4] dark:focus:border-[#4F45E4]" placeholder="Cerca cartello" required />
                </div>
            </form>
            {/* cards */}
            <div className="p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-h-full grid-flow-row justify-center">
                {filteredData != undefined ? filteredData.map((p) => (
                    <div key={p.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="object-cover" src={p.img} alt="lgbt" onError={ImgError} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{p.name}</div>
                            <p className="text-gray-700 font-bold uppercase ">
                                {p.type}
                            </p>
                            <p className="text-gray-700 text-base">
                                {p.desc}
                            </p>
                        </div>
                    </div>
                )

                ) : console.log("error in loading data")}
            </div>
        </div >
    )
}

export default Info