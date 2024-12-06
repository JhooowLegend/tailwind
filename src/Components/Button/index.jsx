function Button({children, variant ="primary", isBold = false}){
    return(
        <button className={`flex items-center justify-center p-4 rounded-[35px] font-graphic text-x1 leading-5 ${variant === 'primary' ? "bg-primary text-white" : "bg-white text-primary"} ${isBold && 'font-graphic-bold'}`
        }>{children}</button>
    )
}

export default Button

/*
[] -> Você pode colocar um valor personalizado

*/