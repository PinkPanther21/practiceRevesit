const artworks = [
  { img: '/img/art2.jpg', author: 'Lia' },
  { img: '/img/art3.jfif', author: 'James' },
];

export default function ArtworkSection() {
  return (
    <div className="flex gap-3">
      <div className="w-full">
        <h1 className="text-2xl font-extrabold text-gray-700">ArtWork ❯</h1>

        <div className="flex gap-3 mt-8 justify-center items-center flex-wrap">
          {artworks.map((art, index) => (
            <div
              key={index}
              className="w-[180px] h-[250px] max-sm:w-1/2 shadow-2xl rounded-xl relative overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={art.img}
                alt={`Artwork by ${art.author}`}
                className="h-full w-full object-cover rounded-xl"
              />
              <h3 className="absolute bottom-0 m-5 font-bold z-10 text-white">
                @ By {art.author}
              </h3>
              <div className="absolute inset-0 bg-linear-to-t from-indigo-800/50 to-blue-500/20 rounded-xl"></div>
            </div>
          ))}
        </div>

        <button className="w-full h-12 rounded-xl text-center shadow-2xl mt-6 font-bold bg-white hover:bg-gray-100 transition-colors duration-200">
          View More
        </button>
      </div>
    </div>
  );
}
