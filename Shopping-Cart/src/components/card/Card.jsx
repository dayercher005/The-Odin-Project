import { useState } from "react"
import CartButton from "../cartButton/CartButton.jsx"

export default function Card({clickHandler, name, price, image}){

    const [quantity, setQuantity] = useState(0)

    const addQuantity = () => {
        setQuantity(quantity => quantity += 1)
    }

    const reduceQuantity = () => {
        if (quantity <= 0){
            return
        }
        setQuantity(quantity => quantity -= 1)
    }

    const returnDetails = () => {
        clickHandler(name, quantity, price)
    }

    return(
        <div className="flex flex-col bg-white rounded-2xl hover:scale-105 w-100 transition gap-4 max-w-80 hover:shadow-xl">
            <h1 className="text-3xl basis-1/3 font-Caveat text-center px-2">{name}</h1>
            <img className="size-35 basis-1/3 mx-auto" src={image}></img>
            <p className="text-3xl basis-1/6 text-center font-Caveat">USD {price}</p>
            <div className="flex basis-1/6 justify-center items-center">
                <button className="rounded-full bg-green-400 size-10 text-2xl text-center mx-2.5 hover:bg-green-500 hover:scale-110 transition hover:shadow-xl" onClick={addQuantity}> + </button>
                <label className="font-Caveat text-4xl">Qty: </label>
                <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} className="h-8 w-15 font-Caveat text-2xl px-2 mx-3"/>
                <button className="rounded-full bg-green-400 size-10 text-2xl text-center mx-2.5 hover:bg-green-500 hover:scale-110 transition hover:shadow-xl" onClick={reduceQuantity}> - </button>
            </div>
            <CartButton onClick={returnDetails}></CartButton>
        </div>
    )
}