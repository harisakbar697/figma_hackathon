"use client"; // Ensures this is a Client Component

import { useState } from "react"; // Import useState for state management
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar
  const [searchQuery, setSearchQuery] = useState<string>(""); // Initialize searchQuery properly

  // Handle dropdown navigation
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    // Navigate based on selected value
    if (selectedValue === "shop") {
      router.push("/shop");
    } else if (selectedValue === "shoplist") {
      router.push("/shoplist");
    } else if (selectedValue === "shopleftsidebar") {
      router.push("/shop-left-sidebar");
    } else if (selectedValue === "home") {
      router.push("/home");
    } else if (selectedValue === "aboutus") {
      router.push("/about");
    } else if (selectedValue === "blog") {
      router.push("/blog");
    } else if (selectedValue === "blogsingle") {
      router.push("/blog-single");
    } else if (selectedValue === "Myaccount") {
      router.push("/Myaccount");
    }
     else if (selectedValue === "faqs") {
      router.push("/faqs");
    }
  };

  // Toggle Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Handle Search
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 py-2">
    <div className="flex space-x-4 text-white text-sm font-semibold mb-2 sm:mb-0">
      <div className="flex items-center space-x-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-lg"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
        </svg>
        <span>mhhasanul@gmail.com</span>
      </div>
      <div className="flex items-center space-x-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="text-lg"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24z"></path>
        </svg>
        <span>(12345)67890</span>
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="hidden sm:flex items-center space-x-2 text-white">
        <span>English</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
      </div>
      <div className="hidden sm:flex items-center space-x-2 text-white">
        <span>USD</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
      </div>
      <a className="flex items-center text-white space-x-2" href="/Myaccount">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
        </svg>
        <span>Log in</span>
      </a>
      <a className="flex items-center text-white space-x-2" href="/Product">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9z"></path>
        </svg>
        <span>Wishlist</span>
      </a>
      <a className="flex items-center text-white space-x-2" href="/pages">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        <span>Cart</span>
      </a>
    </div>
  </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo */}
            <h1 className="text-3xl font-serif">
              <Link href="/home">Hekto</Link>
            </h1>

           

            {/* Mobile Menu Button */}
            <button className="sm:hidden flex items-left" onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-black"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-black"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-6">
              <ul className="hidden lg:flex space-x-6 text-black font-semibold">
                <li className="hover:text-pink-500 cursor-pointer">
                  <select
                    onChange={handleSelectChange}
                    className="bg-transparent text-black cursor-pointer focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Home
                    </option>
                    <option value="home">Home</option>
                    <option value="aboutus">About Us</option>
                    <option value="Myaccount">My Account</option>
                    <option value="faqs">FAQS</option>
                  </select>
                </li>
                <li className="hover:text-pink-500 cursor-pointer">
                  <Link href="/pages">Pages</Link>
                </li>
                <li className="hover:text-pink-500 cursor-pointer">
                  <Link href="/product">Products</Link>
                </li>
                <li className="hover:text-pink-500 cursor-pointer">
                  <select
                    onChange={handleSelectChange}
                    className="bg-transparent text-black cursor-pointer focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Blog
                    </option>
                    <option value="blog">Blog</option>
                    <option value="blogsingle">Single Blog</option>
                  </select>
                </li>
                <li className="hover:text-pink-500 cursor-pointer">
                  <select
                    onChange={handleSelectChange}
                    className="bg-transparent text-black cursor-pointer focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Shop
                    </option>
                    <option value="shop">Shop</option>
                    <option value="shoplist">Shop List</option>
                    <option value="shopleftsidebar">Shop Left Sidebar</option>
                  </select>
                </li>
                <li className="hover:text-pink-500 cursor-pointer">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
              {/* Search Bar */}
              <div className="hidden sm:flex items-center space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-md p-2 text-sm w-64"
                placeholder="Search..."
              />
              <button
                onClick={handleSearch}
                className="bg-pink-500 text-white p-2 rounded flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-5 h-5"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

     

     {/* Mobile Sidebar */}
     {isSidebarOpen && (
        <div className="sm:hidden flex flex-col px-4 py-2 border-t bg-pink-500">
          <ul className="w-full text-left">
            <li>
              <a className="block py-2 text-white" href="/home">
                Home
              </a>
            </li>
            <li>
              <a className="block py-2 text-white" href="/pages">
                Pages
              </a>
            </li>
            <li>
              <a className="block py-2 text-white" href="/Myaccount">
                My Account
              </a>
            </li>
            <li>
              <a className="block py-2 text-white" href="/shoplist">
                Shoplist
              </a>
            </li>
            <li>
              <a className="block py-2 text-white" href="/faqs">
                FAQ
              </a>
            </li>
            <li>
              <a className="block py-2 text-white" href="/product">
                Product
              </a>
            </li>
            <li>
              <a className="block py-2 text-white" href="/blog">
                Blog
              </a>
            </li>
            <li>
              <a className="block py-2 text-white" href="/blog-single">
                Single Blog
              </a>
            </li>
            <li>
              <a className="block py-2 text-white" href="/shop">
                Shop
              </a>
            </li>
            <li>
              <a className="block py-2 text-white" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      
    </div>
  );
}






