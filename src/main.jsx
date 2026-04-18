import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Singleproduct from './pages/Singleproduct.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Cart from './pages/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/Products/:id' element={<Singleproduct/>}/>
      <Route path='/cart' element={<Cart/>}/>

    </Routes>

  </CartProvider>
  </BrowserRouter>

)
