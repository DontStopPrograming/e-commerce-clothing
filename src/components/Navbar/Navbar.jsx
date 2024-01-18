import './navbar.css'

import { useState, useContext } from 'react'

import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'

export const Navbar = () => {

    const [menu, setMenu] = useState('shop')
    const { getTotalCartItems } = useContext(ShopContext)

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p> TREND </p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() => { setMenu('Shop') }}> <Link to='/'> Shop </Link> {menu === 'shop' ? <></> : <></>} </li>
                <li onClick={() => { setMenu('Men') }}> <Link to='/mens'> Men </Link>{menu === 'mens' ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu('Women') }}> <Link to='/womens'> Women </Link>{menu === 'womens' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('Kids') }}> <Link to='/kids'> Kids </Link>{menu === 'kids' ? <hr /> : <></>} </li>
            </ul>

            <div className='nav-login-cart'>
                <Link to='/login'> <button> Login </button> </Link>
                <Link to='/cart'>  <img src={cart_icon} alt="" /> </Link>

                <div className='nav-cart-count'> {getTotalCartItems()} </div>
            </div>
        </div>


    )
}
