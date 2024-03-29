import PropTypes from 'prop-types'

import { useContext } from 'react'
import '../Pages/CSS/shopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import { Item } from '../Item/Item'

export const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext)
    return (
        <div className='shop-category'>
            <img className='shopCategory-banner' src={props.banner} alt="" />
            <div className='shopCategory-indexSort'>
                <p>
                    <span> Showing 1-12 </span> out of 36 products
                </p>

                <div className='shopCategory-sort'>
                    Sort by<img src={dropdown_icon} alt='' />
                </div>

                <div className='shopCategory-products'>
                    {all_product.map((item, id) => {
                        if (props.category === item.category) {
                            return <Item key={id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                            // id={item.id}
                        }
                        return null
                    })}
                </div>

            </div>
        </div>
    )
}

ShopCategory.propTypes = {
    banner: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired

}