function Footer() {
    return (
        <>
            <div className="w-full py-5 bg-gray-300 relative flex flex-col gap-5 items-center justify-center mt-24 capitalize">
                <div className=" bg-black text-white py-5  mt-[-80px] rounded-lg p-3">
                    <ul className="w-full flex flex-col lg:flex-row gap-5 items-center justify-around">
                        <li>
                            <p
                                className="font-bold text-[20px] lg:text-[30px]">
                                stay up to date <br /> about our latest offers
                            </p>
                        </li>
                        <li>
                            <form action="" className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                                <div className="input-group flex relative items-center gap-1 bg-gray-300 text-black p-1 rounded-lg">
                                    <i className="fa-solid fa-envelope"></i>
                                    <input type="email" name="" id="" className="bg-transparent focus:ring-0 focus:outline-none" />
                                </div>
                                <button className="bg-gray-300 p-1 text-black rounded-lg">subscribe to news letter</button>
                            </form>
                        </li>
                    </ul>
                </div>

                <div className="w-full flex flex-col lg:flex-row justify-evenly px-2 gap-4">

                    <div className="">
                            <h3 className="font-bold uppercase text-[30px] mb-3">shop.co</h3>
                            <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, soluta?</p>
                            <ul className="flex gap-2 items-center">
                                <li><i class="fa-brands fa-facebook"></i></li>
                                <li><i class="fa-brands fa-twitter"></i></li>
                                <li><i class="fa-brands fa-instagram"></i></li>
                                <li><i class="fa-brands fa-telegram"></i></li>
                            </ul>
                    </div>

                    <div className="">
                        <h1 className="mb-3 font-bold">company</h1>
                        <ul>
                            <li>about</li>
                            <li>features</li>
                            <li>works</li>
                            <li>career</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="mb-3 font-bold">help</h1>
                        <ul>
                            <li>customer support</li>
                            <li>delivert details</li>
                            <li>help & support</li>
                            <li>privacy policy</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="mb-3 font-bold">faq</h1>
                        <ul>
                            <li>account</li>
                            <li>manage deliveries </li>
                            <li>orders</li>
                            <li>payments</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="mb-3 font-bold">resources</h1>
                        <ul>
                            <li>free ebook</li>
                            <li>development tutorials</li>
                            <li>how to - blog</li>
                            <li>youtube playlist</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer