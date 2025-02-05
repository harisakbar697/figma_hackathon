export default function Trending_Product(){
    return(
        <div>
            <div className="bg-white py-16">
  <div className="container mx-auto px-4">
    {/* <!-- Section Heading --> */}
    <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
      Trending Products
    </h2>

    {/* <!-- Product Grid --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* <!-- Product Card 1 --> */}
      <div className="bg-gray-50 rounded-lg shadow-md p-4 text-center">
        <img
          src="Trending.png" 
          alt="Cantilever Chair"
          className="mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Cantilever chair
        </h3>
        <p className="text-gray-700 font-bold">$26.00 
          <span className="text-gray-400 line-through text-sm ml-2">$42.00</span>
        </p>
      </div>

      {/* <!-- Product Card 2 --> */}
      <div className="bg-gray-50 rounded-lg shadow-md p-4 text-center">
        <img
          src="Trending2.png" 
          alt="Cantilever Chair"
          className="mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Cantilever chair
        </h3>
        <p className="text-gray-700 font-bold">$26.00 
          <span className="text-gray-400 line-through text-sm ml-2">$42.00</span>
        </p>
      </div>

      {/* <!-- Product Card 3 --> */}
      <div className="bg-gray-50 rounded-lg shadow-md p-4 text-center">
        <img
          src="Trending4.png" 
          alt="Cantilever Chair"
          className="mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Cantilever chair
        </h3>
        <p className="text-gray-700 font-bold">$26.00 
          <span className="text-gray-400 line-through text-sm ml-2">$42.00</span>
        </p>
      </div>

      {/* <!-- Product Card 4 --> */}
      <div className="bg-gray-50 rounded-lg shadow-md p-4 text-center">
        <img
          src="Trending3.png" 
          alt="Cantilever Chair"
          className="mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Cantilever chair
        </h3>
        <p className="text-gray-700 font-bold">$26.00 
          <span className="text-gray-400 line-through text-sm ml-2">$42.00</span>
        </p>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}