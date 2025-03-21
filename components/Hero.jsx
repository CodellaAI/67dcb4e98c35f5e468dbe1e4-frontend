
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/90 to-secondary/90 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Simple View Showcase
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-100">
            A clean, minimal single-page application built with NextJS and styled with TailwindCSS.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn bg-white text-primary hover:bg-gray-100">
              Learn More
            </button>
            <button className="btn bg-transparent border-2 border-white hover:bg-white/10">
              View Source
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
