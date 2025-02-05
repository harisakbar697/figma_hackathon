import React from "react";
export default function Shop_list_card() {
const Shop_list_card = [
    {
        id: 1,
        image: "Rectangle 32.png",
        title: "Accumsan tincidunt",
        price: "26.00",
        oldPrice: "52.00",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing.",
        colors: ["bg-pink-500", "bg-orange-500", "bg-purple-700"],
      },
      {
        id: 2,
        image: "Rectangle 32 (1).png",
        title: "In nulla",
        price: "26.00",
        oldPrice: "52.00",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing.",
        colors: ["bg-green-500", "bg-yellow-500", "bg-blue-700"],
      },
      {
        id: 3,
        image: "Rectangle 32 (3).png",
        title: "Vel sem",
        price: "26.00",
        oldPrice: "52.00",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing.",
        colors: ["bg-red-500", "bg-gray-500", "bg-indigo-700"],
      },
      {
        id: 4,
        image: "Rectangle 32 (2).png",
        title: "Porttitor cum",
        price: "26.00",
        oldPrice: "52.00",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing.",
        colors: ["bg-red-500", "bg-gray-500", "bg-indigo-700"],
      },
      {
        id: 5,
        image: "Rectangle 32 (4).png",
        title: "Nunc in",
        price: "26.00",
        oldPrice: "52.00",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing.",
        colors: ["bg-red-500", "bg-gray-500", "bg-indigo-700"],
      },
      {
        id: 6,
        image: "Rectangle 32 (5).png",
        title: "Vitae facilisis",
        price: "26.00",
        oldPrice: "52.00",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing.",
        colors: ["bg-red-500", "bg-gray-500", "bg-indigo-700"],
      },
      {
        id: 7,
        image: "Rectangle 32 (6).png",
        title: "Curabitur lectus",
        price: "26.00",
        oldPrice: "52.00",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing.",
        colors: ["bg-red-500", "bg-gray-500", "bg-indigo-700"],
      },
    ];


    return (
        <div className="min-h-screen bg-white-100 p-6 ">
          <div className="max-w-7xl mx-auto">
            {Shop_list_card.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg mb-6 overflow-hidden w-[1141px] h-[254px] "
              >
                {/* Product Image */}
                <div className="w-full md:w-2/5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
    
                {/* Product Content */}
                <div className="flex-1 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-blue-900">{product.title}</h2>
    
                    {/* Colors */}
                    <div className="flex space-x-2">
                      {product.colors.map((color, index) => (
                        <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
                      ))}
                    </div>
                  </div>
    
                  {/* Pricing and Ratings */}
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold text-blue-900">${product.price}</span>
                    <span className="text-lg text-pink-500 line-through">${product.oldPrice}</span>
                    <div className="flex text-yellow-500">⭐⭐⭐⭐☆</div>
                  </div>
    
                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed">{product.description}</p>
    
                  {/* Buttons */}
                  <div className="flex items-center space-x-6">
                    <button
                      className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-blue-100 transition"
                      title="Add to Cart"
                    >
                      🛒
                    </button>
                    <button
                      className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-blue-100 transition"
                      title="Add to Wishlist"
                    >
                      ❤️
                    </button>
                    <button
                      className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-blue-100 transition"
                      title="View Details"
                    >
                      🔍
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="justify-items-center py-8 ">
    <img 
    src="image 1174.png"
    alt=""/>
  </div>
        </div>
      );
    }
    

// return (
//     return (
//         <div className="max-w-7xl mx-auto p-4">
//           <h1 className="text-3xl font-bold mb-6 text-gray-800">Product List</h1>
//           <div className="space-y-6">
//             {Shop_list_card.map((product) => (
//            <div
//            key={product.id}
//            className="flex items-start p-4 space-x-6 border-b border-gray-200 bg-white rounded-lg shadow-sm"
//          >
//             {/* Product Image */}
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-48 object-cover rounded-lg"
//             />

//             {/* Title and Colors */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-bold text-blue-900">{product.title}</h2>
//               <div className="flex space-x-2">
//                 {product.colors.map((color, index) => (
//                   <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
//                 ))}
//               </div>
//             </div>

//             {/* Pricing */}
//             <div className="flex items-center space-x-4">
//               <span className="text-xl font-semibold text-blue-900">${product.price}</span>
//               <span className="text-xl text-pink-500 line-through">${product.oldPrice}</span>
//               <div className="flex">⭐⭐⭐⭐☆</div>
//             </div>

//             {/* Description */}
//             <p className="text-gray-500 text-[17px] leading-[30px] font-[400]">
//               {product.description}
//             </p>

//             {/* Buttons */}
//             <div className="flex justify-around mt-4">
//               <button
//                 className="p-3 bg-gray-100 rounded-full shadow hover:bg-blue-100 transition"
//                 title="Add to Cart"
//               >
//                 🛒
//               </button>
//               <button
//                 className="p-3 bg-gray-100 rounded-full shadow hover:bg-blue-100 transition"
//                 title="Add to Wishlist"
//               >
//                 ❤️
//               </button>
//               <button
//                 className="p-3 bg-gray-100 rounded-full shadow hover:bg-blue-100 transition"
//                 title="View Details"
//               >
//                 🔍
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
