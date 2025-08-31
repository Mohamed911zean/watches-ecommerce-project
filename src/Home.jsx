import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Shield, Award, Truck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredWatches = [
  {
    name: 'Heritage Master',
    price: '$12,500',
    originalPrice: '$15,000',
    image: '/hertiag-watch.avif',
    badge: 'Limited Edition',
  },
  {
    name: 'Platinum Elite',
    price: '$28,000',
    originalPrice: '$32,000',
    image: '/platunim-elite.avif',
    badge: 'Best Seller',
  },
  {
    name: 'Royal Crown',
    price: '$45,000',
    originalPrice: '$50,000',
    image: 'royal-crown-2.avif',
    badge: 'Exclusive',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'Complete protection for your investment with comprehensive coverage',
  },
  {
    icon: Award,
    title: 'Swiss Certified',
    description: 'Authentic Swiss craftsmanship with certified chronometer movements',
  },
  {
    icon: Truck,
    title: 'Free Worldwide Shipping',
    description: 'Complimentary insured delivery to your doorstep anywhere in the world',
  },
  {
    icon: Clock,
    title: '24/7 Expert Support',
    description: 'Round-the-clock assistance from certified horological specialists',
  },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-black text-stone-100 overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-gradient { animation: gradient 3s ease infinite; }
        .bg-300 { background-size: 300% 300%; }
        .bg-animate { animation: gradient 3s ease infinite; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Background animated circles */}
        <div className="absolute inset-0 flex justify-center items-center">
          <motion.div
            className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-gray-700/20 to-gray-400/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-[900px] h-[900px] rounded-full bg-gradient-to-r from-gray-500/10 to-gray-700/5 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-wide"
          >
            Timeless <span className="text-gray-400">Luxury</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-4 text-gray-300 text-lg md:text-xl"
          >
            Discover watches crafted with precision and elegance.
          </motion.p>

          {/* Watch image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3 }}
            className="mt-12 flex justify-center"
          >
            <div className="relative">
              <img
                src="/watch.webp"
                alt="Luxury Watch"
                className="w-[300px] md:w-[420px] drop-shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              />
              {/* reflection shadow */}
              <div className="absolute top-full left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent scale-y-[-1] rounded-b-full blur-md opacity-30" />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-10">
            <Link to="/all-collection">
              <button className="px-8 py-3 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition cursor-pointer">
                Explore Collection
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 bg-gradient-to-b from-emerald-900/80 to-emerald-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible['why-choose-us'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Why Choose Chronos</span>
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">Experience the pinnacle of luxury timepieces with unmatched quality, service, and heritage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-emerald-900/50 to-emerald-950/80 backdrop-blur-sm p-8 rounded-sm border border-emerald-700/30 hover:border-yellow-600/50 transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10 ${isVisible['why-choose-us'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-sm flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-yellow-500/30">
                    <feature.icon className="w-8 h-8 text-emerald-950" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-stone-300 leading-relaxed group-hover:text-stone-200 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="featured-collection" className="py-24 bg-gradient-to-b from-emerald-950 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible['featured-collection'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Featured Collection</span>
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">Handpicked masterpieces representing the finest in luxury horology</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWatches.map((watch, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-emerald-900/60 to-emerald-950/90 backdrop-blur-sm rounded-sm overflow-hidden border border-emerald-700/30 hover:border-yellow-600/50 transition-all duration-700 transform hover:scale-110 hover:-translate-y-4 hover:shadow-2xl hover:shadow-yellow-500/20 ${isVisible['featured-collection'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img src={watch.image} alt={watch.name} className="w-full h-80 object-cover group-hover:scale-125 transition-all duration-1000 ease-out" />
                  <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-emerald-950 px-3 py-1 rounded-sm text-sm font-bold shadow-lg">
                      {watch.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-500">{watch.name}</h3>
                  <div className="flex items-center justify-between mb-6">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-stone-100">{watch.price}</div>
                      <div className="text-stone-400 line-through">{watch.originalPrice}</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-emerald-950 py-3 rounded-sm font-bold transition-all duration-500 transform group-hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta-section" className="py-24 bg-gradient-to-r from-emerald-900/40 via-emerald-950/20 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Begin Your Legacy</span>
            </h2>
            <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the exclusive circle of connoisseurs who understand that time is not just measured,
              but celebrated. Discover your perfect timepiece today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/all-collection">
                <button className="group bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-emerald-950 px-12 py-4 rounded-sm text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 flex items-center space-x-3">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </button>
              </Link>

              <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-emerald-950 px-12 py-4 rounded-sm text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/20">
                Schedule Consultation
              </button>
            </div>

            <div className="mt-16 flex justify-center items-center space-x-12 opacity-60">
              <div className="text-center transform hover:scale-110 transition-all duration-500 cursor-pointer">
                <div className="text-3xl font-bold text-yellow-500 animate-pulse">1000+</div>
                <div className="text-stone-400">Happy Customers</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-500 cursor-pointer">
                <div className="text-3xl font-bold text-yellow-500 animate-pulse">50+</div>
                <div className="text-stone-400">Premium Brands</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-500 cursor-pointer">
                <div className="text-3xl font-bold text-yellow-500 animate-pulse">25</div>
                <div className="text-stone-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;