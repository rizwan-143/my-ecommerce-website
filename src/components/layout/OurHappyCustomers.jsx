import { useContext, useEffect } from "react"
import ProductsContext from "../../context/ProductsContext"
import { PaginationContext } from "../../context/PaginationContext"
import Button from "../ui/Button"
function OurHappyCustomer() {
    const { products } = useContext(ProductsContext)
    const { currentPage, paginate,
        nextPage, prevPage,  } = useContext(PaginationContext)

    const happyReviews = products?.flatMap((product) => product?.reviews?.filter((review) => review?.rating === 5) || []) || []
    const PaginatedReviews = paginate(happyReviews)

    return (
        <>

            <div>
        <h1 className="uppercase font-bold text-[30px]" >our happy customer</h1>
                <h2>reviews :  (Page {currentPage})</h2>
                <ul className="grid sm:grid-cols-1 md:grid-cols-4 gap-3   ">
                    {PaginatedReviews.map((review, index) => (
                        <li key={index} className=" hover:bg-gray-200 transition-all duration-500 ease-in-out cursor-pointer hover:scale-105
                        border border-gray-300 p-4 rounded-lg bg-gray-100">
                            <p> {`rating :  ${review.rating}/5`}</p>
                            <p> {`posted by : ${review.user}`}</p>
                            <p>{review.comment}</p>
                            <p>posted on : {review.date}</p>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-2 justify-center mt-3">
                    <Button onClick={prevPage}>prev</Button>
                    <Button onClick = {(() => nextPage(happyReviews.length))} >next</Button>
                </div>
            </div>

        </>
    )
}

export default OurHappyCustomer