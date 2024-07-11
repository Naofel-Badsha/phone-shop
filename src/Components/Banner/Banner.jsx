const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[800px]"
          src="https://i.ibb.co/YDnXyyW/banner-1.jpg"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="absolute -mt-[900px]">
          <input
            className="w-96 py-2 px-2 bg-slate-600 text-white text-xl rounded-s-md 
            outline-none"
            type="search"
            placeholder="Search Me....?"
          />
          <button className="bg-orange-700 py-2 px-2 text-xl rounded-e-md cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
