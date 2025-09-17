import { createContext, useContext, useEffect, useState } from "react";
// import ProductsContext from "./ProductsContext";
export  const ProductsDetailsContext = createContext();


export const ProductsDetailsProvider = ({children}) =>{
    const [productDetails , setProductsDetails] = useState(null);


    // const {products} = useContext(ProductsContext);

//    function showProductDetails (p){
//         setProductsDetails({...p , "quantity" : p.quantity || 1 })
        
//     }



    useEffect(() => {
                console.log(productDetails);

    } , [productDetails])

    const reviewsMonths = {
        "01" : "junuary",
        "02" : "feburary",
        "03" : "march",
        "04" : "april",
        "05" : "may",
        "06" : "june",
        "07" : "july",
        "08" : "august",
        "09" : "september",
        "10" : "october",
        "11" : "november",
        "12" : "december",
    }
    // here to show month name instead of numbers of months
    const extractMonth = productDetails?.reviews.length > 0 ? (productDetails.reviews.map((review) => review.date.split("-")[1])) : [];
    const monthName = extractMonth.map((months) => reviewsMonths[months] || 'undefined')
    console.log(monthName);
    
         
 return (
    <ProductsDetailsContext.Provider value={{  productDetails , monthName }}>
        {children} 
    </ProductsDetailsContext.Provider>
 )
}
