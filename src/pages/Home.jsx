import Header from "../components/layout/Header"
import Brands from '../components/layout/Brands'
import Hero from '../components/layout/Hero'
import OurHappyCustomers from '../components/layout/OurHappyCustomers'
import Footer from '../components/layout/Footer'
import Products from "./Products"
function Home(){
    return (
        <>
        <div className="space-y-10 sm:px-2 md:px-4 lg:px-6">
        <Hero/>
        <Brands/>
        <Products/>
        <OurHappyCustomers/>
        </div>
        </>
    )
}

export  default Home