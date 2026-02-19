import { useOutletContext } from 'react-router-dom'
import Receipt from '/src/components/receipt/Receipt.jsx'
import Item from '/src/components/receipt/Item.jsx'

export default function Cart() {

    const [cartItems, setCartItems] = useOutletContext();

    const CartItemsRemover = (name) => {
        setCartItems(cartItems => cartItems.filter(item => item.name !== name))
    }

    const cartList = cartItems.map(item => 
        <Item name={item.name} quantity={item.quantity} price={item.price} CartItemsHandler={CartItemsRemover}>
        </Item>
    )


    const priceCalculator = cartItems.reduce((total, currentItem) => {
        return total + (currentItem.price * currentItem.quantity);
    }, 0);
         

    return (
        <Receipt cartList={cartList} totalPrice={priceCalculator}>
        </Receipt>
    )
}