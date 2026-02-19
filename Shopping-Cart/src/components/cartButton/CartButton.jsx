export default function CartButton({onClick}) {

    return(
        <div className="flex justify-center pb-3.5">
            <button onClick={onClick} className="font-MomoSignature border-2xl rounded-xl bg-teal-400 w-6/10 py-1.5
             hover:bg-teal-500 hover:scale-110 hover:shadow-xl transition">Add to Cart</button>
        </div>
    )
}