import React from 'react'
import {Context} from '../Context'
import CartItems from '../componenets/CartItems'

function Cart() {
    const {cartItems, emptyCart} = React.useContext(Context)
    const cartItemsElements = cartItems.map(item => {
        return (
            <CartItems key={item.id} item={item} />
        )
    })
    const totalCost = 336.15 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString('en-us', {style: 'currency', currency: 'PHP'})
    const [buttonText, setButtonText] = React.useState('Place Order')
    function handleClick() {
        setButtonText('Ordering...')
        setTimeout(() => {
            emptyCart()
            setButtonText('Place Order')
        }, 3000)
    }
    return (
        <main className='cart-page'>
            <h1>Check out</h1>
            {cartItemsElements}
            <p className='total-cost'>{`Total: ${totalCostDisplay}`}</p>
            {
                cartItems.length > 0 ?
                <div className='order-button'>
                    <button onClick={handleClick}>{buttonText}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}
export default Cart