import { useState } from "react"
import About from "./About";

export default function CardsContent(prop) {
    return (
    <article className="h-screen rounded-lg shadow-lg border border-gray-800 p-1">
    {prop.img && <img
    className="fixed blur-lg inset-0 absolute object-cover h-full w-full z-0"
    src={prop.img.src}
    alt={prop.img.alt}
    />
    }
        <div className="relative flex flex-col items-center font-vt323 text-[#39FF14] bg-transparent z-20">
            <h1 className="relative font-bold text-5xl lg:text-9xl">
                {prop.heading}
            </h1>
        </div>
            <div className="relative grid sm:grid-cols-2 m-10 items-center  font-vt323 text-[#39FF14] z-20">
                <div className="flex flex-col items-center gap-3">
                {prop.projimg && <img 
                src={prop.projimg.src} 
                alt={prop.projimg.alt}
                className="w-full h-full rounded-lg z-20"
                />}
            </div>
            <div className="flex flex-col gap-2 text-md lg:text-3xl">
                <h2 className="font-bold text-3xl">{prop.title}</h2>                    
                {prop.link && <a className="hover:underline hover:animate-bounce active:animate-ping"href={prop.link}>🔗Check it out</a>}
                <p className=" ml-3">{prop.text}</p>
                {prop.status && <p>Status: {prop.status}</p>}
            </div>
        </div>
        
    </article>
    
)
}