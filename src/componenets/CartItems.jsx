import React from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'
// import useHover from '../hooks/useHover' // added to use custom hooks //

function CartItems({item}) {   
    const {removeFromCart} = React.useContext(Context)
    const [hovered, setHovered] = React.useState('false')
    // const [hovered, ref] = useHover() // custom hook used instead of above line //
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    function handleClick() {
        return removeFromCart(item.id)
    }
    return (
        <div className='cart-item'>
            <i 
                className={iconClassName} 
                onClick={handleClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                // ref={ref} // custom hook used instead of above 2 lines //
            ></i>
            <img src={item.url} width='130px'/>
            <p>{'\u20b1336.15'}</p>
        </div>
    )    
}
CartItems.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}
export default CartItems