import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext"; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { dispatch, darkMode } = useContext(ProductsContext); 

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); 
    
        try {
            const response = await fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
    
            console.log("Response status:", response.status);
    
            const data = await response.json();
            console.log("Response data:", data);
    
            if (response.ok) {
                localStorage.setItem("token", data.token); 
                dispatch({ type: "LOGIN" }); 
                navigate("/"); 
            } else {
                setError(data.error || "Login failed!");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setError("Something went wrong! Please try again.");
        }
    };



    return (
        <div className={`flex flex-col items-center justify-center min-h-screen transition ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}>
            <h2 className="text-3xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin} className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"  }`}>
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full p-2 border rounded mb-3"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full p-2 border  rounded mb-3"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
