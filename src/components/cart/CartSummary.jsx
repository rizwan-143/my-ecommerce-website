import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
function CartSummary() {

    const { cartItem } = useContext(CartContext);
    console.log('cart arrray in cart summary page', cartItem);

    const itemsPrice = cartItem.map(item => (item.price * item.quantity))
    const totalPrice = itemsPrice.reduce((acc, curr) => acc + curr, 0)
    console.log(totalPrice.toFixed(2));
    const deliveryFee = 15

    return (
        <>

            <div className="border border-gray-400 rounded-lg p-3">
                <h3 className="font-bold text-[30px]">order summary</h3>
                <ul className="w-full">
                    <li>
                        <ul className="flex flex-col gap-5 [&>li]:flex [&>li]:justify-between border-b border-b-black">
                            <li className="">
                                <p>subtotal :</p>
                                <strong>{`${(totalPrice).toFixed(2)} $`}</strong>
                            </li>
                            <li>
                                <p>discount (-20%) :</p>
                                <strong>{`${(totalPrice).toFixed(2)} $`}</strong>
                            </li>
                            <li>
                                <p>delivery fee :</p>
                                <strong>{`${deliveryFee} $`}</strong>
                            </li>
                        </ul>
                    </li>
                    <li className="flex justify-between mt-3">
                        <p>total :</p>
                        <strong>{`${(totalPrice - deliveryFee).toFixed(2)} $`}</strong>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default CartSummary