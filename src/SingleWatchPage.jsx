import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ShoppingCart } from 'lucide-react'

const SingleWatchPage = () => {
  const { id } = useParams()
  const [watch, setWatch] = useState(null)

  useEffect(() => {
    axios.get('/data.json')
      .then(res => {
        const allWatches = res.data.watches
        const single = allWatches.find(w => w.id === Number(id))
        setWatch(single)
      })
  }, [id])

  if (!watch) return <div className="text-center text-2xl p-10">Loading...</div>

  return (
    <div className="min-h-screen relative flex items-center justify-center p-8 
                    bg-gradient-to-r from-gray-900 via-black to-gray-800 overflow-hidden">

      {/* خلفية ديكورية (دوائر مضيئة) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      
      {/* الكارت */}
      <div className="relative bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full p-10 z-10">
        
        {/* الصورة */}
        <div className="flex justify-center items-center">
          <img
            src={watch.img}
            alt={watch.name}
            className="w-96 h-96 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{watch.name}</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{watch.description}</p>
            <p className="text-2xl font-semibold text-green-600">{watch.price}</p>
          </div>

          {/* زرار */}
          <button className="mt-6 flex items-center gap-3 bg-black text-white py-3 px-6 rounded-2xl shadow-lg hover:bg-gray-800 transition-all duration-300 w-fit">
            <ShoppingCart size={22} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleWatchPage
