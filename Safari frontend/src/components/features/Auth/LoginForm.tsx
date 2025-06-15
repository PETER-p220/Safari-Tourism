import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ message: "", type: "" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ message: "", type: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login", formData);
      console.log("API Response:", response.data); // Debug: Log the full response

      // Validate response structure
      if (!response.data.success) {
        throw new Error(response.data.message || "Login failed");
      }

      const { data } = response.data;
      if (!data || !data.token || !data.role) {
        throw new Error("Invalid response structure: Missing token or role");
      }

      // Construct user object if not provided
      const user = data.user || {}; // Fallback to empty object if data.user is missing
      user.role = data.role; // Ensure role is attached to user object for AuthContext

      // Call login function with the correct structure
      login({
        role: data.role,
        token: data.token,
        user: user,
      });

      setStatus({ message: response.data.message || "Login successful!", type: "success" });
      setFormData({ email: "", password: "" });

      // Navigate based on role
      switch (data.role) {
        case "user":
          navigate("/packages");
          break;
        case "service_provider":
          navigate("/Dashboard", { replace: true });
          break;
        case "admin":
          navigate("/AdminDashboard", { replace: true });
          break;
        default:
          navigate("/unauthorized");
      }
    } catch (error) {
      console.error("Login Error:", error); // Debug: Log the error details
      setStatus({
        message:
          error.response?.data?.message ||
          error.message ||
          "Login failed. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

        {status.message && (
          <div
            className={`p-4 mb-4 rounded-lg ${
              status.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/auth/signup" className="text-blue-600 hover:text-blue-800 font-medium">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;