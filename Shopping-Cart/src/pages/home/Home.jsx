import React from 'react'
import Navigation from '/src/components/navbar/Navigation.jsx'
import { Outlet } from 'react-router'

export default function Home() {

    const [cartItems, setCartItems] = React.useState([])

    const cartQuantity = cartItems.reduce((totalQuantity, item) => {
       return totalQuantity + item.quantity
    }, 0)

    return(
        <div className="h-auto bg-linear-to-br from-pink-500 to-sky-600">
            <div className="flex justify-center items-center">
                <Navigation></Navigation>
                <div>
                    <p className="rounded-xl text-center bg-white font-MomoSignature p-2">Items: {cartQuantity}</p>
                </div>
            </div>

            <Outlet context={[cartItems, setCartItems]}/>
        </div>
    )
}