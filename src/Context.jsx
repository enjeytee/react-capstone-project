import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                return {
                    ...photo, 
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }
    function addToCart(newItem) {
        setCartItems(prev => [...prev, newItem])
    }
    function removeFromCart(id){
        setCartItems(prev => prev.filter(item => item.id !== id))
    }
    function emptyCart() {
        setCartItems([])
    }
    return (
        <Context.Provider 
            value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}
        >
            {props.children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}
