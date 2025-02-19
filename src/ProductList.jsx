import { useContext } from "react";
import {ProductsContext}  from "./context/ProductsContext";

const ProductList = () => {
    const { state, dispatch } = useContext(ProductsContext);
    if (state.loading) return <p>Loading products...</p>;
    if (state.error) return <p>Error: {state.error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {state.products.map((product) => {
            const isInCart = state.cart.some((item) => item.id === product.id)
            return (
                <div key={product.id} className="bg-white p-4 shadow-md rounded-lg text-center">
                    <img src={product.image} alt={product.title} className="h-64 w-full object-contain" />
                    <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                    <p className="text-blue-600 font-bold">${product.price}</p>
                    <button
                        className={`mt-3 px-4 py-2 rounded-md w-full ${
                            isInCart ? "bg-green-500 text-white" : "bg-blue-500 text-white hover:bg-blue-700"
                        }`}
                        onClick={() => !isInCart && dispatch({ type: "ADD_TO_CART", payload: product })}
                        disabled={isInCart}
                    >
                        {isInCart ? "Added to Cart ✅" : "Add to Cart"}
                    </button>
                </div>
            )
        })}
        </div>
    );
};

export default ProductList;