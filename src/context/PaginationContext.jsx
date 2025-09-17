import { createContext, useContext, useState } from "react";
export const PaginationContext = createContext()

export function PaginationProvider({children}){
    const [currentPage , setCurrentPage] = useState(1)

    const itemsPerPage = 8
    const paginate  = (data) => {
        const last  = currentPage * itemsPerPage;
        const start = last - itemsPerPage 
        return data.slice(start , last)
    };


    const nextPage = (totalItems) => {
        const totalPages = Math.ceil(totalItems / itemsPerPage)
        if(currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        if(currentPage > 1) setCurrentPage(currentPage - 1)
    }

    return (
        <PaginationContext.Provider value={{ currentPage , itemsPerPage , paginate ,
         nextPage , prevPage , setCurrentPage }}>
            {children}
        </PaginationContext.Provider>
    )
}