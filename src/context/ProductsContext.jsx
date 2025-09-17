import { Children, createContext ,  useContext, useEffect, useState } from "react"
import {getAllProducts} from '../services/Products'
const ProductsContext = createContext()

 export const ProductsProvider = ({children}) =>{
const [products , setProducts] = useState([])

    useEffect(() => {

        getAllProducts().then((data) => setProducts(data) )

    } , [])

    return (
        <>
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
        </>
    )
}

export default ProductsContext