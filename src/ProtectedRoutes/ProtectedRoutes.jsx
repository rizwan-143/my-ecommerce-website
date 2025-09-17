import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function ProtectedRoutes() {
    const { loginUser } = useContext(AuthContext)

    if (!loginUser) {
        
        return (
            <>
        <Navigate to="/login" />
            </>
    )
    }

    // User logged in → render nested route(s)
    return <Outlet />
}

export default ProtectedRoutes
