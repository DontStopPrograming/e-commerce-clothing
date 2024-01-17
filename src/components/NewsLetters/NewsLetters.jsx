import './newsLetters.css'

export const NewsLetters = () => {
    return (
        <div className='newsletter'>
            <h1> Get Exclusive Offers On Your Email</h1>
            <p> Suscribe to our newletters and stay update </p>

            <div>
                <input type="email" placeholder='Your Email Id' />
                <button> Suscribe </button>
            </div>

        </div>


    )
}