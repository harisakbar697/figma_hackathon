export default function Footer(){
    return(
        <div>
            <footer className="bg-[#EEEFFB] py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* <!-- Brand and Subscription --> */}
      <div>
        <h2 className="text-2xl font-bold text-[#151875] mb-4">Hekto</h2>
        <div className="flex items-center mb-4">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-4 py-2 rounded-l-md bg-white text-gray-600 border border-gray-300 focus:outline-none"
          />
          <button
            className="bg-pink-500 text-white px-4 py-2 rounded-r-md font-semibold hover:bg-pink-600 w-[135px] h-[39px]"
          >
            Sign Up
          </button>
        </div>
        <p className="text-gray-600 text-sm">
          Contact Info <br />
          17 Princess Road, London, Greater London NW1 8JR, UK
        </p>
      </div>

      {/* <!-- Categories --> */}
      <div>
        <h3 className="text-lg font-semibold text-[#151875] mb-4">Catagories</h3>
        <ul className="text-gray-600 space-y-2">
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>Video Games & Consoles</li>
          <li>Waterproof Headphones</li>
        </ul>
      </div>

      {/* <!-- Customer Care --> */}
      <div>
        <h3 className="text-lg font-semibold text-[#151875] mb-4">Customer Care</h3>
        <ul className="text-gray-600 space-y-2">
          <li>My Account</li>
          <li>Discount</li>
          <li>Returns</li>
          <li>Orders History</li>
          <li>Order Tracking</li>
        </ul>
      </div>

      {/* <!-- Pages --> */}
      <div>
        <h3 className="text-lg font-semibold text-[#151875] mb-4">Pages</h3>
        <ul className="text-gray-600 space-y-2">
          <li>Blog</li>
          <li>Browse the Shop</li>
          <li>Category</li>
          <li>Pre-Built Pages</li>
          <li>Visual Composer Elements</li>
          <li>WooCommerce Pages</li>
        </ul>
      </div>
    </div>

    {/* <!-- Bottom Section --> */}
    <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
      <p>©Webecy - All Rights Reserved</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-[#151875] hover:text-pink-500">🔵</a>
        <a href="#" className="text-[#151875] hover:text-pink-500">🔵</a>
        <a href="#" className="text-[#151875] hover:text-pink-500">🔵</a>
      </div>
    </div>
  </div>
</footer>

        </div>
    )
}