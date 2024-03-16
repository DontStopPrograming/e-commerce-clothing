import './offers.css'
import exclusive_image from '../assets/exclusive_image.png'

export const Offers = () => {
    return (
        <div className='offers'>
            <div className='offers-left'>
                <h1> Exclusive <br />
                    Offers for you </h1>
                <p> ONLY ON BEST SELLERS PRODUCTS </p>
                {/* <button> Check Now </button> */}
            </div>

            <div className='offers-right'>
                <img src={exclusive_image} alt="" />
            </div>

        </div>
    )
}