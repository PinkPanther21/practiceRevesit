import { Search } from 'lucide-react';

const recentSearches = [
  { text: 'Viora accessination material', bg: 'bg-indigo-400', textColor: 'text-white' },
  { text: 'Viora Build', bg: 'bg-indigo-300', textColor: 'text-white' },
  { text: 'Aeris Location', bg: 'bg-indigo-600', textColor: 'text-white' },
  { text: 'Viora Cosplay', bg: 'bg-purple-400', textColor: 'text-white' },
  { text: 'Viora Wallpaper', bg: 'bg-white', textColor: 'text-gray-700' },
];

export default function RecentSearch() {
  return (
    <div className="flex flex-col w-full gap-5 md:w-1/4 h-full">
      <h1 className="text-2xl font-extrabold text-gray-700">Recent Search</h1>

      <div className="flex flex-col gap-4 mt-5">
        {recentSearches.map((item, index) => (
          <div
            key={index}
            className={`w-full h-12 flex items-center gap-3 rounded-xl shadow-lg px-3 ${item.bg} ${item.textColor} hover:scale-105 transition-transform duration-200`}
          >
            <Search className="min-w-[20px]" />
            <p className="truncate">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
