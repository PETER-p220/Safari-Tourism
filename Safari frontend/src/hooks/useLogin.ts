import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import useAuth from "./useAuth";

type Loading = {
  login: boolean;
  logout: boolean;
  signup: boolean;
};

type Credentials = {
  email: string;
  password: string;
  confirm_password?: string; // Only needed for signup
};

const API_BASE_URL = "http://localhost:8000/api";
const LOGIN_ENDPOINT = `${API_BASE_URL}/login`;
const SIGNUP_ENDPOINT = `${API_BASE_URL}/register`;

const useLogin = () => {
  const [loading, setLoading] = useState<Loading>({
    login: false,
    logout: false,
    signup: false,
  });
  const { login: authLogin } = useAuth();

  const login = async (values: Credentials) => {
  setLoading((prev) => ({ ...prev, login: true }));
  try {
    const response = await axios.post(LOGIN_ENDPOINT, {
      email: values.email,   // changed from username to email
      password: values.password,
    });

    const data = response.data;

    if (data.success) {
      authLogin(data); // you might want to save token here too
      toast.success("Login successful!");
    } else {
      toast.error(data.message || "Invalid credentials.");
    }
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || "An error occurred during login.";
    console.error("Login error:", error);
    toast.error(errorMessage);
  } finally {
    setLoading((prev) => ({ ...prev, login: false }));
  }
};

  const signup = async (values: Credentials) => {
    setLoading((prev) => ({ ...prev, signup: true }));
    try {
      const response = await axios.post(SIGNUP_ENDPOINT, {
        name: values.email, // Assuming 'name' refers to the email in your backend
        password: values.password,
        confirm_password: values.confirm_password,
      });

      const data = response.data;

      if (data.success) {
        toast.success("Signup successful! You can now log in.");
      } else {
        toast.error(data.message || "Failed to sign up.");
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "An error occurred during signup.";
      console.error("Signup error:", error);
      toast.error(errorMessage);
    } finally {
      setLoading((prev) => ({ ...prev, signup: false }));
    }
  };

  const logout = () => {
    setLoading((prev) => ({ ...prev, logout: true }));
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      toast.success("Logged out successfully.");
      setTimeout(() => {
        window.location.reload(); // Optionally redirect or reload
      }, 500);
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("An error occurred during logout.");
    } finally {
      setLoading((prev) => ({ ...prev, logout: false }));
    }
  };

  return { login, signup, logout, loading };
};

export default useLogin;
