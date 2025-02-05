export default function Blog_Page(){
    return(
        <div>
             <div className="bg-purple-100 py-6 w-full ">
         <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-indigo-900">Blog Page</h1>
            <div className="text-sm text-black flex gap-3 ">
            <ul>Home</ul>
            <li>Pages</li>
            <li className="text-pink-500"> Blog Page </li>
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
    <a href="#" className="text-pink-500 font-semibold">
      Read More →
    </a>
    


    <img
      src="blogmain2.png"
      alt="Blog Post"
      className="w-full rounded-lg mb-6 py-4"
    />
    <div className="flex items-center space-x-4 text-gray-500 mb-4">
      <span>✒️ Surf Auxion</span>
      <span>📅 Aug 09 2020</span>
    </div>
    <h1 className="text-3xl font-bold text-[#101750] mb-4">
    Aenean vitae in aliquam ultrices lectus. Etiam.
        </h1>
    <p className="text-gray-600 leading-relaxed mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
    </p>
    <a href="#" className="text-pink-500 font-semibold">
      Read More →
    </a>




    <img
      src="blogmain3.png"
      alt="Blog Post"
      className="w-full rounded-lg mb-6"
    />
    <div className="flex items-center space-x-4 text-gray-500 mb-4">
      <span>✒️ Surf Auxion</span>
      <span>📅 Aug 09 2020</span>
    </div>
    <h1 className="text-3xl font-bold text-[#101750] mb-4">
    Sit nam congue feugiat nisl, mauris amet nisi.     </h1>
    <p className="text-gray-600 leading-relaxed mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
    </p>
    <a href="#" className="text-pink-500 font-semibold">
      Read More →
    </a>
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