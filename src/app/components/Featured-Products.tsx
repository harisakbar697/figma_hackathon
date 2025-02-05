
export default function Featured_Products() {
const Featured_Products = [
{
    id: 2,
    name: "Cantilever chair",
    code:"Code - Y523201",
    price: "$42.00",
image: "chair2.png",

},
{
id: 2,
name: "Cantilever chair",
code:"Code - Y523201",
price: "$42.00",
image: "chair3.png",

},
{
id: 3,
name: "Cantilever chair",
code:"Code - Y523201",
price: "$42.00",
image: "chair.png",
},
{
    id: 4,
    
name: "Cantilever chair",
code:"Code - Y523201",
price: "$42.00",
    image: "chair4.png",

    },
    


];

return (
    <div className="bg-white py-8 text-black">
    <div className="container mx-auto">
    {/* first section */}
    <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border-gray-800 ">
    {Featured_Products.map((product) => (
    <div key={product.id}
    >
        
    {/* Image Section */}
    <div className="mb-0">
    <img
    className="w-full h-[350] object-cover border border-gray-300  p-6 text-center shadow-lg "
      
    src={product.image}
    alt={product.name}
    />
    </div>
    {/* Details Section */}
    

    <div className="bg-white p-4 object-cover border border-gray-300 text-center shadow-lg">
    <h3 className="font-bold text-lg text-pink-700 ">{product.name}</h3>
    <p className="text-2xl font-bold text-blue-950">{product.code}</p>


    <p className="text-2xl font-bold text-blue-950">{product.price}</p>
    
    </div>
    </div>
    ))}
    </div>
    </div>
    <div className="bg-gray-50 py-10">



    </div>
    </div>
);
}


{/* <div>
<section className="py-12 mt-12">
    <h2 className="text-3xl font-bold text-center mb-8">Featured Products
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 lg:px-30">
            <div className="p-4 rounded-lg shadow-md bg-white relative overflow-hidden">
                <div className="relative w-full h-40 mb-4"><img src="chair2.png" alt="Cantilever chair" loading="lazy" decoding="async" data-nimg="fill" />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">Cantilever chair
                        </h3>
                        <div className="flex justify-center gap-1 my-2">
                            <div className="w-4 h-1 bg-green-500 rounded">
                                </div>
                                <div className="w-4 h-1 bg-pink-500 rounded">
                                    </div>
                                    <div className="w-4 h-1 bg-blue-500 rounded">
                                        </div>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Code - Y523201
                                            </p>
                                            <p className="text-lg font-bold text-gray-800">$42.00</p>
                                            </div>
                                            </div>
                                            <div className="p-4 rounded-lg shadow-md bg-white relative overflow-hidden">
                                                <div className="flex justify-end top-4 right-4 gap-2 text-blue-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5 cursor-pointer hover:text-blue-700"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                                        </path></svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5 cursor-pointer hover:text-blue-700"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                                            </path></svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5 cursor-pointer hover:text-blue-700"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                                                                </path></svg>
                                                                </div>
                                                                <div className="relative w-full h-40 mb-4">
                                                                    <img src="chair3.png" alt="Cantilever chair" loading="lazy" decoding="async" data-nimg="fill" />
                                                                    </div>
                                                                    <button className="w-32 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600">View Details
                                                                        </button>
                                                                        <div className="text-center mt-2 bg-blue-700 space-y-2 p-4">
                                                                            <h3 className="text-lg font-semibold text-white">Cantilever chair</h3>
                                                                            <div className="flex justify-center gap-1 my-2">
                                                                                <div className="w-4 h-1 bg-green-500 rounded">
                                                                                    </div>
                                                                                    <div className="w-4 h-1 bg-pink-500 rounded">
                                                                                        </div>
                                                                                        <div className="w-4 h-1 bg-blue-500 rounded">
                                                                                            </div>
                                                                                            </div>
                                                                                            <p className="text-sm text-white">Code - Y523202</p>
                                                                                            <p className="text-lg font-bold text-white">$42.00</p>
                                                                                            </div></div><div className="p-4 rounded-lg shadow-md bg-white relative overflow-hidden">
                                                                                                <div className="relative w-full h-40 mb-4">
                                                                                                    <img src="chair.png" alt="Cantilever chair" loading="lazy" decoding="async" data-nimg="fill" />
                                                                                                    </div>
                                                                                                    <div className="text-center space-y-2">
                                                                                                        <h3 className="text-lg font-semibold text-gray-800">Cantilever chair</h3>
                                                                                                        <div className="flex justify-center gap-1 my-2">
                                                                                                            <div className="w-4 h-1 bg-green-500 rounded"></div>
                                                                                                            <div className="w-4 h-1 bg-pink-500 rounded"></div>
                                                                                                            <div className="w-4 h-1 bg-blue-500 rounded">
                                                                                                                </div>
                                                                                                                </div>
                                                                                                                <p className="text-sm text-gray-500">Code - Y523203
                                                                                                                    </p>
                                                                                                                    <p className="text-lg font-bold text-gray-800">$42.00</p>
                                                                                                                    </div>
                                                                                                                    </div>
                                                                                                                    <div className="p-4 rounded-lg shadow-md bg-white relative overflow-hidden">
                                                                                                                        <div className="relative w-full h-40 mb-4">
                                                                                                                            <img src="chair4.png" alt="Cantilever chair" loading="lazy" decoding="async" data-nimg="fill" />
                                                                                                                            </div>
                                                                                                                            <div className="text-center space-y-2">
                                                                                                                                <h3 className="text-lg font-semibold text-gray-800">Cantilever chair</h3>
                                                                                                                                <div className="flex justify-center gap-1 my-2">
                                                                                                                                    <div className="w-4 h-1 bg-green-500 rounded">
                                                                                                                                        </div>
                                                                                                                                        <div className="w-4 h-1 bg-pink-500 rounded">
                                                                                                                                            </div>
                                                                                                                                            <div className="w-4 h-1 bg-blue-500 rounded">
                                                                                                                                                </div>
                                                                                                                                                </div>
                                                                                                                                                <p className="text-sm text-gray-500">Code - Y523204</p>
                                                                                                                                                <p className="text-lg font-bold text-gray-800">$42.00</p>
 </div>
</div>
 </div>
   </section>
    </div> */}