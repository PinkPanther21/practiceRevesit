import { useSelector, useDispatch } from "react-redux";
import { removeFav } from "../redux/FavouriteSlice";

export default function Favourite() {
  const dispatch = useDispatch();
  const favItems = useSelector((state) => state.fav.items);

  if (favItems.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-white to-gray-300">
        <p className="text-gray-700 text-lg">No favorite items yet!</p>
      </div>
    );

  return (
    <div className="min-h-screen p-5 bg-linear-to-r from-white to-gray-300">
      <h2 className="text-2xl font-bold mb-5 text-center text-indigo-600">
        Your Favorites
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {favItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between"
          >
            <img
              src={item.img} 
              alt={item.title}
              className="rounded-md mb-3 object-cover h-40 w-full"
            />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{item.status}</p>
            <button
              onClick={() => dispatch(removeFav(item.id))}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
