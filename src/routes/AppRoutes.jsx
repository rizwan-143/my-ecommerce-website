import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Products from "../pages/Products"
import ProductsDetails from "../components/products/ProductsDetails"
import RootLayOut from '../rootLayout/RootLayOut'
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes"
import Cart from '../pages/CartPage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PublicRoutes from "../PublicRoutes/PublicRoutes"
import NotFound from "../pages/NotFound"

function AppRoutes() {
    return (
        <Routes>

            <Route element = {<RootLayOut/>} >
                <Route path = '/' element = {<Home/>} />
                <Route path = '/home' element = {<Home/>} />
            <Route path = '/products' element = {<Products/>} />
            <Route path = '/products/:id' element = {<ProductsDetails/>} />
            <Route element = {<ProtectedRoutes/>} >
               <Route path = '/cart' element = {<Cart/>} />
            </Route>
            </Route>


            <Route  element ={<PublicRoutes/>}>
            <Route path = '/login' element = {<Login/>} />
            <Route path = '/register' element = {<Register/>} />
            </Route>
            <Route path="*" element = {<NotFound/>} />

        </Routes>
    )
}

export default AppRoutes
