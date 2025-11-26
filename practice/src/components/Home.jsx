import Carousel from "./Carousel"
import Main from "./Main"

export default function Home(){
    return (
        <>
        <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-3xl flex mt-5 w-3/4 h-[400px] rounded-xl">
            <Carousel />           
        </div>
        <Main />
        </div>
        </>
    )
}