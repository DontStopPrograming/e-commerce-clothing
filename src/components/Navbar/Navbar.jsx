import './navbar.css'

import { useState, useContext } from 'react'

import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'

import ShopImg from '../assets/home.png'
import MenImg from '../assets/tie.png'
import WomenImg from '../assets/dress.png'
import KidsImg from '../assets/baby.png'
import LoginImg from '../assets/user.png'

export const Navbar = () => {

    const [menu, setMenu] = useState('shop')
    const { getTotalCartItems } = useContext(ShopContext)

    return (
        <div className='navbar'>

            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p> TREND </p>
            </div>

            {window.innerWidth <= 768 ? (
                <ul className='nav-menu'>
                    <li onClick={() => { setMenu('Shop') }}> <Link to='/'> <img src={ShopImg} /> </Link> {menu === 'shop' ? <></> : <></>} </li>
                    <li onClick={() => { setMenu('Men') }}> <Link to='/mens'> <img src={MenImg} /> </Link>{menu === 'mens' ? <hr /> : <></>} </li>
                    <li onClick={() => { setMenu('Women') }}> <Link to='/womens'> <img src={WomenImg} /> </Link>{menu === 'womens' ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu('Kids') }}> <Link to='/kids'> <img src={KidsImg} /> </Link>{menu === 'kids' ? <hr /> : <></>} </li>
                </ul>

            ) : (
                <ul className='nav-menu'>
                    <li onClick={() => { setMenu('Shop') }}> <Link to='/'> Shop </Link> {menu === 'shop' ? <></> : <></>} </li>
                    <li onClick={() => { setMenu('Men') }}> <Link to='/mens'> Men </Link>{menu === 'mens' ? <hr /> : <></>} </li>
                    <li onClick={() => { setMenu('Women') }}> <Link to='/womens'> Women </Link>{menu === 'womens' ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu('Kids') }}> <Link to='/kids'> Kids </Link>{menu === 'kids' ? <hr /> : <></>} </li>
                </ul>
            )}

            {window.innerWidth <= 768 ? (
                <div className='nav-login-cart'>
                    <Link to='/login'> <button> <img src={LoginImg} /> </button> </Link>
                    <Link to='/cart'>  <img src={cart_icon} alt="" /> </Link>

                    <div className='nav-cart-count'>
                        {getTotalCartItems()}
                    </div>
                </div>
            ) : (

                <div className='nav-login-cart'>
                    <Link to='/login'> <button> Login </button> </Link>
                    <Link to='/cart'>  <img src={cart_icon} alt="" /> </Link>

                    <div className='nav-cart-count'>
                        {getTotalCartItems()}
                    </div>
                </div>
            )}


        </div>


    )
}
