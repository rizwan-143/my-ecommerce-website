import { useContext, useState } from "react"
import ProductsContext from "../../context/ProductsContext"
import ProductsCard from "./ProductsCard";
import Pagination from "../layout/Pagination";
function ProductsList() {
    const [currentPage , setCurretPage] = useState(1)

    const { products } = useContext(ProductsContext);
    console.log(products);

    const productsPerPage = 8;
    const totalPages  = Math.ceil(products.length / productsPerPage);
    const indexOfLast = currentPage * productsPerPage;
    const indexOfStart = indexOfLast - productsPerPage;
    const currentItems = products.slice(indexOfStart , indexOfLast)


    function handlePrev(){
        if(currentPage > 1) {
            setCurretPage(currentPage - 1)
        }
    }

    function handleNext(){
        if(currentPage < totalPages) {
            setCurretPage(currentPage + 1)
        }
    }


    return (

        <>



        <h3 className="font-extrabold text-[30px] text-center capitalize">our products</h3>
       

        <div className="grid sm:grid-col-1 md:grid-cols-4 px-3 gap-4">

            {
                currentItems && currentItems.length === 0 ? (

                    <p>loding products</p>
                ) : (
                    currentItems.map((item, index) => {
                        return (
                            <>
                                <ProductsCard key={index} product={item} />

                            </>
                        )
                    })
                )
                
            }

        </div>
            {/* here goes pagination */}
        <Pagination  handlePrev ={handlePrev} handleNext = {handleNext}
        currentPage = {currentPage}  onPageChange = {setCurretPage} totalPages ={totalPages} />
 </>
    )
}

export default ProductsList