import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { NavLink } from "react-router-dom"
function Login(){

    const {handleLoginForm} = useContext(AuthContext)

    return (
        <>

        <div className="h-screen w-full flex items-center justify-center px-2">
        <form action="" onSubmit={handleLoginForm}
         className=" flex flex-col justify-evenly
          w-full md:w-1/3 border border-gray-200 h-[70%] rounded-lg shadow-lg p-5" >
            <div className="">
                <h1>login your account</h1>
            </div>
        <div className="col flex flex-col gap-2">
            <label htmlFor="">user email</label>
            <div className="input-group border border-gray-400 flex items-center
                             p-2 rounded-full ">
                <input type="text" placeholder="Email"
                 className=" bg-transparent focus:outline-none focus:ring-0 focus:border-0  w-full " name="loginemail" id="" />
                <i class="fa-solid fa-envelope"></i>
            </div>
        </div>
        <div className="col flex flex-col gap-2">
            <label htmlFor="">user password</label>
            <div className="input-group border border-gray-400 flex items-center
                             p-2 rounded-full ">
                <input type="password" placeholder="Password"
                 className=" bg-transparent focus:outline-none focus:ring-0 focus:border-0  w-full " name="loginpassword" id="" />
                <i class="fa-solid fa-key"></i>
            </div>
        </div>
        <div className="flex gap-3 items-center">
            <button className="bg-green-600 px-5 py-1 rounded-lg text-white capitalize" >login</button>
            <NavLink to = '/register' className= 'text-blue-500 underline' >not have account ?</NavLink>
        </div>
        </form>
        </div>
        
        </>
    )
}

export default Login