import Button from "../ui/Button";
function Pagination({totalPages , currentPage , onPageChange , handlePrev , handleNext}){

    const pages = [];

    for(let i = 1 ; i <= totalPages ; i++){
        pages.push(i)
    }
    console.log(pages);
    

    return (
        <>
        
        <div className="flex justify-center items-center gap-3 my-4 ">
           <Button onClick = {() => handlePrev()}
            className = {`${currentPage === 1 ? 'cursor-not-allowed' : ''}`} >prev</Button>


            {
                // <Button>{currentPage}</Button>
                <p>page {currentPage} of  {pages.length} </p>
            }
            
            {/* {
                pages.map((_ , index) => (
     <Button key={index} onClick={() => onPageChange(index)} className = {`${currentPage === index ? 'bg-blue-400' : ''} duration-100`}>
        {index}
    </Button>
))

} */}
           <Button onClick = {() => handleNext()} className = {`${currentPage === pages.length ? 'cursor-not-allowed' : ''}`} >next</Button>
</div>

        
        </>
    )
}

export default Pagination