import { BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import MyOrders from "./pages/MyOrders"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Verify from "./pages/Verify"
import { useState } from "react"
import LoginPopup from "./components/LoginPopup"
import Order from "./pages/Order"

export default function App() {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <BrowserRouter>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <Header setShowLogin={setShowLogin}/>
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/producte" element= {<Product />} />
        <Route path=":productId" element={<Product />}/>
      <Route />
      <Route path="/cart" element={<Cart />}/>
      <Route path="/order" element={<Order />}/>
      <Route path="/verify" element={<Verify />}/>
      <Route path="/myorders" element={<MyOrders />}/>
    </Routes>
    </BrowserRouter>
  )
}
