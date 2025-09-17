import { Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

function RootLayOut(){
    return (
        <>
        <Header/>
        <div className="px-4 mt-[30px] min-h-screen">
        <Outlet/>
        </div>
        <Footer/>
        </>
    )
}
export default RootLayOut