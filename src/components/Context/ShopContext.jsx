import PropTypes from 'prop-types'

import { createContext, useState } from 'react'

import all_product from '../assets/all_product'

// import cartItems from '../CartItems/CartItems'

export const ShopContext = createContext(null)

// export const ShopContextProvider = (props) => {
//     const contextValue = { all_product }

//     const getDefaultCart = () => {
//         let cart = {}
//         for (let index = 0; index < all_product.length + 1; cart++)
//             cart[index] = 0
//     }
//     return cart
// }

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) =>
                    product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
        let totalItem = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }


    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart }
    // const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )

}

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired

}


