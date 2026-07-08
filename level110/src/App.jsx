const links = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

function App() {
  return (
    <div className="min-h-screen bg-[#141414] flex items-center justify-center px-4">
      <div className="w-[380px] bg-[#1f1f1f] rounded-2xl p-8 text-center">
        <img
          src="/n1.jpeg"
          alt="Jessica"
          className="w-24 h-24 rounded-full mx-auto"
        />

        <h1 className="text-white text-3xl font-bold mt-6">
          Jessica Randall
        </h1>

        <p className="text-[#c4f82a] font-semibold mt-2">
          London, United Kingdom
        </p>

        <p className="text-gray-300 mt-7">
          "Front-end developer and avid reader."
        </p>

        <div className="flex flex-col gap-4 mt-8">
          {links.map((link) => (
            <button
              key={link}
              className="bg-[#333333] text-white font-semibold py-3 rounded-lg hover:bg-[#c4f82a] hover:text-black transition-all duration-300"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;