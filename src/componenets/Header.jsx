import React from 'react'
import {Link} from 'react-router-dom'
import {Context} from '../Context'

function Header() {
    const {cartItems} = React.useContext(Context)
    function cartHasItems() {
        if (cartItems.length) {
            return <Link to='/cart'><i className='ri-shopping-cart-fill ri-fw ri-2x'></i></Link>
        } else {
            return <Link to='/cart'><i className='ri-shopping-cart-line ri-fw ri-2x'></i></Link>
        }
    }
    return (
        <header>
            <Link to='/'><h2>Pic Some</h2></Link>
            {cartHasItems()}
        </header>)
}
export default Header
