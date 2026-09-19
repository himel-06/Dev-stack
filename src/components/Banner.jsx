import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-5 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between"
    >
      
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
          Build Your Ideal
          <br />

          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 max-w-lg text-sm md:text-base leading-6 text-slate-500">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.
        </p>

       
        <div className="flex gap-3 mt-8">

          <a
            href="#technologies"
            className="px-4 py-2.5 rounded-md text-white text-sm font-medium bg-linear-to-r from-orange-500 to-pink-500"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="px-5 py-2.5 rounded-md text-slate-600 text-sm font-medium border border-slate-200 bg-white"
          >
            Learn More
          </a>

        </div>
      </div>

    
      <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
        <img
          src={banner}
          alt="Development Stack"
          className="w-64 md:w-72 object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;