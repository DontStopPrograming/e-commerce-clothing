import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Shop } from './components/Pages/Shop'
import { ShopCategory } from './components/Pages/ShopCategory'
import { Product } from './components/Pages/Product'
import { Cart } from './components/Pages/Cart'
import { LoginSignUp } from './components/Pages/LoginSignUp'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Footer } from './components/Footer/Footer'

import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'

function App() {

  return (
    <>
      <Router>
        <Navbar
        />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category='women' />} />
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid' />} />

            <Route path='/product' element={<Product />} >
              <Route path=':productId' element={<Product />} />
            </Route>

            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignUp />} />

          </Routes>
        </main>

        <Footer />
      </Router>


    </>


  )
}

export default App
