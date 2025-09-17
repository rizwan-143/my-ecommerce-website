import { useContext, useEffect, useState } from "react"
import Input from "../ui/Input"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
function Header() {

    const [mobileView, setMObileView] = useState(true)
    const [searchOnSmallScreen, setSearchOnSmallScreen] = useState(true)
    const { loginUser } = useContext(AuthContext)
    const [showTopButton, setShowTopButton] = useState('hidden')

    const navigate = useNavigate()

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowTopButton("fixed")
            } else {
                setShowTopButton('hidden')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])


    return (
        <>


            <header>
                {/* here header top section */}

                {
                    loginUser || <div className="header-signUp bg-black text-white flex gap-2 item-center justify-center 
                            py-1 font-thin text-[10px] lg:text-[13px] ">
                        <p>sign up now and get 20% of for your first order .</p>
                        <NavLink to='/register'
                            className='font-bold underline underline-offset-1' >sign up</NavLink>
                    </div>
                }




                {/* here navabr */}
                <nav className="flex justify-around py-2 items-center">


                    {/* Here humberger */}
                    <div className="lg:hidden">
                        <i class="fa-solid fa-bars-staggered" onClick={() => setMObileView(!mobileView)}></i>
                    </div>


                    {/* here logo */}
                    <div>
                        <NavLink to='/' className="uppercase font-extrabold text-[25px]">shop.co</NavLink>
                    </div>



                    {/* nav menu */}
                    <ul className={`flex absolute left-0 top-0 bg-gray-300 flex-col p-3 h-screen items-center gap-4 capitalize 
                                    lg:static lg:translate-x-0 lg:h-auto lg:flex-row lg:bg-transparent lg:transition-none  ${mobileView ? '-translate-x-full' : 'translate-x-0 transition-all duration-500'} `}>
                        <li className=""><button className="absolute right-2 top-2 bg-gray-400 p-2 lg:hidden w-5 h-5 flex justify-center items-center rounded-lg"
                            onClick={() => setMObileView(!mobileView)}>x</button></li>
                        <li><NavLink to='/products'>shop now</NavLink></li>
                        <li><NavLink to='/onSale'>on sale</NavLink></li>
                        <li><NavLink to='/newArrivals' >new arrivals</NavLink></li>
                        <li><NavLink to='/brands' >brands</NavLink></li>
                    </ul>


                    {/* her nav search */}
                    <form action="" onSubmit={(e) => e.preventDefault()} className={`absolute top-0 h-screen bg-gray-100 w-screen flex items-center justify-center
                                             lg:static lg:h-auto lg:w-auto lg:translate-y-0 lg:bg-transparent lg:transition-none ${searchOnSmallScreen ? '-translate-y-full' : 'translate-y-0 transition-all duration-700 bg-opacity-80'}`}>
                        <div className="input-group flex  items-center px-2 border border-gray-200 bg-gray-200 rounded-full">
                            <button className="absolute right-2 top-1 bg-gray-400 p-2 lg:hidden w-5 h-5 flex justify-center items-center rounded-lg"
                                onClick={() => setSearchOnSmallScreen(!searchOnSmallScreen)}>x</button>
                            <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="border-gray-400 w-[150px] lg:w-[250px]"
                            />
                        </div>
                    </form>

                    {/* search icon */}
                    <div className="lg:hidden">
                        <i class="fa-solid fa-magnifying-glass text-gray-400" onClick={() => setSearchOnSmallScreen(!searchOnSmallScreen)}></i>
                    </div>



                    {/* here goea cart and login icons */}
                    <div className="flex gap-2 items-center">
                        <div className="cart-icon">
                            <NavLink to='/cart' ><i class="fa-solid fa-cart-shopping"></i></NavLink>
                        </div>
                        <div className="login-icon">
                            {
                                loginUser || <NavLink to='/login' ><i class="fa-regular fa-circle-user"></i></NavLink>
                            }
                            {
                                loginUser && <div className="relative group">
                                    <h2 className="cursor-pointer ">my profile</h2>
                                    <ul className=" absolute let-0 p-2 rounded-md w-full
                                     bg-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                                        <li><NavLink to='/cart' >my cart</NavLink></li>
                                        <li><button className="" onClick={() => { localStorage.removeItem('loginUser'); navigate('/') ; window.location.reload() }} >log out</button></li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </nav>
            </header>

                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}  className={`top-btn flex flex-col gap-4  text-white fixed bg-black p-2 rounded-lg bottom-20 right-7 z-20 animate-bounce ${showTopButton}`}>
                    <i class="fa-regular fa-circle-up"></i>
                </button>
                <a href="https://wa.me/923158682971" target="_blank" className="bg-green-600 text-white p-2 z-20 rounded-full w-fit fixed bottom-6 right-7 animate-bounce" >
                    <i class="fa-brands fa-whatsapp"></i>
                </a>

        </>
    )
}

export default Header