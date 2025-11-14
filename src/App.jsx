import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import ViewProduct from './pages/ViewProduct'
import WishList from './pages/WishList'
import Cart from './pages/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/products/:id/view" element={<ViewProduct />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
