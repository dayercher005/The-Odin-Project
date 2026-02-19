import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import Card from "/src/components/card/Card.jsx"

export default function Shop() {

    const [shop, setShop] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [cartItems, setCartItems] = useOutletContext()

    const CartChecker = (itemName, itemQuantity, itemPrice) => {

        if(cartItems.some(item => item.name === itemName) === true){
            const itemIndex = cartItems.findIndex(item => item.name === itemName)
            const previousQuantity = cartItems[itemIndex].quantity
            setCartItems(cartArray => cartArray.filter(item => item.name !== itemName))
            setCartItems(cartArray => [...cartArray, {name: itemName, quantity: itemQuantity + previousQuantity, price: itemPrice}])
        } else {
            setCartItems(cartArray => [...cartArray, {name: itemName, quantity: itemQuantity, price: itemPrice}])
        }
        setCartItems(cartArray => cartArray.filter(item => item.quantity !== 0))
    }

    useEffect(() => {

        let ignore = false

        async function APICaller() {
            try{
                for(let index = 1; index < 18; index+=1){
                    const itemScript = await fetch(`https://fakestoreapi.com/products/${index}`, { mode: "cors" })
                    const itemData = await itemScript.json()
                    const itemName = itemData.title
                    const itemPrice = itemData.price
                    const itemImage = itemData.image

                    if (!ignore){
                        setShop(shop => [...shop, {name: itemName, price: itemPrice, image: itemImage}])
                    }
                }
            }

            catch(error){
                setError(error)
            }

            finally{
                setLoading(false)
            }
        }

        APICaller();

        return () => {
            ignore = true
        }
    }, [])

    const ShopItems = shop.map((item) => 
        <Card clickHandler={CartChecker} name={item.name} image={item.image} price={item.price}></Card>
    )

    


    if (loading) return (
        <div className="flex h-screen justify-center items-center bg-linear-to-br from-pink-500 to-sky-600">
            <p className="font-Caveat text-7xl">Loading ...</p>
        </div>
    )
    if (error) return (
        <div className="flex h-screen justify-center items-center bg-linear-to-br from-pink-500 to-sky-600">
            <p className="font-Caveat text-7xl">An error has been encountered</p>
        </div>
    
    )

    return(
        <div className="bg-linear-to-br from-pink-500 to-sky-600 h-auto grid grid-cols-6 gap-20 mx-2 pb-4">
            {ShopItems}
        </div>
    )
}