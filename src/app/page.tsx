import React from 'react'
import Image from 'next/image';

import Featured_Products from './components/Featured-Products'
import Latest_Product from './components/latest_product'
import Shopex_Offer from './components/shopex_offer'

import Unique_feature from './components/unifeature'
import Trending_Product from './components/trending'
import Below_Trending from './components/below_trending'
import Discount_Item from './components/Discount_item'
import Top_Categories from './components/Top_Categories'
import Latest_Update from './components/latest_update'
import Blog_Post from './components/blog'




const HomePage = () => {
  return (
    <div>
          
          <section className="bg-purple-50 relative py-12">
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between relative gap-8">
              <div className="flex lg:absolute lg:justify-start justify-center">

                 
<Image
  src="/lamp.png" // Ensure the path is correct and starts with a leading slash
  alt="Lamp"
  width={150}
  height={150}
  loading="lazy"
  className="w-60 h-60 ml-12 lg:mb-72 sm:mb-60"
/>
                  </div>
                  <div className="flex-1 space-y-4 xs:absolute top-64 sm:space-y-6 sm:text-xl sm:absolute lg:static lg:mt-0 lg:text-left lg:ml-64">
                    <h4 className="text-pink-500 text-sm uppercase font-semibold sm:text-lg">Best Furniture For Your Castle...</h4>
                    <h1 className="text-gray-800 text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">New Furniture Collection <br/> Trends in 2020</h1>
                    <p className="text-gray-600 lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est<br/> adipiscing in phasellus non in justo.</p>
                    <button className="bg-pink-500 text-white py-3 px-6 rounded-md shadow-md text-sm hover:bg-pink-600 transition mt-4">
                      <a href="/cart">Shop Now</a>
                      </button>
                      </div>
                      <div className="flex justify-center lg:justify-end mr-28 xs:mt-72 sm:mt-32 lg:static lg:m-0 lg:mr-32">
                        <img 
                        src="sofa promotional header.png"
                        alt="Sofa" 
                        className="w-full max-w-md h-auto" />
                        </div>
                        </div>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-pink-500"></div><div className="w-3 h-3 rounded-full bg-gray-300">
                          </div>
                          <div className="w-3 h-3 rounded-full bg-gray-300">
                            </div>
                            </div>
                            </div>
                            </section>





<Featured_Products/>
<Latest_Product/>
<Shopex_Offer/>
<Unique_feature/>
<Trending_Product/>
<Below_Trending/>
<Discount_Item/>
<Top_Categories/>
<Latest_Update/>
<Blog_Post/>


    </div>
  )
}

export default HomePage