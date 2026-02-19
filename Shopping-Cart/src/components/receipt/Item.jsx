import binIcon from "/src/assets/bin.svg"

export default function Item({name, quantity, price, CartItemsHandler}) {

    const removeHandler = () => {
        CartItemsHandler(name)
    }

    return(
        <div className="flex justify-center">
            <h1 className="flex-4/10 font-Caveat text-3xl p-2.5">{name}</h1>
            <p className="flex-3/10 font-Caveat text-3xl p-2.5">{quantity}</p>
            <p className="flex-2/10 font-Caveat text-3xl p-2.5">USD {quantity * price}</p>
            <div className="flex-2/10 text-center">
                <button onClick={removeHandler} className=" rounded-xl border-2 p-1.5 mt-1.5 hover:scale-110 hover:bg-slate-300 transition">
                    <img className=" size-7" src={binIcon} />
                </button>
            </div>
        </div>
    )
}