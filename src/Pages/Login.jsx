import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext"; // ✅ Import context

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { dispatch, darkMode } = useContext(ProductsContext); // ✅ Use context

    // Dummy user credentials
    const validUser = {
        email: "ramubethi6@gmail.com",
        password: "Ramu123",
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === validUser.email && password === validUser.password) {
            dispatch({ type: "LOGIN" }); // ✅ Dispatch login action
            navigate("/"); // ✅ Redirect to home after login
        } else {
            setError("Invalid email or password!");
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen transition ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}>
            <h2 className="text-3xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-3"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-3"
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
