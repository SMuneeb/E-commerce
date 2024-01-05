import Navbar from "./Components/Navbar/navbar"
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCatogery from "./Pages/ShopCatogery";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCatogery category="mens" />}/>
        <Route path="/womens" element={<ShopCatogery category="womens"/>}/>
        <Route path="/kids" element={<ShopCatogery category="kids"/>}/>
        <Route path="/kids" element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
