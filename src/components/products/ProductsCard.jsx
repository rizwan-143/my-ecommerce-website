// import { useContext } from "react"
// import { ProductsDetailsContext } from "../../context/ProductDetailsContext"
// import { CartContext } from "../../context/CartContext"
import { Navigate, useNavigate } from "react-router-dom"
import CartButton from "../ui/CartButton"
function ProductsCard({ product }) {
    // const {showProductDetails} = useContext(ProductsDetailsContext)
    // const {addToCart , popUp , popUpMessage} = useContext(CartContext)

    const navigate = useNavigate()
    return (
        <>

            <div className="card shadow rounded-lg p-3 cursor-pointer">
                <div className="card-header rounded-lg overflow-hidden group">
                    <img src={"../../../public/heroRightSide.png"} alt="" className="w-full rounded-lg group-hover:scale-110 transition-all duration-500" />
                </div>
                <div className="card-body flex flex-col gap-2 mt-2">

                    <div className="">{`Title :  ${product?.title || 'no title available'}`}</div>
                    <div className="">{` Category : ${product?.category}`}</div>
                    <div className="">{`Price ${product?.price || 'no price provided'}`}</div>
                </div>

                <div className="card-footer border border-t-2 p-2 flex justify-around">
                    {/* <button onClick={() => showProductDetails(product)}
                         className="bg-blue-500 text-white px-4 py-1 rounded-lg">show details</button> */}
                    <button
                        onClick={() => {navigate(`/products/${product?.id}`) ; window.scrollTo({top : 0 , behavior : 'smooth'})}}
                        className="bg-blue-500 text-white px-4 py-1 rounded-lg overflow-hidden transition-all duration-500 relative group"
                    >
                        <div
                            className="w-full h-0 absolute top-0 right-0 bg-black transition-all duration-500 group-hover:h-full"
                        ></div>
                        <span className="relative z-10">show details</span>
                    </button>
                    <CartButton product={product} />
                    {/* <button onClick={() => addToCart(product)}
                           className="bg-blue-500 text-white px-4 py-1 rounded-lg"><i class="fa-solid fa-cart-plus"></i></button> */}
                </div>
            </div>


        </>
    )
}

export default ProductsCard