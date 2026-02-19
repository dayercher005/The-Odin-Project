export default function Receipt({cartList, totalPrice}){

    return(
        <div className="bg-linear-to-br from-pink-500 to-sky-600 h-screen">
            <div className="bg-white rounded-xl w-8/10 mx-auto">
                <div className="flex">
                    <h1 className="flex-4/10 font-bold font-Caveat text-5xl text-center border-b-4
                    border-b-neutral-400">Items</h1>
                    <h1 className="flex-3/10 font-bold font-Caveat text-5xl border-b-4
                    border-b-neutral-400">Quantity</h1>
                    <h1 className="flex-2/10 font-bold font-Caveat text-5xl border-b-4
                    border-b-neutral-400">Price:</h1>
                    <h1 className="flex-2/10 font-bold font-Caveat text-5xl border-b-4
                    border-b-neutral-400 text-center">Remove Item</h1>
                </div>
                {cartList}

                <div className="flex">
                    <h1 className="flex-1/2 font-extrabold text-center font-Caveat text-5xl
                    border-t-4 border-t-neutral-400">Total Price:</h1>
                    <h1 className="flex-1/2 font-extrabold font-Caveat justify-self-end text-5xl 
                    border-t-4 border-t-neutral-400">USD {totalPrice.toFixed(2)}</h1>
                </div>
            </div>
        </div>
    )
}