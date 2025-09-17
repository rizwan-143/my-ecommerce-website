import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
export const CartContext = createContext()
export function CartProvider({children}){

    const [cartItem , setCartItem] = useState(() => {
        const items = localStorage.getItem('currentUserCartItems')
       return items  ? JSON.parse(items) : []
    })
    const [popUp , setPopUp] = useState(false)
    const [popUpMessage , setPopUpMessage]  = useState('')
    const {loginUser} = useContext(AuthContext)
    const [sizeSelected , setSizeSelected] = useState(null)
    const navigate = useNavigate()
    
    const currentUser  = JSON.parse(localStorage.getItem('loginUser')) || {}
    console.log('current user email ' , currentUser.registeremail);
    
    // useEffect(() => {
    //     if(currentUser.registeremail){
    //         const savedCart  = JSON.parse(localStorage.getItem?.('currentUserCartItems') || [])
    //         setCartItem(savedCart)
    //     }


    // } , [])
    


  

function addToCart(ci){ // ci = cart item

    if(!loginUser){
        alert('you must login to add to cart !')
       navigate('/login')
       return
    }

     const existsItem = cartItem.find((item) => item.id === ci.id)
    if(existsItem){
        return alert('item already in cart')
    }else{

        setCartItem(prev => {
          const updatedCart =   [...prev , {...ci , quantity : 1 ,
             color : 'black' , size : 'md' , "currentUserEmail" : currentUser.registeremail}]
             localStorage.setItem('currentUserCartItems' , JSON.stringify(updatedCart))
            return(updatedCart)
            }) // here the color black and size md are deault values
        setPopUp(true)
        setPopUpMessage(`${ci.title}   added to cart`)
        setTimeout(() => setPopUp(false) , 2000)

    }
   
}
console.log( 'cart item' ,  cartItem);

//  here to remove item from cart

function removeItem(ri){ // ri = remove item
    const updatedCart = cartItem.filter((item) => String(item.id) !== String(ri.id))
    setCartItem(updatedCart)
    localStorage.setItem('currentUserCartItems' ,  JSON.stringify(updatedCart))
    setPopUp(true)
    console.log('removed item' , ri);
    
    setPopUpMessage(`${ri.title}   removed from cart`)
        setTimeout(() => setPopUp(false) , 2000)


}

// increase quantity 
function increaseQuantity(iq){ // iq = increase quantity
    const updatedCart = cartItem.map((item) => item.id === iq.id ?  {...item , quantity : item.quantity + 1} : item)
setCartItem(updatedCart)
localStorage.setItem('currentUserCartItems' , JSON.stringify(updatedCart))

}

// deacrease quantity 

function decreaseQuantity(dq){ // dq = decrease quantity
    const updatedCart = cartItem.map((item) => item.id === iq.id ?  {...item , quantity : item.quantity - 1} : item).filter((item) => item.quantity > 0)

    setCartItem(updatedCart)
    localStorage.setItem('currentUserCartItems' , JSON.stringify(updatedCart))
}

// here to clear complete card

function clearCart(){ // cc = clear cart
    const updatedCart  = []

    setCartItem(updatedCart)
    localStorage.setItem('currentUserCartItems' , JSON.stringify(updatedCart))
     setPopUp(true)
     setPopUpMessage(`you cart is empty`)
        setTimeout(() => setPopUp(false) , 2000)
}

// here to select color 
function selectColor(id , sc){ // sc = select color
setCartItem(prev => prev.map((item) => item.id === id ? {...item , color : sc} : item))
}

// here to select size

function selectSize(id ,  ss){ // ss = select size
    setSizeSelected(ss)
    setCartItem(prev => prev.map(item => item.id === id ? {...item , size : ss} : item))

}

    return (
        <CartContext.Provider value={{cartItem ,
         addToCart , removeItem , increaseQuantity , 
         decreaseQuantity , clearCart  , selectColor , selectSize , popUp , popUpMessage , sizeSelected , setSizeSelected , currentUser}}>
            {children}
        </CartContext.Provider>
    )
}

