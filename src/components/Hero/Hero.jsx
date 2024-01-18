import './hero.css'

import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

export const Hero = () => {
    return (
        <>
            <div className='hero'>

                {/* This is left */}
                <div className='left'>
                    {/* <div className='hero-hand-icon'>
                        <p> new</p>
                        <img src={hand_icon} alt="" />
                    </div> */}


                    <div className='hero-left'>
                        <h2> NEW ARRIVALS ONLY</h2>
                        <h3> Collections <br />
                            for everyone </h3>
                    </div>


                    <div className='hero-latest-btn'>
                        <div> Latest Collection </div>
                        <img src={arrow_icon} alt="" />
                    </div>


                </div>
                {/* This is right */}

                <div>
                    <div className='hero-right'>
                        <img src={hero_image} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}