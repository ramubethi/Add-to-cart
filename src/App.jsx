import { useContext } from "react";
import ProductList from  "./ProductList"
import { ProductsProvider,ProductsContext } from "./context/ProductsContext";
// import TaskManagementApp from ".//assets/TaskManagementApp"
import './App.css'


const Header = () => {
  const { state } = useContext(ProductsContext);

return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Product Store 🛒</h1>
          <div className="relative">
              <span className="text-lg font-semibold">Cart</span>
              {state.cart.length > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute -top-2 -right-4">
                    {state.cart.length}
                  </span>
              )}
          </div>
      </div>
  );
};


function App() {
  return(
  <ProductsProvider>
  <div className="bg-yellow-100">
  <div className="min-h-screen bg-gray-100">
  <Header />
          
          <ProductList />
      </div>
  </div>
</ProductsProvider>
);
}
export default App
