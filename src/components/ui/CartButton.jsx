import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
function CartButton({ product }) {

    const { addToCart, popUp, popUpMessage } = useContext(CartContext)

    return (
        <>


            {popUp && (
                <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-1 rounded shadow-lg z-50">
                    {popUpMessage}
                </div>
            )}


            <button onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-1 rounded-lg relative overflow-hidden group ">
                    <div className="w-full h-0 bg-black absolute bottom-0 left-0 transition-all duration-300 group-hover:h-full"></div>
                    <i class="fa-solid fa-cart-plus relative z-10"></i>
                    </button>

        </>
    )
}

export default CartButton