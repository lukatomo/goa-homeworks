// import sedans from "/icon-sedans.svg";
// import suvs from "/icon-suvs.svg";
// import luxury from "/icon-luxury.svg";

function App() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-[#f2f2f2] p-8">
      <div className="grid md:grid-cols-3 max-w-6xl w-full overflow-hidden rounded-xl shadow-lg">
        
        <div className="bg-orange-600 p-12">
          <h1 className="text-5xl font-bold text-white mb-8">
            SEDANS
          </h1>

          <p className="text-white/80 text-lg leading-8 mb-20">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>

          <button className="bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-semibold">
            Learn More
          </button>
        </div>

        <div className="bg-cyan-700 p-12">
          <h1 className="text-5xl font-bold text-white mb-8">
            SUVS
          </h1>

          <p className="text-white/80 text-lg leading-8 mb-20">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>

          <button className="bg-white text-cyan-700 px-10 py-4 rounded-full text-lg font-semibold">
            Learn More
          </button>
        </div>

        <div className="bg-green-900 p-12">
          <h1 className="text-5xl font-bold text-white mb-8">
            LUXURY
          </h1>

          <p className="text-white/80 text-lg leading-8 mb-20">
            Cruise in the best car brands without the bloated prices.
            Enjoy the enhanced comfort of a luxury rental and arrive in style.
          </p>

          <button className="bg-white text-green-900 px-10 py-4 rounded-full text-lg font-semibold">
            Learn More
          </button>
        </div>

      </div>
    </div>
    </>
  );
}

export default App;