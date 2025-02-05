export default function Top_Categories(){
    return(
        <div>
            <div className="bg-white py-16">
  <div className="container mx-auto px-4">
    {/* <!-- Section Title --> */}
    <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
      Top Categories
    </h2>

    {/* <!-- Product Grid --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
      {/* <!-- Product 1: Highlighted --> */}
      <div className="relative">
      
          {/* <!-- Product Image --> */}
          <img
            src="Top catagories.png"
           alt=""
          />
        
      </div>

      {/* <!-- Product 2 --> */}
      <div className="relative">
        {/* <!-- Product Image --> */}
        <img
            src="Top catagories (2).png"
           alt=""
          />
        
      </div>

      {/* <!-- Product 3 --> */}
      <div className="relative">
        {/* <!-- Product Image --> */}
        <img
            src="Top catagories (3).png"
           alt=""
          />
        
      </div>

      {/* <!-- Product 4 --> */}
      <div className="relative">
        {/* <!-- Product Image --> */}
        <img
            src="Top catagories (4).png"
           alt=""
          />
        
      </div>

      </div>
    {/* <!-- Carousel Dots --> */}
    <div className="flex justify-center mt-8 space-x-2">
      <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
      <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
    </div>
  </div>
</div>

        </div>
    )
}