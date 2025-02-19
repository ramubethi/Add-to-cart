import { createContext, useReducer, useEffect } from "react";


const initialState = {
    products: [],
    cart:[],
    loading: true,
    error: null,
};

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext();


const productsReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return { ...state, products: action.payload, loading: false, error: null };
        case "FETCH_ERROR":
            return { products: [], loading: false, error: action.payload };
            case "ADD_TO_CART":
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                };
        default:
            return state;
    }
};




// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productsReducer, initialState);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                console.log("Fetched products:", data);
                dispatch({ type: "FETCH_SUCCESS", payload: data });
            } catch (error) {
                console.error("Fetch error:", error);
                dispatch({ type: "FETCH_ERROR", payload: error.message });
            }
        };
        fetchProducts();
    }, []);
    
    

    return (
        <ProductsContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductsContext.Provider>
    );
};
