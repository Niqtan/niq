
import { TypeAnimation } from "react-type-animation"


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
        <source src="./Hero/video.mp4" type="video/mp4" />
      </video>
      <div className="text-center text-white">
        <div className="text-[#39FF14] ease-in-out relative text-5xl font-bold font-press mb-6 z-20">
          <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    '',
                    1000,
                    'Niq',
                    1000,
                    'Niq Suguitan',
                    1000,
                ]}
                wrapper="span"
                speed={25}
                style={{ fontSize: '0.7em', display: 'inline-block' }}
                repeat={0}
                />
        </div>
        <p className="animate-bounce relative text-xl font-vt323 mb-6 p-4 z-20">
          Student Engineer, Researcher, & Content Creator Highschooler
        </p>
      </div>
    </section>
  
    )
}