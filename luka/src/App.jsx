export default function App() {
  return (
    <div className="min-h-screen bg-[#F4D04E] flex items-center justify-center">
      <div className="w-[380px] bg-white rounded-3xl border-2 border-black shadow-[10px_10px_0px_#000] p-6">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
          alt=""
          className="w-full h-[220px] object-cover rounded-2xl"
        />

        <span className="inline-block mt-6 bg-[#F4D04E] font-bold px-4 py-2 rounded-md text-sm">
          Learning
        </span>

        <p className="mt-4 text-sm text-gray-700">
          Published 21 Dec 2023
        </p>

        <h1 className="mt-4 text-3xl font-extrabold hover:text-[#F4D04E] duration-300 cursor-pointer">
          HTML & CSS foundations
        </h1>

        <p className="mt-5 text-gray-500 leading-7">
          These languages are the backbone of every website, defining
          structure, content, and presentation.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
            className="w-10 h-10 rounded-full"
          />

          <p className="font-extrabold">Greg Hooper</p>
        </div>

      </div>
    </div>
  );
}