
import React from "react";

interface StarRatingProps {
  rating: number;
  maxStars?: number; // Optional with a default value
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  return (
    <div className="flex text-yellow-400">
      {Array.from({ length: maxStars }, (_, index) => (
        <span key={index} className="text-l">
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};
export default function Blog_Single(){
const Blog_Single = [
    {
        id: 1,
        image: "Rectangle 59.png",
        title: "Sapien ac",
        price: "26.00",
        oldPrice: "52.00",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.",
        
      },
      {
        id: 2,
        image: "Rectangle 59 (1).png",
        title: "Augue conva",
        price: "26.00",
        oldPrice: "52.00",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.",
        
      },
      
    ];









    return(
        <div>
            <div className="bg-purple-100 py-6 w-full ">
         <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-indigo-900">Single Blog</h1>
            <div className="text-sm text-black flex gap-2 ">
            <ul>Home</ul>
            <li>Pages</li>
            <li className="text-pink-500">Single Blog</li>
            </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto p-6 ">
  {/* Left Section */}
  
  <div className="md:col-span-2">
    <img
      src="blogmain.png"
      alt="Blog Post"
      className="w-full rounded-lg mb-6 "
    />
    <div className="flex items-center space-x-4 text-gray-500 mb-4">
      <span>✒️ Surf Auxion</span>
      <span>📅 Aug 09 2020</span>
    </div>
    <h1 className="text-3xl font-bold text-[#101750] mb-4">
      Mauris at orci non vulputate diam tincidunt nec.
    </h1>
    <p className="text-gray-600 leading-relaxed mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
    </p>
    

    <p className="text-gray-600 leading-relaxed mb-4 py-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, 
    </p>
    

    <div className="border-l-4 border-pink-500 px-4 py-2 my-6">
  <p className="italic text-gray-500 text-lg leading-relaxed">
  &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risus &quot;
  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 px-6">
  {/* Left Image with Play Button */}
  <div className="relative">
    <img
      src="Group 92.png"
      alt="Video Preview"
      className="w-full h-auto rounded-lg object-cover"
    />
    </div>

  {/* Right Image */}
  <div>
    <img
      src="Group 140.png"
      alt="Smiling Girl"
      className="w-full h-auto rounded-lg object-cover"
    />
  </div>

  {/* Paragraph Text */}
  <div className="col-span-2">
    <p className="text-gray-600 text-lg leading-relaxed text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus
      consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
      posuere malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
      nunc, montes, lacus consequat integer viverra.
    </p>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-4 py-8">
  {/* Product 1 */}
  <div className="text-center">
    <img
      src="Rectangle 63.png"
      alt="Quam sed"
      className="w-full h-48 object-cover rounded-lg"
    />
    <h3 className="mt-4 font-semibold text-gray-800">A etiam</h3>
    <div className="flex gap-2 -mt-3 ">
    <div className="text-pink-500 font-bold text-sm mt-5">
      <span className="text-gray-500 line-through mr-2 ">$56.00</span>
      <span>$32.00</span>
    </div>
    <div className="flex justify-center py-4">
      <StarRating rating={4} /> 
    </div>
  </div>
  </div>

  {/* Product 2 */}
  <div className="text-center">
    <img
      src="Rectangle 63 (1).png"
      alt="Tristique sed"
      className="w-full h-48 object-cover rounded-lg"
    />
    <h3 className="mt-4 font-semibold text-gray-800">A etiam</h3>
    <div className="flex gap-2 -mt-3 ">
    <div className="text-pink-500 font-bold text-sm mt-5">
      <span className="text-gray-500 line-through mr-2 ">$56.00</span>
      <span>$32.00</span>
    </div>
    <div className="flex justify-center py-4">
      <StarRating rating={4} /> 
    </div>
  </div>
  </div>

  {/* Product 3 */}
  <div className="text-center">
    <img
      src="Rectangle 63 (2).png"
      alt="A etiam"
      className="w-full h-48 object-cover rounded-lg"
    />
    
    <h3 className="mt-4 font-semibold text-gray-800">A etiam</h3>
    <div className="flex gap-2 -mt-3 ">
    <div className="text-pink-500 font-bold text-sm mt-5">
      <span className="text-gray-500 line-through mr-2 ">$56.00</span>
      <span>$32.00</span>
    </div>
    <div className="flex justify-center py-4">
      <StarRating rating={4} /> 
    </div>
  </div>
  </div>

  {/* Product 4 */}
  <div className="text-center">
    <img
      src="Rectangle 63 (3).png"
      alt="Mi nisi"
      className="w-full h-48 object-cover rounded-lg"
    />
   <h3 className="mt-4 font-semibold text-gray-800">A etiam</h3>
    <div className="flex gap-2 -mt-3 ">
    <div className="text-pink-500 font-bold text-sm mt-5">
      <span className="text-gray-500 line-through mr-2 ">$56.00</span>
      <span>$32.00</span>
    </div>
    <div className="flex justify-center py-4">
      <StarRating rating={4} /> 
    </div>
  </div>
  </div>
</div>
<div className="gap-6">
    <p className="text-gray-600 text-lg leading-relaxed  text-justify">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Velit dapibus est, nunc, 
    </p>
    <div className="py-2 mt-4">
    <p className="text-gray-600 text-lg  text-justify py-2 mt-4 ">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. Velit dapibus est, nunc, 
    </p>
    </div>
  </div>
{/* Follow Section */}
<div className="justify-items-center">
    
    <img src="icon.png" alt=""/>
  </div>


  <div className="justify-items-center py-5">
    
    <img src="Group 264.png" alt=""/>
  </div>


  <div className="min-h-screen bg-white-100 p-6 ">
          <div className="max-w-7xl mx-auto">
            {Blog_Single.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg mb-6 overflow-hidden w-[667.68px] h-[h-[137.16px]] "
              >
                {/* Product Image */}
                <div className=" md:w-2/5 ">
                  <img
                    src={product.image}
                    alt={product.title}
                    className=" px-10 py-4 "
                  />
                </div>
    
                {/* Product Content */}
                <div className="flex-1 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Title */}
                    <h2 className="text-[21px] font-bold text-blue-900">{product.title}</h2>
    <p className="px-16">Jan 09 2020</p>
                    {/* Colors */}
                    
                  </div>
    
                  
    
                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed">{product.description}</p>
    
                  
                </div>
              </div>
            ))}
          </div>
                  
    
  </div>
<div>

  <div className="bg-white max-w-4xl mx-auto p-6 -mt-36 shadow-md rounded-lg">
  
  <form className="space-y-6">
    {/* Name and Email Fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Your Name*"
        className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
        required
      />
      <input
        type="email"
        placeholder="Write Your Email*"
        className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
        required
      />
    </div>

    {/* Comment Field */}
    <textarea
  placeholder="Write Your Comment*"
  className="p-3 border border-gray-300 rounded-md w-full h-[250px] focus:outline-none focus:ring-2 focus:ring-pink-500"
   // Change this line to rows="6" or rows={`${6}`}
  required
></textarea>

    {/* Save Name/Email Option */}
    <div className="flex items-center space-x-2">
      <input type="checkbox" id="save-info" className="cursor-pointer" />
      <label htmlFor="save-info" className="text-gray-600 cursor-pointer">
        Save my name, email, and website in this browser for the next time I comment.
      </label>
    </div>

    {/* Submit Button */}
    <div className="justify-center px-64">
    <button
      type="submit"
      className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-all w-full md:w-auto "
    >
      Continue Shipping
    </button>
    </div>
  </form>
</div>
</div>
  </div>
  

  

  {/* Right Section */}
  <div>
    {/* Search */}
    <div className="mb-6">
      <h3 className="text-lg font-bold text-[#101750] mb-2">Search</h3>
      <input
        type="text"
        placeholder="Search For Posts"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="max-w-screen-md mx-auto p-6">
      {/* Categories Heading */}
      <h2 className="text-4xl font-bold text-[#101750] mb-8 ">
        Categories
      </h2>

    {/* Categories Grid */}
    <div className="grid grid-cols-2 md:grid-cols-2 gap-2 ">
        {/* Active Category */}
        <div className=" text-black bg-pink-500 w-[110px] font rounded-md py-1 cursor-pointer text-center">
          Hobbies (14)
        </div>

        {/* Inactive Categories */}
        <div className="text-[#101750] font cursor-pointer hover:text-pink-500 transition">
          Women (21)
        </div>
        <div className="text-[#101750] font cursor-pointer hover:text-pink-500 transition">
          Women (21)
        </div>
        <div className="text-[#101750] font cursor-pointer hover:text-pink-500 transition">
          Women (21)
        </div>
        <div className="text-[#101750] font cursor-pointer hover:text-pink-500 transition">
          Women (21)
        </div>
        <div className="text-[#101750] font cursor-pointer hover:text-pink-500 transition">
          Women (21)
        </div>
      </div>
      </div>

    {/* Recent Posts */}
    <div>
      <h3 className="text-lg font-bold text-[#101750] mb-4 py-1">Recent Post</h3>
      <div className="">
        {[1].map((post) => (
          <div key={post} className="flex items-center space-x-4">
            <img
              src="sideblog (4).png"
              alt="Post Thumbnail"
              className="w-16 h-16 rounded-lg object-cover py-2 "
            />
            <div>
              <p className="text-gray-800 font-semibold ">
                It is a long established fact
              </p>
              
              <span className="text-sm text-gray-500">Aug 09 2020</span>
            </div>
            
          </div>
        ))}
      </div>
      <div className="">
        {[1].map((post) => (
          <div key={post} className="flex items-center space-x-4">
            <img
              src="sideblog (3).png"
              alt="Post Thumbnail"
              className="w-16 h-16 rounded-lg object-cover py-2"
            />
            <div>
              <p className="text-gray-800 font-semibold">
                It is a long established fact
              </p>
              
              <span className="text-sm text-gray-500">Aug 09 2020</span>
            </div>
            
          </div>
        ))}
      </div>
      <div className="">
        {[1].map((post) => (
          <div key={post} className="flex items-center space-x-4">
            <img
              src="sideblog (2).png"
              alt="Post Thumbnail"
              className="w-16 h-16 rounded-lg object-cover py-2"
            />
            <div>
              <p className="text-gray-800 font-semibold">
                It is a long established fact
              </p>
              
              <span className="text-sm text-gray-500">Aug 09 2020</span>
            </div>
            
          </div>
        ))}
      </div>
      <div className="">
        {[1].map((post) => (
          <div key={post} className="flex items-center space-x-4 ">
            <img
              src="sideblog (1).png"
              alt="Post Thumbnail"
              className="w-16 h-16 rounded-lg object-cover py-2"
            />
            <div>
              <p className="text-gray-800 font-semibold">
                It is a long established fact
              </p>
              
              <span className="text-sm text-gray-500">Aug 09 2020</span>
            </div>
            
          </div>
        ))}
      </div>





      <h3 className="text-lg font-bold text-[#101750] mb- py-7">Sale Product</h3>
      <div className="">
        {[1].map((post) => (
          <div key={post} className="flex items-center space-x-4">
            <img
              src="blog (3).png"
              alt="Post Thumbnail"
              className="w-16 h-16 rounded-lg object-cover py-2"
            />
            <div>
              <p className="text-gray-800 font-semibold">
              Elit ornare in enim mauris.
              </p>
              <span className="text-sm text-gray-500">Aug 09 2020</span>
            </div>
          </div>
        ))}
      </div>
     
      <div className="">
        {[1].map((post) => (
          <div key={post} className="flex items-center space-x-4 ">
            <img
              src="blog (2).png"
              alt="Post Thumbnail"
              className="w-16 h-16 rounded-lg object-cover py-2"
            />
            <div>
              <p className="text-gray-800 font-semibold">
              Viverra pulvinar et enim.
              </p>
              <span className="text-sm text-gray-500">Aug 09 2020</span>
            </div>
          </div>
        ))}
      </div>



      <div className="">
        {[1].map((post) => (
          <div key={post} className="flex items-center space-x-4">
            <img
              src="blog (1).png"
              alt="Post Thumbnail"
              className="w-16 h-16 rounded-lg object-cover py-2"
            />
            <div>
              <p className="text-gray-800 font-semibold ">
              Mattis varius donec fdsfd
              </p>
              <span className="text-sm text-gray-500">Aug 09 2020</span>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-8">
  {/* Offer Product Section */}
  <div>
    <h3 className="text-xl font-bold text-[#101750] mb-4 py-7">Offer Product</h3>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <img src="prooffer (1).png" alt="Product 1" />
        <p className="font-semibold text-gray-700 mt-2">Duis lectus est.</p>
        <p className="text-gray-500 text-sm">$12.00 - $15.00</p>
      </div>
      <div>
        <img src="prooffer (4).png" alt="Product 2" />
        <p className="font-semibold text-gray-700 mt-2">Sed placerat.</p>
        <p className="text-gray-500 text-sm">$12.00 - $15.00</p>
      </div>
      <div>
        <img src="prooffer (2).png" alt="Product 3" />
        <p className="font-semibold text-gray-700 mt-2">Netus proin.</p>
        <p className="text-gray-500 text-sm">$12.00 - $15.00</p>
      </div>
      <div>
        <img src="prooffer (3).png" alt="Product 4" />
        <p className="font-semibold text-gray-700 mt-2">Platea in.</p>
        <p className="text-gray-500 text-sm">$12.00 - $15.00</p>
      </div>
    </div>
  </div>

  {/* Follow Section */}
  <div>
    <h3 className="text-xl font-bold text-[#101750] mb-4">Follow</h3>
    <img src="icon.png" alt=""/>
  </div>

  {/* Tags Section */}
  <div>
    <h3 className="text-xl font-bold text-[#101750] mb-4">Tags</h3>
    <div className="flex flex-wrap gap-2">
      <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer">
        General
      </span>
      <span className="bg-gray-200 text-pink-500 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer">
        Atsanil
      </span>
      <span className="bg-gray-200 text-blue-500 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer">
        Insas
      </span>
      <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer">
        Bibsaas
      </span>
      <span className="bg-gray-200 text-blue-400 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer">
        Nulla
      </span>
    </div>
  </div>
</div>
      
    </div>
  </div>
</div>
<div className="justify-items-center py-8 ">
    <img 
    src="image 1174.png"
    alt=""/>
  </div>
        </div>
    )
}