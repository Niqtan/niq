export default function Hero() {
    return (
    <section
      className="h-[100vh]  flex items-center justify-center">
    <video
      className="absolute object-cover h-[100vh] w-full left-0 top-0 z-10"
      autoPlay
      loop
      muted 
      playsinline>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="text-center text-white">
        <h1 className="relative text-9xl font-bold font-monsieur mb-6 z-20">Niq Suguitan</h1>
        <p className="relative text-xl font-vt323 mb-6 p-4 z-20">
          Student Engineer, Researcher, & Content Creator Highschooler
        </p>
      </div>
    </section>
  
    )
}