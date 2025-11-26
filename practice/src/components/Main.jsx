import { Search } from 'lucide-react';

export default function Main() {
  return (
    <>
      <section className="w-full flex max-md:flex-col max-sm:flex-col max-sm:m-5 max-md:m-5 gap-10 m-10 p-10">
        {/* Left Side */}
         {/* ArtWork section */}
        <div className="flex flex-col max-sm:flex-row gap-3">
          <div>
            <h1 className="text-2xl font-[1000] text-gray-700">ArtWork ❯ </h1>
            <div className="flex gap-3 mt-8 max-sm:mt-2">
              <div className="w-[180px] h-[250px] max-sm:w-1/2 shadow-2xl rounded-xl relative overflow-hidden">
                <img
                  src="/img/art2.jpg"
                  alt=""
                  className="h-full w-full rounded-xl object-cover"
                />
                <h3 className="absolute bottom-0 m-5 font-bold z-10 text-white">@ By Lia</h3>
                <div className="absolute inset-0 bg-linear-to-t from-indigo-800/50 to-blue-500/20 rounded-xl"></div>
              </div>

              <div className="w-[180px] h-[250px] max-sm:w-1/2 shadow-2xl rounded-xl relative overflow-hidden">
                <img
                  src="/img/art3.jfif"
                  alt=""
                  className="h-full w-full rounded-xl object-cover"
                />
                <h3 className="absolute bottom-0 m-5 font-bold z-10 text-white">@ By James</h3>
                <div className="absolute inset-0 bg-linear-to-t from-indigo-800/50 to-blue-500/20 rounded-xl"></div>
              </div>
            </div>
            <div className="w-full h-12 rounded-xl text-center shadow-2xl mt-6 p-[9px] font-bold bg-white">
               View More
            </div>
          </div>
          
        </div>
        {/* Recent Search Section */}
        <div className="flex flex-col max-sm:w-full gap-5 w-1/4 h-full">
            <h1 className="text-2xl font-[1000] text-gray-700">Recent Search</h1>
            <div className="flex flex-col gap-4 mt-5 text-white p-2 font-[550]">
              <div className="w-full h-12 bg-indigo-400 flex justify-start items-center gap-5 rounded-xl shadow-lg">
               <Search className='ml-2'/>
                <p>Viora accessination material</p>
              </div>
              <div className="w-full h-12 bg-indigo-300 flex justify-start items-center gap-5 rounded-xl shadow-lg">
              <Search className='ml-2'/>
                <p>Viora Build</p>
              </div>
              <div className="w-full h-12 bg-indigo-600 flex justify-start items-center gap-5 rounded-xl shadow-lg">
                 <Search className='ml-2'/>
                <p>Aeris Location</p>
              </div>
              <div className="w-full h-12 bg-purple-400 flex justify-start items-center gap-5 rounded-xl shadow-lg">
               <Search className='ml-2'/>
                <p>Viora Cosplay</p>
              </div>
              <div className="w-full h-12 bg-white text-gray-700 flex justify-start items-center gap-5 rounded-xl shadow-lg">
                <Search className='ml-2'/>
                <p>Viora Wallpaper</p>
              </div>
            </div>
        </div>

        {/* Right Side  */}
        <div className='flex gap-5 max-sm:flex-col max-sm:w-full h-full w-4/8'>
          <div className='w-1/3 h-6/8 mt-20 flex flex-col max-sm:flex-row max-sm:w-full max-sm:h-full gap-5'>
            <div className='w-full h-1/2 rounded-xl bg-indigo-300'>
              <img src="/img/p1.png" alt="" className='object-fit'/>
            </div>
            <div className='w-full h-1/2 rounded-xl bg-teal-800'>
             <img src="/img/p2.png" alt="" className='object-fit'/>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-[calc(100%-33.33%)] max-sm:w-full h-full py-5'>
             <div className='h-5/6 rounded-xl flex justify-start p-2 gap-2 bg-white shadow-md'>
              <img src="/img/ani1.png" alt="" className='size-22'/>
              <div>
              <h3 className='text-lg font-medium'>Cryo Character</h3> 
              <p className='text-sm tracking-tight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, nemo?</p>
              </div>
              
             </div>
             <div className='h-5/6  rounded-xl flex justify-start p-2 gap-2 bg-white shadow-md'>
              <img src="/img/ani2.png" alt="" className='size-22'/>
              <div>
               <h3 className='text-lg font-medium'>Sumeru</h3> 
              <p className='text-sm tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, voluptas!</p>
              </div>
              
             </div>
             <div className='h-5/6 rounded-xl flex justify-start p-2 gap-2 bg-white shadow-md'>
              <img src="/img/ani3.png" alt="" className='size-22'/>
              <div>
               <h3 className='text-lg font-medium'>Akademiya</h3> 
              <p className='text-sm tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, culpa.</p>
              </div>
             
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
