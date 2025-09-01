import { useState } from "react"
import CardsContent from "./CardsContent.jsx"
import data from "./content.js"

import { TypeAnimation } from "react-type-animation"

import ParticlesComponent from "./particles.jsx"


export default function About() {
    const [show, setShow] = useState(false)
    const [selectedId, setSelectedId] = useState("")

    const toggleAbout = () => setShow(prev => !prev);

    function handleClick(e) {
        const id = e.currentTarget.id
        console.log(id)
        setSelectedId(id)
        setShow(prev=>!prev)
    }
    

    console.log(data)

    return (
        <>
        <section className="relative min-h-screen"> 
            {!show &&
            <>
            <div className="absolute inset-0 z-0">
                <ParticlesComponent id="particles" />
            </div>
            <div className="font-vt323 relative z-10 pt-16 pb-16 flex flex-col items-center justify-center min-h-screen text-[#39FF14]">
                 <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Hi! I am Niq, a JHS student from Hack Club',
                    1000,
                    'Hi! I am Niq, a JHS student from the Ateneo De Manila University',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={0}
                />
                <h1 className="text-9xl font-bold mb-6">I AM A...</h1>
            <div style={{cursor: "pointer", }} className="flex gap-5  text-[#39FF14] grid grid-cols-2" >
                    <div id="hobbyist" onClick={handleClick} className="hover:animate-pulse active:animate-ping bg-black rounded-lg shadow-lg border border-gray-800 p-1">
                        <p className="text-sm">Hobbyist</p>
                        <img src="./glasses.jpg" alt="Visually impaired wearing obstacle detection" className="w-sm h-[20rem] object-cover rounded-md "/>
                    </div>
                    <div id="programmer" onClick={handleClick} className="hover:animate-pulse active:animate-ping bg-black rounded-lg shadow-lg border border-gray-800 p-1">
                        <p className="text-sm">Programmer</p>
                        <img src="./About/programmer.png" alt="Visually impaired wearing obstacle detection" className="object-cover w-sm h-[20rem]  rounded-md "/>
                    </div>
                     <div id="researcher" onClick={handleClick} className="hover:animate-pulse active:animate-ping bg-black rounded-lg shadow-lg border border-gray-800 p-1">
                        <p className="text-sm">Researcher</p>
                        <img src="./About/researcher.jpg" alt="Visually impaired wearing obstacle detection" className="object-cover w-sm h-[20rem]  rounded-md "/>
                    </div>
                    <div id="filmmaker" onClick={handleClick} className="hover:animate-pulse active:animate-ping bg-black rounded-lg shadow-lg border border-gray-800 p-1">
                        <p className="text-sm">Filmmaker</p>
                        <video
                        className="object-cover w-sm h-[20rem] lg:h-[20rem]  rounded-md "
                        autoPlay
                        loop
                        muted 
                        playsinline>
                        <source src="./About/advocate.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div id="photographer" onClick={handleClick} className="hover:animate-pulse active:animate-ping bg-black rounded-lg shadow-lg border border-gray-800 p-1">
                        <p className="text-sm">Photographer</p>
                        <img src="./About/photographer.JPG" alt="Visually impaired wearing obstacle detection" className="object-cover w-sm h-[20rem]  rounded-md "/>
                    </div>
                    <div  id="advocate" onClick={handleClick} className="hover:animate-pulse active:animate-ping bg-black rounded-lg shadow-lg border border-gray-800 p-1">
                        <p className="text-sm">Student Leader</p>
                        <img src="./About/github.jpg" alt="Visually impaired wearing obstacle detection" className="object-cover w-sm h-[20rem] lg:h-[25rem]  rounded-md "/>
                    </div>
                </div>
            </div>
            </>
            }
        </section>
            {show && (
            <>
            <div className="relative flex flex-col items-center font-vt323 text-[#39FF14] bg-transparent z-20">
                <p className="hover:underline hover:animate-bounce active:animate-ping" style={{cursor: "pointer", }} onClick={toggleAbout}>[Close]</p>
            </div>
            <div className="space-y-16 py-8">
                {data.filter(entry => entry.section === selectedId)
                .map((entry) => (
                    <CardsContent 
                    key={entry.id}
                    img={entry.img}
                    heading={entry.heading}
                    projimg={entry.projimg}
                    video={entry.video}
                    title={entry.title}
                    link={entry.link}
                    text={entry.text}
                    status={entry.status}
                    />
                ))}
            </div>
            </>
            )}
        </>
    )
}