const rightCards = [
  {
    img: '/img/ani1.png',
    title: 'Cryo Character',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, nemo?',
  },
  {
    img: '/img/ani2.png',
    title: 'Sumeru',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, voluptas!',
  },
  {
    img: '/img/ani3.png',
    title: 'Akademiya',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, culpa.',
  },
];

export default function RightSection() {
  return (
    <div className="flex gap-5 flex-col md:flex-row w-full md:w-1/2 h-full">
      {/* Left Images */}
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <div className="w-full h-48 rounded-xl overflow-hidden bg-indigo-300">
          <img src="/img/p1.png" alt="Artwork 1" className="object-cover w-full h-full" />
        </div>
        <div className="w-full h-48 rounded-xl overflow-hidden bg-teal-800">
          <img src="/img/p2.png" alt="Artwork 2" className="object-cover w-full h-full" />
        </div>
      </div>

      {/* Right Cards */}
      <div className="flex flex-col gap-5 w-full md:w-2/3">
        {rightCards.map((card, index) => (
          <div
            key={index}
            className="flex gap-3 p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <img src={card.img} alt={card.title} className="w-16 h-16 object-cover rounded-md shrink-0" />
            <div>
              <h3 className="text-lg font-medium">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
