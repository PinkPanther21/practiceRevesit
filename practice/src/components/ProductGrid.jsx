import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { useEffect, useState } from "react";

export default function ProductGrid() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const [count,setCount] = useState(1)

  useEffect(() => {
    dispatch(fetchProducts(count));
  }, [count]);

  const handleScroll = () => {
    if (
     window.innerHeight + window.scrollY >=
  document.documentElement.scrollHeight - 100 
    ) {
       setCount((prev)=> prev+1)
    }
  };
  useEffect(()=> {
   window.addEventListener('scroll',handleScroll)
   return () => window.removeEventListener("scroll", handleScroll);
  },[])
  return (
    <>
    <div className="px-10 py-20">
      <h2 className="text-3xl font-bold mb-6 text-indigo-500">
        Featured Anime Products
      </h2>

      {status === "loading" && <p className="text-gray-500">Loading...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-3 border rounded-xl shadow-md hover:scale-[1.02] transition-all"
          >
            <img
              src={item.img}
              className="w-full h-64 object-cover rounded-lg"
              alt="anime"
            />
            <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
            <p className="text-sm text-gray-500">Digital collectible artwork</p>
          </div>
        ))}
     </div>
     
      </div>
      
      </>
  );
}
