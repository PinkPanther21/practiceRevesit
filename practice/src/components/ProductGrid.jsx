import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { addFav, removeFav } from "../redux/FavouriteSlice";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export default function ProductGrid() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const favItems = useSelector((state) => state.fav.items); 
  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts(count));
  }, [count]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100
    ) {
      setCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isFavorite = (id) => favItems.some((item) => item.id === id);
  

  const toggleFav = (item) => {
    if (isFavorite(item.id)) {
      dispatch(removeFav(item.id));
    } else {
      dispatch(addFav(item));
    }
  };

  return (
    <div className="px-10 py-20">
      <h2 className="text-3xl font-bold mb-6 text-indigo-500">
        Featured Anime Products
      </h2>

      {status === "loading" && <p className="text-gray-500">Loading...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
         
          <div
            key={item.id}
            className="p-3 border rounded-xl shadow-md hover:scale-[1.02] transition-all relative"
          >
            <img
              src={item.img}
              className="w-full h-64 object-cover rounded-lg"
              alt={item.title}
            />

            {/* Heart Button */}
            <button
              onClick={() => toggleFav(item)}
              className="absolute top-3 right-3 p-1 rounded-full bg-white shadow-md"
            >
              <Heart
                className={`w-6 h-6 ${
                  isFavorite(item.id) ? "text-red-500" : "text-gray-400"
                }`}
              />
            </button>

            <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
            <p className="text-sm text-gray-500">Digital collectible artwork</p>
          </div>
        ))}
      </div>
    </div>
  );
}
