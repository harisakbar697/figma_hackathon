import React from "react";

interface StarRatingProps {
  rating: number;
  maxStars?: number; // Optional with a default value
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  return (
    <div className="flex text-yellow-400">
      {Array.from({ length: maxStars }, (_, index) => (
        <span key={index} className="text-2xl">
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};





export default function RelatedProducts() {
    const RelatedProducts = [
      {
        id: 1,
        image: "RELATED PRODUCT (4).png",
        title: "Mens Fashion Wear",
        price: "$43.00",
        rating: 5,
      },
      {
        id: 2,
        image: "RELATED PRODUCT (3).png",
        title: "Women's Fashion",
        price: "$67.00",
        rating: 4.5,
      },
      {
        id: 3,
        image: "RELATED PRODUCT (2).png",
        title: "Wolx Dummy Fashion",
        price: "$67.00",
        rating: 5,
      },
      {
        id: 4,
        image: "RELATED PRODUCT (1).png",
        title: "Top Wall Digital Clock",
        price: "$51.00",
        rating: 4.5,
      },
    ];
  
    return (
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Related Products
        </h2>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {RelatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="P object-cover rounded-md"
              />
  
              {/* Product Info */}
              <div className="mt-4 text-center ">
                <h3 className="text-[13px] font-semibold text-gray-800 flex">
                  {product.title}
                </h3>
                <div className="pl-10">
                <div className="text-yellow-500 px-32 -mt-7">
                     <StarRating rating={4} /> 
                     </div>
                </div>
                
              </div>
              <div>
                <p className="text-blue-600 font-semibold mt-2 text-sm">{product.price}</p>
              
              </div>
            </div>
          ))}
        </div>
        <div className="justify-items-center py-12">
    <img 
    src="image 1174.png"
    alt=""/>
  </div>
      </div>
    );
  }