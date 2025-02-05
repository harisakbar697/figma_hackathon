import React from "react";

interface Product {
id: number;
name: string;
price: string;
image: string;

}

interface ProductCardProps {
product: Product; // Explicitly define the type for the product prop
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
return (
<div>
{/* Image Section */}
<div className="mb-4">
<img
className="w-[360px] h-[306px] object-cover rounded-3xl border  bg-slate-100 p-10"
src={product.image}
alt={product.name}
/>
</div>

{/* Details Section */}
<div className="mt-4">

<h3 className="text-base md:text-lg font-semibold text-blue-800">{product.name}</h3>

<span className="text-blue-800 text-sm md:text-base font-bold">{product.price}</span>
<span className="text-red-500 text-sm md:text-base line-through">65.00
            </span>
</div>
</div>
);
};

export default ProductCard;


{/* <div class="mt-4"><h3 class="text-base md:text-lg font-semibold text-blue-800">Comfort Handy Craft</h3>
<div class="flex items-center justify-center space-x-2 mt-2">
    <span class="text-blue-800 text-sm md:text-base font-bold">
        42.00</span>
        <span class="text-red-500 text-sm md:text-base line-through">65.00
            </span>
            </div>
            </div> */}