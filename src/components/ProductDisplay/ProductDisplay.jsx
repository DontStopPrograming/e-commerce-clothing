import './productDisplay.css'

import PropTypes from 'prop-types'

import { useContext } from 'react'

import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'

export const ProductDisplay = (props) => {
    const { product } = props
    const { addToCart } = useContext(ShopContext)

    if (!product || !product.image) {
        console.log('product undefined')
        return (
            <div className='productDisplay'>
                <p> Product not avaliable</p>
            </div>

        )
    }


    return (
        <div className='productDisplay'>
            <div className='productDisplay-left'>
                <div className='productDisplay-img-list'>
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>

                <div className='productDisplay-img'>
                    <img className='productDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>

            <div className='productDisplay-right'>
                <h1> {product.name} </h1>

                <div className='productDisplay-right-stars'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    {/* <p> (122) </p> */}
                </div>

                <div className='productDisplay-right-prices'>
                    <div className='productDisplay-right-price-old'>${product.old_price} </div>
                    <div className='productDisplay-right-price-new'>${product.new_price} </div>

                </div>

                <div className='productDisplay-right-description'>
                    A lightweight, usually knitted, pullover shirt,
                    close-fitting and with around neckline and short sleeves,
                    worn as an undershirt or outergarment
                </div>

                <div className='productDisplay-right-sizes'>
                    <h1> Select Size </h1>
                    <div className='productDisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}> ADD TO CART </button>
                <p className='productDisplay-right-category'> <span> Category: </span> Women, T-Shirt, Crop Top </p>
                <p className='productDisplay-right-category'> <span> Tags: </span> Modern, Latest </p>
            </div>
        </div>

    )
}

ProductDisplay.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        old_price: PropTypes.number.isRequired,
        new_price: PropTypes.number.isRequired
    }).isRequired
}


