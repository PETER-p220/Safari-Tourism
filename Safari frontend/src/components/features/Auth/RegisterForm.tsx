import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const RegisterForm: React.FC<{ onClose?: () => void }> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirm_password: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ message: "", type: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setStatus({ message: "Passwords do not match.", type: "error" });
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/api/register", formData);
      setStatus({ message: "Account created successfully!", type: "success" });
      setFormData({ name: "", email: "", phone: "", company: "",password: "", confirm_password: "" });
      console.log("Registration successful:", response.data);
      setTimeout(() => {
        navigate("/auth/login");
      }, 1000);
    } catch (error) {
      setStatus({ message: "Error creating account. Please try again.", type: "error" });
      console.error("Registration error:", error);
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register</h2>
      {status.message && (
        <div
          className={`mb-4 p-3 rounded-md text-white ${
            status.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
          role="alert"
        >
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="phone_no" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            id="phone_no"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your phone number"
          />
        </div>
         <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="name"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter company name"
          />
        </div>
        <div></div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          Create Account
        </button>
        <div className="text-center mt-4">
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
