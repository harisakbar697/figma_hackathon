import ProductDetail from "./product_detailscard";
import RelatedProducts from "./related_product";

export default function Product_Details(){
    return(
        <div>
            <div className="bg-purple-100 py-6 w-full ">
         <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-indigo-900">Product Details</h1>
            <div className="text-sm text-black flex gap-3 ">
            <ul>Home</ul>
            <li>Pages</li>
            <li className="text-pink-500">Product Details</li>
            </div>
            </div>
        </div>
        {/* Use the ProductDetail Component */}
      <ProductDetail />
      <div className="relative bg-purple-100 py-10 px-4 w-[1350px] h-[580px]">
        <div className="flex  gap-44 text-2xl font-bold px-24 py-4">
        <ul className="font-bold underline">Description</ul>
        <ul>Additional Info</ul>
        <ul>Reviews</ul>
        <ul>Video</ul>
        </div>
        <div className="px-24 py-24 justify-center">
        <h2 className="text-xl font-bold text-gray-800 mb-5 ">Varius tempor.</h2>
        <p className="text-gray-600 text-md text-align">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed
          et eleifend habitasse amet. Montes, mauris varius ac est bibendum.<br/> Scelerisque a, risus ac
          ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat
          laoreet diam tincidunt.<br/> Magna eget faucibus cras justo, tortor sed donec tempus.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">More details</h3>
        <ul className="text-gray-600 space-y-2 text-md">
          <li>➡ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
          <li>➡ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
          <li>➡ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
          <li>➡ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
        </ul>
      </div>
      </div>
      <RelatedProducts/>  
        </div>
    )
}