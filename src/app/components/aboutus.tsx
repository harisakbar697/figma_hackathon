export default function AboutUs() {
    return (
      <div>
        {/* Header Section */}
        <div className="bg-purple-100 py-6 w-full ">
         <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-indigo-900">About Us</h1>
            <div className="text-sm text-black flex gap-3 ">
            <ul>Home</ul>
            <li>Pages</li>
            <li className="text-pink-500"> About Us </li>
            </div>
            </div>
        </div>
        <div className="py-12 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
        {/* Left Image Section */}
        <div>
          <div className="">
            <img
              src="Group 73.png" // Replace with your image path
              alt="Ecommerce Business"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-[#101750] mb-4">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
            aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis.
            Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <button className="bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition">
            Contact us
          </button>
        </div>
      </div>
    </div>
    <div className="bg-white py-16">
  <div className="container mx-auto px-4 ">
    {/* <!-- Heading --> */}
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Features</h2>
    
    {/* <!-- Columns --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
    {/* <!-- Card 1 --> */}
      <div className="border border-gray-300 rounded-lg p-6 text-center shadow-lg w-[270px] h-[320px] ">
        <img src="free-delivery 1.png" alt="24/7 Support" className="mx-auto py-6 mb-4"/>
        <h3 className="text-xl font-bold text-blue-900 mb-2">24/7 Support</h3>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>
      
       {/* <!-- Card 2 --> */}
       <div className="border border-gray-300 rounded-lg p-6 text-center shadow-lg w-[270px] h-[320px] ">
        <img src="cashback 1.png" alt="24/7 Support" className="mx-auto py-6 mb-4"/>
        <h3 className="text-xl font-bold text-blue-900 mb-2">24/7 Support</h3>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>


       {/* <!-- Card 3 --> */}
       <div className="border border-gray-300 rounded-lg p-6 text-center shadow-lg w-[270px] h-[320px] ">
        <img src="Group.png" alt="24/7 Support" className="mx-auto py-6 mb-4"/>
        <h3 className="text-xl font-bold text-blue-900 mb-2">24/7 Support</h3>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>




       {/* <!-- Card 4 --> */}
       <div className="border border-gray-300 rounded-lg p-6 text-center shadow-lg w-[270px] h-[320px] ">
        <img src="Group (1).png" alt="24/7 Support" className="mx-auto py-6 mb-4"/>
        <h3 className="text-xl font-bold text-blue-900 mb-2">24/7 Support</h3>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="py-16 bg-purple-50">
      <div className="container mx-auto text-center px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-[#101750] mb-8">Our Client Say!</h2>

        {/* Client Images */}
        <div className="flex justify-center space-x-6 mb-8">
          {/* Client 1 */}
          <img
            src="about (3).png" // Replace with your client image path
            alt="Client 1"
            className="w-16 h-16 rounded-full object-cover"
          />
          {/* Client 2 */}
          <img
            src="about (2).png" // Replace with your client image path
            alt="Client 2"
            className="w-16 h-16 rounded-full object-cover"
          />
          {/* Client 3 */}
          <img
            src="about (1).png" // Replace with your client image path
            alt="Client 3"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

        {/* Client Name and Role */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Selina Gomez</h3>
          <p className="text-sm text-gray-500">CEO at Webecy Digital</p>
        </div>

        {/* Client Testimonial */}
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin
          aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus
          volutpat praesent.
        </p>

        {/* Divider */}
        <div className="mt-6 flex justify-center">
          <span className="h-[3px] w-16 bg-pink-500"></span>
        </div>
      </div>
    </div>
  </div>
    )
}