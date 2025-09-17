import { useContext, useEffect, useState } from "react"
import { ProductsDetailsContext } from "../../context/ProductDetailsContext"
import ProductsContext from "../../context/ProductsContext"
import Button from "../ui/Button"
import { CartContext } from "../../context/CartContext"
import {  useNavigate, useParams } from "react-router-dom"
import CartButton from "../ui/CartButton"
function ProductsDetails() {
    const { products } = useContext(ProductsContext);
    const { productDetails, showProductDetails, monthName } = useContext(ProductsDetailsContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentReviewsPage, setCurrentReviewsPage] = useState(1)
    const [reviewsPerPage, setReviewsPerPage] = useState(2)
    const { increaseQuantity, deccreaseQuantity, cartItem, addToCart,
        itemColor, selectColor, selectSize  , sizeSelected} = useContext(CartContext)

    const { id } = useParams();

    const navigate = useNavigate()

    //  let here to show the first product as a default if no product is selected 
    let selectedProduct = id ? products.find(p => p.id.toString() === id) : products[0];
    // here to load same category products
    const relatedProducts = selectedProduct ? products.filter(p => p.category === selectedProduct.category) : [];

    // here to show 4 related products at a time
    const relatedProductsPerPage = 4;
    const totalPages = Math.ceil(relatedProducts.length / relatedProductsPerPage)
    const indexOfLast = currentPage * relatedProductsPerPage;
    const indexOfStart = indexOfLast - relatedProductsPerPage;
    const currentRelatedProducts = relatedProducts.slice(indexOfStart, indexOfLast)

    console.log('related products  : ', relatedProducts);

    // to change related products after some time
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage(prev => prev < totalPages ? prev + 1 : 1)
        }, 3000);

        return () => clearInterval(interval)
    }, [totalPages])

    //  now tos how only 2 reviews and when user click on load more button then more reviews will be show
    const lastIndex = currentReviewsPage * reviewsPerPage
    const startIndex = lastIndex - reviewsPerPage
    const currentReviews = selectedProduct?.reviews.slice(startIndex, lastIndex)
    console.log('current reviews', currentReviews);

    // to check if item is present in cart
    const itemInCart = cartItem.find(item => item.id === selectedProduct?.id)




    return (
        <>

            <h3 className="font-bold text-[30px] uppercase">product details</h3>
            <div className="w-full flex flex-col lg:flex-row my-5">
                <div className="product-details-left-side w-full lg:w-1/2 flex items-center justify-center gap-3">
                    <div className="related-images">
                        <ul className="flex flex-col gap-3 rounded-lg">
                            <li><img src="../../../public/heroRightSide.png" className="w-16 h-16" alt="" /></li>
                            <li><img src="../../../public/heroRightSide.png" className="w-16 h-16" alt="" /></li>
                            <li><img src="../../../public/heroRightSide.png" className="w-16 h-16" alt="" /></li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 rounded-lg">
                        <img src="../../../public/heroRightSide-removebg-preview.png" className="object-cover" alt="" />
                    </div>
                </div>


                <div className="products-details-right-side flex flex-col justify-center gap-4 ">
                    <p className="text-[25px] font-extrabold">{selectedProduct?.title || 'no title '}</p>
                    <p>{` price $ ${selectedProduct?.price}`}</p>
                    <p>{`product category : ${selectedProduct?.category}`}</p>
                    <p>{selectedProduct?.description || 'no description given'}</p>
                    <ul>
                        <li>select color</li>
                        <li>
                            <ul className="flex gap-3 mt-2">
                                {selectedProduct?.colors.map((color, index) => {
                                    return (

                                        <li
                                            key={index}
                                            onClick={() => selectColor(selectedProduct.id, color)}
                                            className={`w-5 h-5 rounded-full cursor-pointer`} style={{ backgroundColor: color }} ></li>

                                    )
                                })}
                            </ul>
                        </li>
                    </ul>

                    {/* here size */}
                    <ul>
                        <li>choose size</li>
                        <li>
                            <ul className="flex gap-2">
                                {
                                    selectedProduct?.sizes.map((size, index) => {
                                        return <li
                                            onClick={() => selectSize(selectedProduct.id, size)}
                                            key={index}
                                            className={` px-4 py-1 rounded-full w-fit cursor-pointer ${size === sizeSelected ? 'bg-black text-white' : "" }`} >{size}</li>
                                    })
                                }
                            </ul>
                        </li>
                    </ul>

                    {/* here quantity */}
                    <div className="quantity flex gap-2">
                        <button onClick={() => itemInCart && deccreaseQuantity(selectedProduct)}
                            className="bg-gray-300 px-3 py-1 rounded-full">-</button>
                        <span className="bg-gray-300 px-3 py-1 rounded-full">{itemInCart ? itemInCart.quantity : 1}</span>
                        <button onClick={() => itemInCart && increaseQuantity(selectedProduct)}
                            className="bg-gray-300 px-3 py-1 rounded-full" >+</button>
                    </div>
                    <CartButton product={{ ...selectedProduct, color: itemColor }} />
                    {/* <button onClick={() => addToCart({ ...selectedProduct, color: itemColor })}
                        className="bg-blue-500 text-white px-4 py-1 rounded-lg"><i class="fa-solid fa-cart-plus"></i></button> */}
                </div>
            </div>





            {/* here goes pro revirews */}

            <div className="">
                <h3 className="uppercase font-extrabold text-lg">rating and reviews</h3>
                <div className="flex flex-wrap justify-center  gap-6 w-full ">
                    {
                        currentReviews?.map((review, index) => {
                            return (
                                <div className="review-card w-full  p-3 rounded-lg  hover:bg-gray-200 transition-all duration-500 ease-in-out cursor-pointer hover:scale-105
                                               relative  shadow shadow-gray-400 lg:w-1/3 mt-5 border border-gray-400" key={index}>
                                    <div className="rating"> rating {review?.rating} / 5</div>
                                    <div className="review-author font-bold">{review?.user}</div>
                                    <p>{review?.comment}</p>
                                    <div className="review-date absolute right-2 top-2">
                                        <p>{`posted on :  ${review.date.split("-")[2]} ${monthName[index]} ${review.date.split("-")[0]}`}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="grid justify-center">
                    {

                        reviewsPerPage < selectedProduct?.reviews.length && (
                            <Button
                                className="mt-4  text-black border border-gray-500 duration-0 transition-none"
                                onClick={() => setReviewsPerPage(prev => prev < selectedProduct?.reviews.length ? prev = selectedProduct.reviews.length : prev)}>
                                load more reviews</Button>
                        )
                    }
                </div>


            </div>





            {/* here goes related products */}
            <h3 className="uppercase font-extrabold text-lg">you may also like</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
                {
                    currentRelatedProducts.map((rp, index) => {
                        return (
                            <div className="card border border-gray-200 p-3 rounded-lg bg-gray-100" key={index}>
                                <div className="card-header group overflow-hidden">
                                    <img className="group-hover:scale-110 transition-all duration-500"
                                        src="../../../public/heroRightSide-removebg-preview.png" alt="" />
                                </div>

                                <div className="card-body">
                                    <p>{`Title : ${rp?.title || 'no title provided'}`}</p>
                                    <p>{`Price : ${rp?.price || 'no price'}`}</p>

                                </div>
                                <div className="card-footer flex justify-evenly mt-3">
                                    <button onClick={() =>{ navigate(`/products/${rp.id}`) ; window.scrollTo({top : 0 , behavior : 'smooth'})}}
                                     className="relative overflow-hidden bg-blue-500 text-white px-3 py-1 rounded-lg group">
                                        <div className="absolute left-0 top-0 bg-black w-full h-0 group-hover:h-full transition-all duration-300"></div>
                                        <span className="relative z-10">show details</span>
                                    </button>
                                    {/* <Button className='bg-blue-500' onClick={() => navigate(`/products/${rp.id}`)}>show details</Button> */}
                                    <CartButton product={{ ...rp, color: itemColor }} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default ProductsDetails