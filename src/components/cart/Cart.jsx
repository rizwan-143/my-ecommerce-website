import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Button from "../ui/Button";
import CartSummary from "./CartSummary";
function Cart() {
    const { cartItem, removeItem, increaseQuantity,
         decreaseQuantity, clearCart , popUp ,
          popUpMessage , currentUser } = useContext(CartContext);
    console.log('cart item in cart page : ', cartItem);

    const currentUserItems  = cartItem.filter(item => item.currentUserEmail === currentUser.registeremail)
    return (
        <>

        {popUp && (
                <div className="fixed top-5 right-5 bg-red-500 text-white px-4 py-1 rounded shadow-lg z-50">
                    {popUpMessage}
                </div>
            )}
                <h3 className="font-bold text-[30px] lg:text-[40px]">your cart</h3>
                { currentUserItems.length > 0 && <Button onClick={() => {clearCart()  }} className='bg-red-600'>clear cart</Button> }
            {
                currentUserItems.length === 0 ? <p 
                className="text-red-600 uppercase font-bold w-full text-center mt-10
                 text-[30px]  ">your cart in empty</p> : (
                    <div className="w-full flex flex-col lg:flex-row gap-4 justify-around my-5">
                        {
                            <ul className="flex flex-col border border-gray-400 rounded-lg w-full lg:w-1/2 p-2">

                                {
                                    currentUserItems.map((item, index) => {
                                        return (

                                            <li className="flex gap-3 items-center border-b p-3" key={index}>
                                                <div className="cart-item-pic">
                                                    <img className="w-20 h-20"
                                                        src="/heroRightSide-removebg-preview.png" alt="" />
                                                </div>
                                                <div className="cart-item-details">
                                                    <p>{item.title}</p>
                                                    <p> color :  {item.color}</p>
                                                    <p>size : {item.size}</p>
                                                    <p className="font-bold text-[20px]">{`${(item.price * item.quantity).toFixed(2)}`}</p>
                                                </div>
                                                <div className="remove-item">
                                                    <i onClick={() => removeItem(item)}
                                                        className="fa-solid fa-trash-can text-red-500"></i>
                                                </div>
                                                <div className="quantity flex gap-2">
                                                    <button onClick={() => decreaseQuantity(item)}
                                                        className="bg-gray-300 px-3 py-1 rounded-full">-</button>
                                                    <span className="bg-gray-300 px-3 py-1 rounded-full">{item.quantity}</span>
                                                    <button onClick={() => increaseQuantity(item)}
                                                        className="bg-gray-300 px-3 py-1 rounded-full" >+</button>
                                                </div>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        }
                        <div className="w-full lg:w-1/2">

                            <CartSummary>

                            </CartSummary>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Cart