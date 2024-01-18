import './footer.css'

import logo from '../assets/logo.png'
import instagram_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={logo} alt="" />
                <p> TREND</p>
            </div>

            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    <img src={instagram_icon} alt="" />
                </div>

                <div className='footer-icons-container'>
                    <img src={whatsapp_icon} alt="" />
                </div>

                <div className='footer-copyright'>
                    <p> Copyright {new Date().getFullYear()} - All Rigth Reserved</p>
                </div>

            </div>

        </div>
    )
}