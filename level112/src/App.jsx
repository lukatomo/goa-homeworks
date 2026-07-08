export default function App() {
  return (
    <div className="min-h-screen bg-[#36384D] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-5xl w-full">

        {/* Left Side */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-[#242742] mb-6">
            Stay updated!
          </h1>

          <p className="text-gray-600 mb-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <div className="space-y-4 mb-8">

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#FF6155] text-white flex items-center justify-center text-sm">
                ✓
              </div>
              <p>Product discovery and building what matters</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#FF6155] text-white flex items-center justify-center text-sm">
                ✓
              </div>
              <p>Measuring to ensure updates are a success</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#FF6155] text-white flex items-center justify-center text-sm">
                ✓
              </div>
              <p>And much more!</p>
            </div>

          </div>

          <label className="text-sm font-bold text-[#242742] mb-2">
            Email address
          </label>

          <input
            type="email"
            placeholder="email@company.com"
            className="border border-gray-300 rounded-lg px-4 py-4 mb-5 outline-none focus:border-[#FF6155]"
          />

          <button className="bg-[#242742] hover:bg-[#FF6155] text-white font-bold py-4 rounded-lg transition">
            Subscribe to monthly newsletter
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 relative min-h-[650px] bg-gradient-to-br from-orange-500 via-pink-500 to-pink-400 overflow-hidden">

          {/* Background Circles */}
          <div className="absolute -left-24 top-64 w-72 h-72 bg-orange-400 rounded-full opacity-80"></div>
          <div className="absolute left-10 bottom-10 w-56 h-56 bg-orange-300 rounded-full opacity-80"></div>

          {/* Browser */}
          <div className="absolute left-24 top-28 w-72 h-64 bg-white rounded-xl shadow-xl overflow-hidden">

            <div className="h-10 bg-[#242742] flex items-center px-4 gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>

            <div className="flex h-full">
              <div className="w-20 bg-gray-100 p-3 space-y-3">
                <div className="h-2 bg-gray-300 rounded"></div>
                <div className="h-2 bg-gray-300 rounded"></div>
                <div className="h-2 bg-gray-300 rounded"></div>
                <div className="h-2 bg-gray-300 rounded"></div>
              </div>

              <div className="flex-1 bg-white"></div>
            </div>
          </div>

          {/* Chart Card */}
          <div className="absolute top-20 right-16 w-36 h-40 bg-white rounded-xl shadow-lg flex items-center justify-center">

            <svg width="90" height="60">
              <polyline
                points="5,45 25,35 40,18 60,28 82,10"
                fill="none"
                stroke="#FF6155"
                strokeWidth="4"
              />
            </svg>

          </div>

          {/* Score Card */}
          <div className="absolute bottom-40 right-14 w-28 h-36 bg-white rounded-xl shadow-lg flex items-center justify-center">

            <div className="w-20 h-20 rounded-full border-[10px] border-[#FF6155] flex items-center justify-center text-3xl font-bold text-[#242742]">
              94
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}