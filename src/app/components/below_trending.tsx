export default function Below_Trending(){
    return(
        <div>
            <div className="bg-white py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* <!-- Left Card --> */}
      <div className="bg-pink-50 p-8 rounded-lg shadow-md flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            23% off in all products
          </h2>
          <a
            href="#"
            className="text-pink-500 font-semibold underline hover:text-pink-600"
          >
            Shop Now
          </a>
        </div>
        <img
          src="image 1162.png"
          alt="Product Image"
          className="w-24 h-24"
        />
      </div>
{/* 
      <!-- Right Card --> */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-md flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            23% off in all products
          </h2>
          <a
            href="#"
            className="text-pink-500 font-semibold underline hover:text-pink-600"
          >
            View Collection
          </a>
        </div>
        <img
          src="image 1161.png"
          alt="Product Image"
          className="w-32 h-24"
        />
      </div>

      {/* <!-- Product List --> */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <img
            src="image 19.png"
            alt="Executive Seat Chair"
            className="w-16 h-16 rounded-lg shadow"
          />
          <div>
            <h3 className="text-lg font-semibold text-blue-900">
              Executive Seat chair
            </h3>
            <p className="text-gray-700 line-through font-bold">$32.00</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="image 28.png"
            alt="Executive Seat Chair"
            className="w-16 h-16 rounded-lg shadow"
          />
          <div>
            <h3 className="text-lg font-semibold text-blue-900">
              Executive Seat chair
            </h3>
            <p className="text-gray-700 line-through font-bold">$32.00</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="image 30.png"
            alt="Executive Seat Chair"
            className="w-16 h-16 rounded-lg shadow"
          />
          <div>
            <h3 className="text-lg font-semibold text-blue-900">
              Executive Seat chair
            </h3>
            <p className="text-gray-700 line-through font-bold">$32.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}