// "use client"; // Ensures this is a Client Component

// import { useState } from "react"; // Import useState for state management
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Navbar() {
//   const router = useRouter();
//   const [isSidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar
//   const [searchQuery, setSearchQuery] = useState(""); // State for search input

//   // Handle dropdown navigation
//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedValue = e.target.value;

//     // Navigate based on selected value
//     if (selectedValue === "shop") {
//       router.push("/shop");
//     } else if (selectedValue === "shoplist") {
//       router.push("/shoplist");
//     } else if (selectedValue === "shopleftsidebar") {
//       router.push("/shop-left-sidebar");
//     } else if (selectedValue === "home") {
//       router.push("/home");
//     } else if (selectedValue === "aboutus") {
//       router.push("/about");
//     } else if (selectedValue === "blog") {
//       router.push("/blog");
//     } else if (selectedValue === "blogsingle") {
//       router.push("/blog-single");
//     } else if (selectedValue === "Myaccount") {
//       router.push("/Myaccount");
//     }
//   };

//   // Toggle Sidebar
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   // Handle search
//   const handleSearch = () => {
//     if (searchQuery.trim() !== "") {
//       router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
//     }
//   };

//   return (
//     <div>
//       {/* Top Bar */}
//       <div className="bg-purple-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 py-2">
//             {/* Contact Info */}
//             <div className="flex space-x-4 text-white text-sm font-semibold mb-2 sm:mb-0">
//               <div className="flex items-center space-x-2">
//                 <span>mhhasanul@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <span>(12345)67890</span>
//               </div>
//             </div>
//             {/* Right Navigation */}
//             <div className="flex items-center space-x-4">
//               {/* Login */}
//               <a className="flex items-center text-white space-x-2" href="/login">
//                 <span>Log in</span>
//               </a>
//               {/* Wishlist */}
//               <a className="flex items-center text-white space-x-2" href="/Product">
//                 <span>Wishlist</span>
//               </a>
//               {/* Cart */}
//               <a className="flex items-center text-white space-x-2" href="/cart">
//                 <span>Cart</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Menu */}
//       <div className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Brand Logo */}
//             <h1 className="text-3xl font-serif">
//               <Link href="/home">Hekto</Link>
//             </h1>

//             {/* Search Bar */}
//             <div className="hidden sm:flex items-center space-x-2">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="border border-gray-300 rounded-md p-2 text-sm w-64"
//                 placeholder="Search..."
//               />
//               <button
//                 onClick={handleSearch}
//                 className="bg-pink-500 text-white p-2 rounded flex items-center"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 512 512"
//                   className="w-5 h-5"
//                 >
//                   <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
//                 </svg>
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button className="sm:hidden flex items-left" onClick={toggleSidebar}>
//               {isSidebarOpen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   className="w-6 h-6 text-black"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   className="w-6 h-6 text-black"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       {isSidebarOpen && (
//         <div className="sm:hidden flex flex-col px-4 py-2 border-t bg-pink-500">
//           <ul className="w-full text-left">
//             <li>
//               <a className="block py-2 text-white" href="/">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/HektoDemo">
//                 Pages
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/login">
//                 My Account
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/Shop">
//                 Shop Left Sidebar
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/Faq">
//                 FAQ
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/ProductDetail">
//                 Product
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/Blog">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/Shoplist">
//                 Shop
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/Contact">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }



// "use client"; // Ensures this is a Client Component

// import { useState } from "react"; // Import useState for state management
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Navbar() {
//   const router = useRouter();
//   const [isSidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar

//   // Handle dropdown navigation
//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedValue = e.target.value;

//     // Navigate based on selected value
//     if (selectedValue === "shop") {
//       router.push("/shop");
//     } else if (selectedValue === "shoplist") {
//       router.push("/shoplist");
//     } else if (selectedValue === "shopleftsidebar") {
//       router.push("/shop-left-sidebar");
//     } else if (selectedValue === "home") {
//       router.push("/home");
//     } else if (selectedValue === "aboutus") {
//       router.push("/about");
//     } else if (selectedValue === "blog") {
//       router.push("/blog");
//     } else if (selectedValue === "blogsingle") {
//       router.push("/blog-single");
//     } else if (selectedValue === "Myaccount") {
//       router.push("/Myaccount");
//     }
//   };

//   // Toggle Sidebar
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       {/* Top Bar */}
//       <div className="bg-purple-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 py-2">
//             {/* Contact Info */}
//             <div className="flex space-x-4 text-white text-sm font-semibold mb-2 sm:mb-0">
//               <div className="flex items-center space-x-2">
//                 <span>mhhasanul@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <span>(12345)67890</span>
//               </div>
//             </div>
//             {/* Right Navigation */}
//             <div className="flex items-center space-x-4">
//               {/* Login */}
//               <a className="flex items-center text-white space-x-2" href="/login">
//                 <span>Log in</span>
//               </a>
//               {/* Wishlist */}
//               <a className="flex items-center text-white space-x-2" href="/Product">
//                 <span>Wishlist</span>
//               </a>
//               {/* Cart */}
//               <a className="flex items-center text-white space-x-2" href="/cart">
//                 <span>Cart</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Menu */}
//       <div className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Brand Logo */}
//             <h1 className="text-3xl font-serif">
//               <Link href="/home">Hekto</Link>
//             </h1>

//             {/* Mobile Menu Button */}
//             <button className="sm:hidden flex items-left" onClick={toggleSidebar}>
//               {isSidebarOpen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   className="w-6 h-6 text-black"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   className="w-6 h-6 text-black"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//               )}
//             </button>

//             {/* Desktop Menu */}
//             <div className="hidden sm:flex space-x-6">
//               <ul className="hidden lg:flex space-x-8 text-black font-semibold">
//                 <li className="hover:text-pink-500 cursor-pointer">
//                   <select
//                     onChange={handleSelectChange}
//                     className="bg-transparent text-black cursor-pointer focus:outline-none"
//                     defaultValue=""
//                   >
//                     <option value="" disabled>
//                       Home
//                     </option>
//                     <option value="home">Home</option>
//                     <option value="aboutus">About Us</option>
//                     <option value="Myaccount">My Account</option>
//                   </select>
//                 </li>
//                 <li className="hover:text-pink-500 cursor-pointer">
//                   <Link href="/pages">Pages</Link>
//                 </li>
//                 <li className="hover:text-pink-500 cursor-pointer">
//                   <Link href="/product">Products</Link>
//                 </li>
//                 <li className="hover:text-pink-500 cursor-pointer">
//                   <select
//                     onChange={handleSelectChange}
//                     className="bg-transparent text-black cursor-pointer focus:outline-none"
//                     defaultValue=""
//                   >
//                     <option value="" disabled>
//                       Blog
//                     </option>
//                     <option value="blog">Blog</option>
//                     <option value="blogsingle">Single Blog</option>
//                   </select>
//                 </li>
//                 <li className="hover:text-pink-500 cursor-pointer">
//                   <select
//                     onChange={handleSelectChange}
//                     className="bg-transparent text-black cursor-pointer focus:outline-none"
//                     defaultValue=""
//                   >
//                     <option value="" disabled>
//                       Shop
//                     </option>
//                     <option value="shop">Shop</option>
//                     <option value="shoplist">Shop List</option>
//                     <option value="shopleftsidebar">Shop Left Sidebar</option>
//                   </select>
//                 </li>
//                 <li className="hover:text-pink-500 cursor-pointer">
//                   <Link href="/contact">Contact</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       {isSidebarOpen && (
//         <div className="sm:hidden flex flex-col px-4 py-2 border-t bg-pink-500">
//           <ul className="w-full text-left">
//             <li>
//               <a className="block py-2 text-white" href="/">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/HektoDemo">
//                 Pages
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/login">
//                 My Account
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/Shop">
//                 Shop Left Sidebar
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/Faq">
//                 FAQ
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/ProductDetail">
//                 Product
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/Blog">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/Shoplist">
//                 Shop
//               </a>
//             </li>
//             <li>
//               <a className="block py-2 text-white" href="/Contact">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }




// "use client"; // Ensures this is a Client Component

// import { useState } from "react"; // Import useState for state management
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Navbar() {
//   const router = useRouter();
//   const [isSidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar

//   // Handle dropdown navigation
//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedValue = e.target.value;

//     // Navigate based on selected value
//     if (selectedValue === "shop") {
//       router.push("/shop");
//     } else if (selectedValue === "shoplist") {
//       router.push("/shoplist");
//     } else if (selectedValue === "shopleftsidebar") {
//       router.push("/shop-left-sidebar");
//     } else if (selectedValue === "home") {
//       router.push("/home");
//     } else if (selectedValue === "aboutus") {
//       router.push("/about");
//     } else if (selectedValue === "blog") {
//       router.push("/blog");
//     } else if (selectedValue === "blogsingle") {
//       router.push("/blog-single");
//     } else if (selectedValue === "Myaccount") {
//       router.push("/Myaccount");
//     }
//   };

//   // Toggle Sidebar
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       <div className="bg-purple-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 py-2">
//             {/* Contact Info */}
//             <div className="flex space-x-4 text-white text-sm font-semibold mb-2 sm:mb-0">
//               {/* Contact and Email Info */}
//             </div>

//             {/* Right Navigation */}
//             <div className="flex items-center space-x-4">
//               {/* Add Login, Wishlist, Cart */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navbar */}
//       <div className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Brand Logo */}
//             <h1 className="text-3xl font-serif">Hekto</h1>

//             {/* Menu Items */}
//             <div className="hidden sm:flex space-x-6">
//             <ul className="hidden lg:flex space-x-8 text-black font-semibold">
//             <li className="hover:text-pink-500 cursor-pointer">
//               {/* Dropdown for Home options */}
//               <select
//                 onChange={handleSelectChange}
//                 className="bg-transparent text-black cursor-pointer focus:outline-none"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Home
//                 </option>
//                 <option value="home">Home</option>
//                 <option value="aboutus">About Us</option>
//                 <option value="Myaccount">My Account</option>
//               </select>
//             </li>
//             <li className="hover:text-pink-500 cursor-pointer">
//               <Link href="/pages">Pages</Link>
//             </li>
//             <li className="hover:text-pink-500 cursor-pointer">
//               <Link href="/product">Products</Link>
//             </li>
//             <li className="hover:text-pink-500 cursor-pointer">
//               {/* Dropdown for Blog options */}
//               <select
//                 onChange={handleSelectChange}
//                 className="bg-transparent text-black cursor-pointer focus:outline-none"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Blog
//                 </option>
//                 <option value="blog">Blog</option>
//                 <option value="blogsingle">Single Blog</option>
//               </select>
//             </li>
//             <li className="hover:text-pink-500 cursor-pointer">
//               {/* Dropdown for Shop options */}
//               <select
//                 onChange={handleSelectChange}
//                 className="bg-transparent text-black cursor-pointer focus:outline-none"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Shop
//                 </option>
//                 <option value="shop">Shop</option>
//                 <option value="shoplist">Shop List</option>
//                 <option value="shopleftsidebar">Shop Left Sidebar</option>
//               </select>
//             </li>
//             <li className="hover:text-pink-500 cursor-pointer">
//               <Link href="/contact">Contact</Link>
//             </li>
//           </ul>
//               {/* Add Menu Links */}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="sm:hidden flex items-left"
//               onClick={toggleSidebar} // Toggle sidebar on click
//             >
//               {isSidebarOpen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   className="w-6 h-6 text-black"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   className="w-6 h-6 text-black"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

        // {/* Mobile Sidebar */}
        // {isSidebarOpen && (
        //   <div className="sm:hidden flex flex-col px-4 py-2 border-t bg-pink-500">
        //     <ul className="w-full text-left">
        //       <li>
        //         <a className="block py-2 text-white" href="/">
        //           Home
        //         </a>
        //       </li>
        //       <li>
        //         <a className="block py-2 text-white" href="/HektoDemo">
        //           Pages
        //         </a>
        //       </li>
        //       <li>
        //         <a className="block py-2 text-white" href="/login">
        //           My Account
        //         </a>
        //       </li>
        //       <li>
        //         <a className="block py-2 text-white" href="/Shop">
        //           Shop Left Sidebar
        //         </a>
        //       </li>
        //       <li>
        //         <a className="block py-2 text-white" href="/Faq">
        //           FAQ
        //         </a>
        //       </li>
        //       <li>
        //         <a className="block py-2 text-white" href="/ProductDetail">
        //           Product
        //         </a>
        //       </li>
        //       <li>
        //         <a className="block py-2 text-white" href="/Blog">
        //           Blog
        //         </a>
        //       </li>
        //       <li>
        //         <a className="block py-2 text-white" href="/Shoplist">
        //           Shop
        //         </a>
        //       </li>
        //       <li>
        //         <a className="block py-2 text-white" href="/Contact">
        //           Contact
        //         </a>
        //       </li>
        //     </ul>
        //   </div>
//         )}
//       </div>
//     </div>
//   );
// }















// {/* <div className="bg-white shadow-md">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex items-center justify-between h-16">
//       {/* Brand Logo */}
//       <h1 className="text-3xl font-serif">Hekto</h1>

//       {/* <!-- Menu Items --> */}
//       <div className="hidden sm:flex space-x-6">
//           <ul className="hidden lg:flex space-x-8 text-black font-semibold">
//             <li className="hover:text-pink-500 cursor-pointer">
//               {/* Dropdown for Home options */}
//               <select
//                 onChange={handleSelectChange}
//                 className="bg-transparent text-black cursor-pointer focus:outline-none"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Home
//                 </option>
//                 <option value="home">Home</option>
//                 <option value="aboutus">About Us</option>
//                 <option value="Myaccount">My Account</option>
//               </select>
//             </li>
//             <li className="hover:text-pink-500 cursor-pointer">
//               <Link href="/pages">Pages</Link>
//             </li>
//             <li className="hover:text-pink-500 cursor-pointer">
//               <Link href="/product">Products</Link>
//             </li>
//             <li className="hover:text-pink-500 cursor-pointer">
//               {/* Dropdown for Blog options */}
//               <select
//                 onChange={handleSelectChange}
//                 className="bg-transparent text-black cursor-pointer focus:outline-none"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Blog
//                 </option>
//                 <option value="blog">Blog</option>
//                 <option value="blogsingle">Single Blog</option>
//               </select>
//             </li>
//             <li className="hover:text-pink-500 cursor-pointer">
//               {/* Dropdown for Shop options */}
//               <select
//                 onChange={handleSelectChange}
//                 className="bg-transparent text-black cursor-pointer focus:outline-none"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Shop
//                 </option>
//                 <option value="shop">Shop</option>
//                 <option value="shoplist">Shop List</option>
//                 <option value="shopleftsidebar">Shop Left Sidebar</option>
//               </select>
//             </li>
//             <li className="hover:text-pink-500 cursor-pointer">
//               <Link href="/contact">Contact</Link>
//             </li>
//           </ul>
// </div>

//       {/* Search Bar */}
//       <div className="hidden sm:flex items-center">
//         <input
//           type="text"
//           className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
//           placeholder="Search..."
//         />
//         <button className="ml-2 bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition">
//           <svg
//             stroke="currentColor"
//             fill="currentColor"
//             strokeWidth="0"
//             viewBox="0 0 512 512"
//             height="1em"
//             width="1em"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu Button */}
//       <button className="sm:hidden flex items-left">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           stroke="currentColor"
//           aria-hidden="true"
//           className="w-6 h-6 text-black"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </button>
//     </div>
//   </div>

//   {/* Mobile Navigation */}
//   <div className="sm:hidden flex flex-col px-4 py-2 border-t bg-pink-500">
//     <ul className="w-full text-left">
//       <li><a className="block py-2 text-white" href="/">Home</a></li>
//       <li><a className="block py-2 text-white" href="/HektoDemo">Pages</a></li>
//       <li><a className="block py-2 text-white" href="/login">My Account</a></li>
//       <li><a className="block py-2 text-white" href="/Shop">Shop Left Sidebar</a></li>
//       <li><a className="block py-2 text-white" href="/Faq">FAQ</a></li>
//       <li><a className="block py-2 text-white" href="/ProductDetail">Product</a></li>
//       <li><a className="block py-2 text-white" href="/Blog">Blog</a></li>
//       <li><a className="block py-2 text-white" href="/Shoplist">Shop</a></li>
//       <li><a className="block py-2 text-white" href="/Contact">Contact</a></li>
//     </ul>
//   </div>
// </div> */}
