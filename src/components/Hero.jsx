import { motion } from "motion/react"

export default function Hero() {
    return (
    <section
      className="h-[100vh]  flex items-center justify-center">
    <video
      className="absolute inset-0 object-cover h-full w-full z-10"
      autoPlay
      loop
      muted 
      playsinline>
        <source src="/Hero/video.mp4" type="video/mp4" />
      </video>
      <div className="text-center text-white">
        <h1 className="ease-in-out relative text-9xl font-bold font-monsieur mb-6 z-20">Niq Suguitan</h1>
        <p className="animate-bounce relative text-xl font-vt323 mb-6 p-4 z-20">
          Student Engineer, Researcher, & Content Creator Highschooler
        </p>
      </div>
    </section>
  
    )
}