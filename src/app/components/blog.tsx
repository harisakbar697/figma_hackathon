export default function Blog_Post(){
    return(
        <div>
            <div className="bg-white py-16">
  <div className="container mx-auto px-4">
    {/* <!-- Section Title --> */}
    <h2 className="text-4xl font-extrabold text-center text-[#151875] mb-12">
      Leatest Blog
    </h2>

    {/* <!-- Blog Cards --> */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* <!-- Blog Card 1 --> */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="blog (3).png"
          alt="Blog Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="text-pink-500 mr-2">✍ SaberAli</span>
            <span className="text-yellow-500">📅 21 August, 2020</span>
          </div>
          <h3 className="text-lg font-extrabold text-[#151875] mb-2">
            Top esssential Trends in 2021
          </h3>
          <p className="text-gray-600 mb-4">
            More off this less hello samlande lied much over tightly circa horse taped mighty
          </p>
          <a
            href="#"
            className="text-pink-500 font-semibold hover:underline"
          >
            Read More
          </a>
        </div>
      </div>

      {/* <!-- Blog Card 2 --> */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="blog (2).png"
          alt="Blog Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="text-pink-500 mr-2">✍ Surfauxion</span>
            <span className="text-yellow-500">📅 21 August, 2020</span>
          </div>
          <h3 className="text-lg font-extrabold text-pink-500 mb-2">
            Top essential trends in 2021
          </h3>
          <p className="text-gray-600 mb-4">
            More off this less hello samlande lied much over tightly circa horse taped mighty
          </p>
          <a
            href="#"
            className="text-pink-500 font-semibold hover:underline"
          >
            Read More
          </a>
        </div>
      </div>

      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="blog (1).png"
          alt="Blog Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="text-pink-500 mr-2">✍ SaberAli</span>
            <span className="text-yellow-500">📅 21 August, 2020</span>
          </div>
          <h3 className="text-lg font-extrabold text-[#151875] mb-2">
            Top esssential Trends in 2021
          </h3>
          <p className="text-gray-600 mb-4">
            More off this less hello samlande lied much over tightly circa horse taped mighty
          </p>
          <a
            href="#"
            className="text-pink-500 font-semibold hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}