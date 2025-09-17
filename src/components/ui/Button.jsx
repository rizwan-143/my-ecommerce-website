
function Button({children , ...restAttibutes}){

 const btnStyle = {
        hoverEffect : 'hover:bg-white hover:text-black transition-all duration-1000',
        btnLayout : 'px-3 py-1 rounded-lg font-bold',
    };

    const btnColors = {
        blackBtn : 'bg-black text-white',
        whiteBtn : 'bg-white text-black'
    }
    return (
        <>
        
        <button {...restAttibutes} className={`${btnStyle.hoverEffect} ${btnStyle.btnLayout}
                                              ${btnColors.blackBtn} ${restAttibutes.className || ''}`}>{children}</button>
        
        </>
    )
}

export default Button