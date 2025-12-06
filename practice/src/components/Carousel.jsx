import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        mainHead: "Viora Amethystshade",
        info: "A mystical dream-weaver with deep purple hair that glows softly under moonlight. She can enter people's dreams and guide them through illusions, leaving trails of violet sparkles wherever she steps.",
        img: "/img/anime2.png"
    },

    {
        mainHead: "Aeris Bluewind",
        info: "A sky guardian with flowing sapphire-blue hair that dances with the wind. She controls gentle breezes and protects the skies from dark storms with her serene blue aura.",
        img: "/img/anime3.png"
    },

    {
        mainHead: "Seren Verdantia",
        info: "A forest spirit with radiant emerald-green hair. She can speak to plants, heal nature, and create glowing green vines that protect anyone she cares about.",
        img: "/img/anime4.png"
    }
];

function NextArrow({ onClick }) {
  return (
    <div
      className="absolute right-2 max-md:right-0 top-1/2 -translate-y-1/2 
      text-indigo-300 text-4xl max-md:text-2xl cursor-pointer z-50"
      onClick={onClick}
    >
      ❯
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-2 max-md:left-0 top-1/2 -translate-y-1/2 
      text-indigo-300 text-4xl max-md:text-2xl cursor-pointer z-50"
      onClick={onClick}
    >
      ❮
    </div>
  );
}
   

export default function Carousel(){
    const settings = {
    className: "",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
    return (
        <>
        <div className="flex flex-col w-full h-full max-md:h-3/4 max-md:w-3/4 max-sm:h-3/4 max-sm:w-3/4 bg-[url(./assets/bg3.jpg)] bg-cover bg-center bg-no-repeat bg-fixed rounded-xl text-white">
        <div>
                <h1 className="text-lg font-Spirax p-4 font-bold max-md:text-sm max-sm:text-sm">Mystical</h1>
            </div>
            <Slider {...settings}>
        {data.map((d)=>{
         return (
            <div>
             
            <div className="flex flex-row justify-between items-center w-full gap-6 p-4">
            <div className="flex flex-col gap-8 max-md:gap-2 max-sm:gap-2 max-md:m-2 max-sm:m-2 w-1/2 m-8 p-4">
                <h2 className="text-4xl max-md:text-2xl max-sm:text-lg font-bold">{d.mainHead}</h2>
                <p className="text-base max-md:text-sm max-sm:text-xs font-semibold leading-snug">{d.info}</p>
            </div>
            <div className='h-auto w-[300px] max-md:w-[180px] max-sm:w-[150px] flex justify-center'>          
                <img src={d.img} alt="imghere" className='w-full h-auto object-contain'/>
            </div>
            </div>
            </div>
         )
        })}
         </Slider>  
           
           
        </div>
        </>
    )
}