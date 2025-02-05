// "use client"; // Ensures Client Component in Next.js App Router

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

const ProductDetail = () => {
  return (
    <div className="py-10 ">
    <div className="max-w-7xl mx-auto px-8 py-10 bg-gray-50 rounded-lg shadow-lg flex flex-col md:flex-row gap-8 w-[1170px] h-[400px]">
      {/* Left Section: Image Gallery */}
<div className="md:w-1/3 flex gap-4">
  {/* Thumbnails - Vertical */}
  <div className="flex flex-col gap-5">
    <img
      src="Rectangle 134.png"
      alt="Thumbnail 1"
      className="w-24 h-24 rounded-lg object-cover cursor-pointer hover:opacity-75"
    />
    <img
      src="Rectangle 136.png"
      alt="Thumbnail 2"
      className="w-24 h-24 rounded-lg object-cover cursor-pointer hover:opacity-75"
    />
    <img
      src="Rectangle 137.png"
      alt="Thumbnail 3"
      className="w-24 h-24 rounded-lg object-cover cursor-pointer hover:opacity-75"
    />
  </div>

  {/* Main Image */}
  <div className="flex-1">
    <img
      src="Rectangle 138.png"
      alt="Main Product"
      className="rounded-lg w-full h-[330px] object-cover"
    />
  </div>
</div>

      {/* Right Section: Product Details */}
      <div className="md:w-2/3">
        {/* Product Title */}
        <h1 className="text-4xl font-bold text-[#101750] mb-2">
          Playwood arm chair
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <StarRating rating={4} /> {/* Pass the rating dynamically here */}
          <span className="text-gray-500 text-sm">(22 Reviews)</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-xl font-bold text-gray-800">$32.00</span>
          <span className="text-xl text-gray-400 line-through ml-4">$42.00</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 -mb- leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
          porttitor purus, et volutpat sit. Duis bibendum, lectus id posuere
          blandit.
        </p>

        {/* Add to Cart */}
        <button className="bg-[#101750] text-white px-6 py-3 rounded-lg hover:bg-[#0c123e] transition mt-1">
          Add To Cart
        </button>

        {/* Categories and Tags */}
        <div className="mt-4">
          <p className="font text-gray-700">Categories:</p>
          
        </div>
        <div className="">
          <p className="font text-gray-700">Tags:</p>
          
        </div>

        {/* Social Share */}
        <div className="flex items-center gap-4 ">
          <p className="font text-gray-700">Share:</p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Facebook
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700">
            Instagram
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            Twitter
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;
