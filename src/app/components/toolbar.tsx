

const Toolbar = () => {
  return (
    <div className="bg-gray-50 py-8 px-6">
      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-900">
          Ecommerce Accessories & Fashion item
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          About 9,620 results (0.62 seconds)
        </p>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col md:flex-row justify-between items-center ">
        {/* Per Page Input */}
        <div className="flex items-center gap-2">
          <label htmlFor="per-page" className="text-gray-700 font-medium">
            Per Page:
          </label>
          <input
            id="per-page"
            type="number"
            placeholder="10"
            className="w-16 h-8 border border-gray-300 rounded-md px-2 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-gray-700 font-medium">
            Sort By:
          </label>
          <select
            id="sort"
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            <option>Best Match</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* View Icons */}
        <div className="flex items-center gap-2">
          <label className="text-gray-700 font-medium">View:</label>
          <button className="p-2 rounded border border-gray-300 hover:bg-indigo-100">
            {/* Grid Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-indigo-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 6.75h4.5v4.5H4.5V6.75zM4.5 12.75h4.5v4.5H4.5v-4.5zM9.75 6.75h4.5v4.5h-4.5V6.75zM9.75 12.75h4.5v4.5h-4.5v-4.5zM15 6.75h4.5v4.5H15V6.75zM15 12.75h4.5v4.5H15v-4.5z"
              />
            </svg>
          </button>
          <button className="p-2 rounded border border-gray-300 hover:bg-indigo-100">
            {/* List Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-indigo-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 6.75h15M4.5 12h15M4.5 17.25h15"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

      </div>
    </div>
  );
};

export default Toolbar;
