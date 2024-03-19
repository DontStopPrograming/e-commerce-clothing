import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './popular.css'
import { Item } from '../Item/Item'
import data_product from '../assets/data'

export const Popular = () => {
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
        <div className='popular'>
            <h1> POPULAR IN WOMEN </h1>
            <hr />

            {/* <div className='popular-item'>

                <div className='slide-container'>
                    {data_product.map((item, i) => (

                        <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                    ))}
                </div>


            </div> */}

            <div className='popular-item'>

                {window.innerWidth <= 768 ? (
                    <div className='slide-container'>
                        <Carousel autoPlay={true} showArrows={true} showThumbs={false} infiniteLoop={true}>
                            {data_product.map((item, i) => (

                                <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                            ))}
                        </Carousel>
                    </div>
                ) : (
                    <div className='slide-container'>

                        {data_product.map((item, i) => (

                            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                        ))}

                    </div>
                )}



            </div>


        </div >

    )
}