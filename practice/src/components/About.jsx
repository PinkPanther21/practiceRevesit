import ProductGrid from "./ProductGrid";
export default function About() {
  return (
    <>
      <div className="relative h-full w-full">
        <div
          className="
    absolute inset-0
    bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
    bg-[size:14px_24px]
    [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]
  "
        ></div>
        <section className="flex flex-col md:flex-row items-center gap-10 px-10 py-20">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-8 md:w-1/2">
            <h1 className="text-2xl md:text-6xl font-bold text-indigo-500">
              Viora Amethystshade
            </h1>

            <p className="text-gray-700 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              deserunt aperiam enim provident consequatur eligendi
              necessitatibus! Ipsam, eligendi? Sit totam officia incidunt
              veritatis quos similique quas molestiae nam?
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative md:w-1/2 flex justify-center">
            {/* 3D Container */}
            <div className="relative  w-full max-w-md">
              {/* BACKGROUND (Blurred layer behind) */}
              <img
                src="/img/anime2.png"
                alt=""
                className="
        absolute inset-0 w-full h-auto 
        blur-2xl opacity-50 scale-110 
        -z-10
      "
              />

              {/* FOREGROUND IMAGE (popping out) */}
              <img
                src="/img/anime2.png"
                alt=""
                className="
        relative w-full h-auto object-cover 
        rounded-xl 
        perspective-1000
        shadow-[0px_20px_40px_rgba(0,0,0,0.4)]
        scale-120
        -translate-y-4
        rotate-y-3 rotate-x-2
      "
              />
            </div>
          </div>
        </section>
        <section>
          <ProductGrid />
        </section>
      </div>
    </>
  );
}
