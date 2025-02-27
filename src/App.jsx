import Header from "./Components/Header";
import ProductList from  "./Pages/ProductList"
import { ProductsProvider, } from "./context/ProductsContext";
import ProductDetail from "./Pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TaskManagementApp from ".//assets/TaskManagementApp"
import ProtectedRoutes from "./Pages/ProtectedRoutes"
import './App.css'
import Cart from "./Pages/Cart"
import Login from "./Pages/Login";
import CheckOut from "./Pages/CheckOut";

function App() {
  return (
    <ProductsProvider>
      <Router>


      
      <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          </Route>




        <Header />
        <Routes>
        <Route path="/productDetails" element={<ProductList />} />





          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} /> 
        
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
}
export default App
