export default function App() {
  return (
    <div className="min-h-screen bg-[#F4D04E] flex items-center justify-center px-4">
      <div className="bg-white w-[384px] rounded-[20px] border border-black shadow-[8xp_8px_0px_#000] p-6">

        <img
        src="./illustration-article.svg" 
        alt="Article"
        className="rounded-[10px] w-full"
        />

        <span className="inline-block mt-6 bg-[#F4D04E] font-extrabold text-sm px-3 py-1 rounded">
          Learing
        </span>

        <p className="mt-3 text-sm font-medium">
          Published 21 Dec 2023
        </p>

        <h1 className="mt-4 text-2xl font-extrabold hover:text-[F4D04E] cursor-pointer duraction-200">
          HTML & CSS foundations
        </h1>

        <p className="mt-4 text-gray-500 leading-7">
          These languages are the backbone of every website.
          defening structure, content, and presetation.
        </p>

        <div className="flex items-center gap-3 mt-6">
          
          <img
          src="./image-avatar.webp"
          alt="Greg Hooper"
          className="w-8 h-8"
          />
          <span className="font-extrabold">
            Greg Hooper
          </span>
          </div>
        
      </div>
    </div>
  );
}