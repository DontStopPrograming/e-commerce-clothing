import './navbar.css'

import { useState, useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

import logo from '../assets/logo.png'
import cart_icon from '../assets/cart.svg'

import LoginImg from '../assets/user.svg'
import MenuImg from '../assets/menu.svg'

export const Navbar = () => {

    const [menu, setMenu] = useState('shop')
    const { getTotalCartItems } = useContext(ShopContext)

    const [watchMenu, setWatchMenu] = useState(false)

    const [prevScrollPos, setPrevScrollPos] = useState(0)

    const toggleMenu = () => {
        setWatchMenu(!watchMenu)

    }

    const handleClickMenuItem = () => {
        setWatchMenu(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            if (currentScrollPos > prevScrollPos && watchMenu) {
                setWatchMenu(false)
            }
            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [prevScrollPos, watchMenu])

    return (
        <div className='navbar'>

            <Link to='/'>
                <div className='nav-logo'>
                    <img src={logo} alt="" />
                    <p> TREND </p>
                </div>
            </Link>

            {window.innerWidth <= 768 ? (
                <div className='menu-icon' onClick={toggleMenu}>
                    <img src={MenuImg} alt="" />
                </div>
            ) : (
                <ul className='nav-menu'>
                    <li onClick={() => { setMenu('Shop') }}> <Link to='/'> Shop  </Link> {menu === 'shop' ? <></> : <></>} </li>
                    <li onClick={() => { setMenu('Men') }}> <Link to='/mens'> Men </Link>{menu === 'mens' ? <hr /> : <></>} </li>
                    <li onClick={() => { setMenu('Women') }}> <Link to='/womens'> Women </Link>{menu === 'womens' ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu('Kids') }}> <Link to='/kids'> Kids </Link>{menu === 'kids' ? <hr /> : <></>} </li>
                </ul>)

            }

            {window.innerWidth <= 768 && watchMenu ? (
                <ul className='nav-menu-responsive'>
                    <li onClick={() => {
                        setMenu('Shop')
                        handleClickMenuItem()
                    }}> <Link to='/'> Shop </Link> {menu === 'shop' ? <></> : <></>} </li>

                    <li onClick={() => {
                        setMenu('Men')
                        handleClickMenuItem()
                    }}> <Link to='/mens'> Men </Link>{menu === 'mens' ? <hr /> : <></>} </li>

                    <li onClick={() => {
                        setMenu('Women')
                        handleClickMenuItem()
                    }}> <Link to='/womens'> Women </Link>{menu === 'womens' ? <hr /> : <></>}</li>

                    <li onClick={() => {
                        setMenu('Kids')
                        handleClickMenuItem()
                    }}> <Link to='/kids'> Kids </Link>{menu === 'kids' ? <hr /> : <></>} </li>
                </ul>


            ) : null}

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
