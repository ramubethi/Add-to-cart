import Header from "./Components/Header";
import ProductList from  "./Pages/ProductList"
import { ProductsProvider, } from "./context/ProductsContext";
import ProductDetail from "./Pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TaskManagementApp from ".//assets/TaskManagementApp"
import './App.css'
import Cart from "./Pages/Cart"
import Login from "./Pages/Login";
import CheckOut from "./Pages/CheckOut";

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Header />
        <Routes>
        <Route path="/productDetails" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
}
export default App
