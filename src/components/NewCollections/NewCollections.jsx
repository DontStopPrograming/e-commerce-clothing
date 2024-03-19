import PropTypes from 'prop-types'

import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import new_collection from '../assets/new_collections'
import './newCollections.css'
import { Item } from '../Item/Item'


export const NewCollections = () => {

    const [stateWidth, setStateWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setStateWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className='new-collections'>
            <h1> NEW COLLECTIONS </h1>

            {window.innerWidth <= 768 ? (
                <div className='collections'>
                    <Carousel autoPlay={true} showArrows={true} showThumbs={false} infiniteLoop={true}>
                        {new_collection.map((item, id) => {
                            return <Item key={id} id={id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        })}

                    </Carousel>
                </div>
            ) : (

                <div className='collections'>
                    {new_collection.map((item, id) => {
                        return <Item key={id} id={id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>

            )}

        </div>
    )
}

NewCollections.propTypes = {

}