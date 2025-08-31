import React, { useState, useEffect } from 'react'

export default function AllCollection() {
  const [watches, setWatches] = useState([])
  const [loading, setLoading] = useState(true)
  const [hoveredWatch, setHoveredWatch] = useState(null)

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setWatches(data.watches)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-t-amber-400 border-r-transparent border-b-amber-400 border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-t-transparent border-r-amber-200 border-b-transparent border-l-amber-200 rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-amber-400/20 to-yellow-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-rose-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '500ms'}}></div>
      </div>
      
      {/* Luxury Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%),linear-gradient(45deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%)] bg-[length:30px_30px]"></div>

      <div className="relative z-10 px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
            <span className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase">Luxury Timepieces</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            EXCLUSIVE
            <span className="block font-light italic text-amber-400">Collection</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Discover the epitome of horological excellence. Each timepiece represents 
            <span className="text-amber-400 font-medium"> centuries of craftsmanship</span>, 
            precision engineering, and timeless elegance.
          </p>
        </div>

        {/* Premium Product Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {watches.map((watch, index) => (
              <div 
                key={watch.id}
                className="group relative"
                onMouseEnter={() => setHoveredWatch(watch.id)}
                onMouseLeave={() => setHoveredWatch(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Container */}
                <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden transition-all duration-700 group-hover:border-amber-400/50 group-hover:shadow-2xl group-hover:shadow-amber-400/20 group-hover:-translate-y-2">
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Image Container */}
                  <div className="relative h-80 flex items-center justify-center p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <a href={`/watch/${watch.id}`} className="relative block w-full h-full">
                      <img 
                        src={watch.img} 
                        alt={watch.name}
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 filter group-hover:brightness-110"
                      />
                    </a>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 pt-4">
                    {/* Decorative Line */}
                    <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent mb-4 group-hover:w-20 transition-all duration-500"></div>
                    
                    <h2 className="text-2xl font-light mb-3 text-white group-hover:text-amber-50 transition-colors duration-300">
                      {watch.name}
                    </h2>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-3xl font-extralight text-amber-400">
                        <span className="text-base text-gray-400 font-normal">$</span>
                        {typeof watch.price === 'number' ? watch.price.toLocaleString() : watch.price}
                      </p>
                      
                      {/* Premium Badge */}
                      <div className="px-3 py-1 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 border border-amber-400/30 rounded-full">
                        <span className="text-xs text-amber-300 font-medium tracking-wider uppercase">Premium</span>
                      </div>
                    </div>

                    {/* Hover Details */}
                    <div className={`mt-6 opacity-0 transform translate-y-4 transition-all duration-500 ${hoveredWatch === watch.id ? 'opacity-100 translate-y-0' : ''}`}>
                      <div className="h-px bg-gradient-to-r from-gray-600 to-transparent mb-4"></div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Swiss Movement</span>
                        <span>Lifetime Warranty</span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* Floating Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-32">
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto mb-8"></div>
          <p className="text-gray-500 text-sm tracking-[0.2em] uppercase">
            Crafted for those who appreciate perfection
          </p>
        </div>
      </div>

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>
    </section>
  )
}