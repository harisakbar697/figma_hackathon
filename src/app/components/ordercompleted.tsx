export default function Order_Completed(){
    return(
        <div>
                <div className="bg-purple-100 py-6 w-full ">
         <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-indigo-900">Order Completed</h1>
            <div className="text-sm text-black flex gap-3 ">
            <ul>Home</ul>
            <li>Pages</li>
            <li className="text-pink-500">Order Completed</li>
            </div>
            </div>
        </div>
        <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Container */}
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Checkmark and Title */}
        <div className="flex flex-col items-center space-y-4">
          {/* Checkmark Icon */}
          <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            ✓
          </div>

          {/* Order Completed Text */}
          <h2 className="text-3xl font-bold text-[#101750]">
            Your Order Is Completed!
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition">
            Continue Shopping
          </button>
        </div>

        <div className="flex justify-between mt-12 w-[94px] h-[94px]">
  {/* Left Icon - Clock Image */}
  <div className="flex flex-col items-center">
    <div className="-mt-96  flex items-center justify-center ">
      <img
        src="clock 1.png" // Path to your clock image
        alt="Clock Icon"
        className="w-8 h-8"
      />
    </div>
  </div>

  {/* Right Icon - Checklist Image */}
  <div className="flex flex-col items-center">
    <div className="  rounded-full flex items-center justify-center ">
      <img
        src="Group (2).png" // Path to your checklist image
        alt="Checklist Icon"
        className="w-8 h-8"
      />
    </div>
  </div>
</div>
      </div>
    </div>
        </div>
    )
}