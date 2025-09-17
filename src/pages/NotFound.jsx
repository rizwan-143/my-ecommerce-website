import { useNavigate } from "react-router-dom"

function NotFound(){
    const navigate = useNavigate()
    return (
        <>

        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-[90px] font-extrabold text-red-700">404</h1>
            <p className="text-[25px] font-semibold text-red-500">opps ! <span>page not found</span></p>
            <p className="text-center">sorry the page you are looking for does not exists . if you think something is broken  , report a problem</p>
            <div className="flex gap-4 items-center">
                <button  onClick={() => navigate('/')}
                className="bg-black text-white px-5 py-1 rounded-lg uppercase relative overflow-hidden group">
                     <div className="w-full h-0 absolute left-0 top-0 bg-red-500 group-hover:h-full transition-all duration-300 "></div>
                     <span className="relative z-10">return home</span>
                </button>
                <button className="bg-black text-white px-5 py-1 rounded-lg uppercase relative overflow-hidden group">
                     <div className="w-full h-0 absolute left-0 top-0 bg-red-500 group-hover:h-full transition-all duration-300 "></div>
                     <span className="relative z-10">report problem </span>
                </button>
            </div>
        </div>
        
        </>
    )
}

export default NotFound