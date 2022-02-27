import { useRouter } from 'next/router'
import React from 'react'
import requests from '../utils/requests'

const Nav = () => {
    const router = useRouter()
    return (
        <nav>
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 overflow-scroll" >
                {Object.entries(requests)
                .map(([key, { title, url }]) => (
                    <h2 key={key} 
                    onClick={() => router.push(`/?genre=${key}`)}
                    className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 active:text-emerald-300">{title}</h2>
                ))
                }
            </div>
            <div className="absolute h-10 w-1/12 top-0 right-0">

            </div>
        </nav>
    )
}

export default Nav