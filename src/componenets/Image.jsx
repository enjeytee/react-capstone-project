import React from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'
// import useHover from '../hooks/useHover' // added to use custom hooks //

function Image(props) {
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = React.useContext(Context)
    const [hovered, setHovered] = React.useState(false)
    // const [hovered, ref] = useHover() // custom hook used instead of above line //
    function heartIcon() {
        if (props.img.isFavorite) {
            return <i onClick={() => toggleFavorite(props.img.id)} className="ri-heart-fill favorite"></i>
        } else if (hovered) {
            return <i onClick={() => toggleFavorite(props.img.id)} className="ri-heart-line favorite"></i>
        }
    }
    function cartIcon() {
        if (cartItems.find(img => img === props.img)) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(props.img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(props.img)}></i>
        }
    }
    return (
        <div 
            className={`${props.className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            // ref={ref} // custom hook used instead of above 2 lines //
        >
            <img 
                src={props.img.url} 
                className='image-grid'
            />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}
export default Image