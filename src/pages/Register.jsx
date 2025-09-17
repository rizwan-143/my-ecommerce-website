import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { NavLink } from "react-router-dom"
function Register(){

    const {handleRegisterForm} = useContext(AuthContext)

    return (
        <>

        <div className="h-screen w-full flex items-center justify-center px-2">
        <form action="" onSubmit={handleRegisterForm}
         className=" flex flex-col justify-evenly
          w-full md:w-1/3 border border-gray-200 h-[70%] rounded-lg shadow-lg p-5" >
            <div className="">
                <h1>register your account</h1>
            </div>
        <div className="col flex flex-col gap-2">
            <label htmlFor="">name</label>
            <div className="input-group border border-gray-400 flex items-center
                             p-2 rounded-full ">
                <input type="text" placeholder="name"
                 className=" bg-transparent focus:outline-none focus:ring-0 focus:border-0  w-full " name="registername" id="" />
                <i class="fa-solid fa-user"></i>
            </div>
        </div>
        <div className="col flex flex-col gap-2">
            <label htmlFor="">email</label>
            <div className="input-group border border-gray-400 flex items-center
                             p-2 rounded-full ">
                <input type="text" placeholder="Email"
                 className=" bg-transparent focus:outline-none focus:ring-0 focus:border-0  w-full " name="registeremail" id="" />
                <i class="fa-solid fa-envelope"></i>
            </div>
        </div>
        <div className="col flex flex-col gap-2">
            <label htmlFor="">password</label>
            <div className="input-group border border-gray-400 flex items-center
                             p-2 rounded-full ">
                <input type="password" placeholder="Password"
                 className=" bg-transparent focus:outline-none focus:ring-0 focus:border-0  w-full " name="registerpassword" id="" />
                <i class="fa-solid fa-key"></i>
            </div>
        </div>
        <div className="flex gap-3 items-center">
            <button className="bg-green-600 px-5 py-1 rounded-lg text-white capitalize" >register</button>
            <NavLink to = '/login' className={'text-blue-500 underline'}>have account ?</NavLink>
        </div>
        </form>
        </div>
        
        </>
    )
}

export default Register