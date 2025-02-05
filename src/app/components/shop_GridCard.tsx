export default function Shop_GridCard(){
        const products = [
          { id: 1, title: "Vel elit euismod", price: "26.00", oldPrice: "42.00", image: "gridimage (1).png" },
          { id: 2, title: "Ultricies condimentum imperdiet", price: "26.00", oldPrice: "42.00", image: "image 1165.png" },
          { id: 3, title: "Vitae suspendisse sed", price: "26.00", oldPrice: "42.00", image: "gridimage (10).png" },
          { id: 4, title: "Sed at fermentum", price: "26.00", oldPrice: "42.00", image: "gridimage (2).png" },
          { id: 5, title: "Fusce pellentesque at", price: "26.00", oldPrice: "42.00", image: "gridimage (8).png" },
          { id: 6, title: "Vestibulum magna laoreet", price: "26.00", oldPrice: "42.00", image: "gridimage (7).png" },
          { id: 7, title: "Sollicitudin amet orci", price: "26.00", oldPrice: "42.00", image: "gridimage (6).png" },
          { id: 8, title: "Ultrices mauris sit", price: "26.00", oldPrice: "42.00", image: "gridimage (5).png" },
          { id: 9, title: "Pellentesque condimentum ac", price: "26.00", oldPrice: "42.00", image: "gridimage (4).png" },
          { id: 10, title: "Cras scelerisque velit", price: "26.00", oldPrice: "42.00", image: "cam 2.png" },
          { id: 11, title: "Lectus vulputate faucibus", price: "26.00", oldPrice: "42.00", image: "gridimage (3).png" },
          { id: 12, title: "Purus risus, ut", price: "26.00", oldPrice: "42.00", image: "gridimage (2).png" },
        ];
      
        return (
          <div className="bg-white-50 min-h-screen p-6">
      
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-270px h-280px object-cover rounded-lg mb-4 px-12 "
                  />
                  <h3 className="text-lg font-semibold text-center text-gray-800">{product.title}</h3>
                  <div className="flex justify-center items-center space-x-2 mt-2">
                    <span className="text-blue-900 text-lg font-bold">${product.price}</span>
                    <span className="text-gray-400 line-through">${product.oldPrice}</span>
                  </div>
                  <div className="flex justify-center space-x-2 mt-4">
                    <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-purple-700 rounded-full"></span>
                  </div>
                </div>
              ))}
            </div>
            <div className="justify-items-center py-10">
    <img 
    src="image 1174.png"
    alt=""/>
  </div>
          </div>
        );
      }
      