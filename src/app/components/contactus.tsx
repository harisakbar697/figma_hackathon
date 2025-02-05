export default function ContactUs() {
    return (
      <div>
        {/* Header Section */}
        <div className="bg-purple-100 py-6 w-full ">
         <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-indigo-900">Contact</h1>
            <div className="text-sm text-black flex gap-3 ">
            <ul>Home</ul>
            <li>Pages</li>
            <li className="text-pink-500"> Contact </li>
            </div>
            </div>
        </div>
  
        {/* Information and Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto py-12 px-4">
          {/* Information About Us */}
          <div>
            <h2 className="text-2xl font-bold text-[#101750] mb-4">Information About Us</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
              aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
              lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
            </div>
          </div>
  
          {/* Contact Way */}
          <div>
            <h2 className="text-2xl font-bold text-[#101750] mb-4">Contact Way</h2>
            <div className="space-y-4">
              {/* First Row */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-[45px] h-[45px] bg-purple-500 rounded-full"></div>
                  <div>
                    <p className="text-gray-500 font-semibold">Tel: 877-67-88-99</p>
                    <p className="text-gray-500">E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-[45px] h-[45px] bg-pink-500 rounded-full"></div>
                  <p className="text-gray-500 font-semibold">Support Forum</p>
                  <p className="text-gray-500 px">For over 24hr</p>
                </div>
              </div>
              {/* Second Row */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-[45px] h-[45px] bg-orange-500 rounded-full"></div>
                  <div>
                    <p className="text-gray-500 font-semibold">
                      20 Margaret st, London <br /> Great Britain, 3NM98-LK
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-[45px] h-[45px] bg-green-500 rounded-full"></div>
                  <p className="text-gray-500 font-semibold">Free Standard Shipping</p>
                  <p className="text-gray-500">On all orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Get In Touch */}
        
    <div className="py-12 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Form Section */}
        <div>
          <h2 className="text-3xl font-bold text-[#101750] mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
            aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
            lobortis quis bibendum quam.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="email"
                placeholder="Your E-mail*"
                className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject*"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder="Type Your Message*"
              className="p-3 border border-gray-300 rounded-md w-full h-[250px] focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition w-full md:w-auto"
            >
              Send Mail
            </button>
          </form>
        </div>

        {/* Illustration Section */}
        <div className="flex justify-center items-center">
          <img
            src="Group 124.png" // Replace with your image path
            alt="Contact Illustration"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </div>
  

      </div>
    );
  }
  