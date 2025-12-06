import Carousel from "./Carousel"
import Main from "./Main"

export default function Home(){
    return (
        <>
        <div className="w-full h-full flex flex-col justify-center items-center mx-auto">
        <div className="w-full max-w-6xl px-4 mt-5 flex justify-center">
            <Carousel />           
        </div>
        <Main />
        </div>
        </>
    )
}