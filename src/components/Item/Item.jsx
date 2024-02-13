import { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import './item.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Item = (props) => {
    useEffect(() => {
        if (window.innerWidth <= 768) {
            const splide = new Splide('.splide', {
                type: 'loop',
                drag: 'free',
                focus: 'center',
                perPage: 3,
                autoScroll: {
                    speed: -1,
                },
            });
            splide.mount();
        }
    }, []);

    return (

        <div className='item'>
            <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0, 0)} src={props.image} alt='' /> </Link>
            <p> {props.name} </p>

            <div className='item-prices'>
                <div className='item-price-new'>
                    ${props.new_price}
                </div>

                <div className='item-price-old'>
                    ${props.old_price}
                </div>

            </div>
        </div>

    )
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    new_price: PropTypes.number.isRequired,
    old_price: PropTypes.number.isRequired
}

