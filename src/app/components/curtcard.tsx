"use client";
import React from "react";
import { useRouter } from "next/navigation"; // For Next.js App Router

const cartItems = [
  { id: 1, name: "Ut diam consequat", color: "Brown", size: "XL", price: "$32.00", total: "£219.00", image: "Rectangle 34 (1).png" },
  { id: 2, name: "Vel faucibus posuere", color: "Brown", size: "XL", price: "$32.00", total: "£219.00", image: "Rectangle 35.png" },
  { id: 3, name: "Ac vitae vestibulum", color: "Brown", size: "XL", price: "$32.00", total: "£219.00", image: "/Rectangle 36.png" },
  { id: 4, name: "Elit massa diam", color: "Brown", size: "XL", price: "$32.00", total: "£219.00", image: "Rectangle 37.png" },
  { id: 5, name: "Proin pharetra elementum", color: "Brown", size: "XL", price: "$32.00", total: "£219.00", image: "Rectangle 38.png" },
];

const ShoppingCart = () => {
  const router = useRouter(); // Initialize Next.js router

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Table */}
        <div className="lg:col-span-2">
          <table className="w-full border-collapse ">
            <thead>
              <tr className="text-left font-bold text-[#101750] border-b">
                <th className="py-4">Product</th>
                <th className="py-4">Price</th>
                <th className="py-4">Quantity</th>
                <th className="py-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500 text-sm">Color: {item.color}</p>
                      <p className="text-gray-500 text-sm">Size: {item.size}</p>
                    </div>
                  </td>
                  <td className="py-4 text-left w-1/6 text-sm">{item.price}</td>
                  <td className="py-4 text-left w-1/6 text-sm">
                    <div className="flex items-center">
                      <button className="border px-2 text-gray-600 hover:bg-gray-200">-</button>
                      <input
                        type="text"
                        value="1"
                        readOnly
                        className="w-12 text-center border"
                      />
                      <button className="border px-2 text-gray-600 hover:bg-gray-200">+</button>
                    </div>
                  </td>
                  <td className="py-4 text-left w-1/6 text-sm">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between mt-6">
            <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
              Update Cart
            </button>
            <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="space-y-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#101750] mb-4">Cart Totals</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotals:</span>
              <span>£219.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Totals:</span>
              <span>£325.00</span>
            </div>
            <button
              className="bg-green-500 text-white w-full py-3 rounded hover:bg-green-600"
              onClick={() => router.push("/order_completed")} // Navigate to the Order Completed page
            >
              Proceed To Checkout
            </button>
          </div>

          {/* Shipping */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#101750] mb-4">Calculate Shipping</h3>
            <input
              type="text"
              placeholder="Bangladesh"
              className="w-full mb-4 px-4 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Mirpur Dhaka - 1200"
              className="w-full mb-4 px-4 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full mb-4 px-4 py-2 border rounded"
            />
            <button className="bg-pink-500 text-white w-full py-3 rounded hover:bg-pink-600">
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
