export default function Latest_Update(){
    return(
        <div>
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
  {/* <!-- Background Image --> */}
  <img
    src="LatestUpdate.png"
    alt="Newsletter Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* <!-- Overlay (Optional for better visibility) --> */}
  <div className="absolute inset-0 bg-black opacity-10"></div>

  {/* <!-- Content --> */}
  <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#151875] mb-4 ">
    Get Leatest Update By Subscribe <br/>0ur Newslater    </h2>
    
    <button
      className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-pink-600"
    >
      Shop Now
    </button>
  </div>
  

</div>
<div className="justify-items-center py-8">
    <img 
    src="image 1174.png"
    alt=""/>
  </div>

        </div>
    )
}