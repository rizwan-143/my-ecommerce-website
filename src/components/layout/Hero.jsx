import { NavLink } from "react-router-dom"
import Button from "../ui/Button"
function Hero(){

   

    return (
        <>
        <div className="bg-gray-200 h-auto flex flex-col lg:flex-row px-2">
        <div className="w-full lg:w-1/2 h-full flex flex-col items-start px-3 gap-8 pt-10">
            <h1 className="font-extrabold text-[25px] lg:text-[40px]">find clothes <br /> that matches <br /> your style</h1>
            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus beatae illum eos odio! Fugiat magni totam maiores inventore at accusamus.</p>
            <Button><NavLink to = '/products' >shop now</NavLink></Button>
            <ul className="flex justify-start w-full gap-4 text-[12px]">
                <li>
                    <strong className="text-[25px]">200+</strong>
                    <p>brands</p>
                </li>
                <li>
                    <strong className="text-[25px]">20000+</strong>
                    <p>high quality products</p>
                </li>
                <li>
                    <strong className="text-[25px]">2000+</strong>
                    <p>happy customer</p>
                </li>
            </ul>
        </div>

        <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
        <img src="/public/heroRightSide-removebg-preview.png" className="w-full h-full bg-transparent object-cover" alt="" />
        </div>
        </div>
        </>
    )
}
export default Hero