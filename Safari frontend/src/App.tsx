import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { BookingProvider } from "./context/BookingContext";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageDetail from "./pages/PackageDetail";
import BookingConfirmation from "./pages/BookingConfirmation";
import TourPackages from "./pages/TourPackages";
import NationalParks from "./pages/NationalParks";
import Dashboard from "./pages/provider/Dashboard"; // Likely meant for users
import AdminDashboard from "./pages/admin/AdminDashoard";
import ProviderDashboard from "./pages/provider/Dashboard";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import AuthProvider from "./context/AuthContext";
import Unauthorized from "./pages/Unauthorized"; // New component for unauthorized

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BookingProvider>
          <Router>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/unauthorized" element={<Unauthorized />} /> {/* Add this */}

              {/* Protected routes */}
              <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/packages" element={<Packages />} />
                <Route path="/tour-packages" element={<TourPackages />} />
                <Route path="/national-parks" element={<NationalParks />} />
                <Route path="/packages/:id" element={<PackageDetail />} />
                <Route
                  path="/booking/confirmation"
                  element={<BookingConfirmation />}
                />
              </Route>

              {/* Role-based protected routes */}
              <Route
                path="/"
                element={<ProtectedRoutes allowedRoles={["user", "admin","service_provider"]} />} // Allow both roles
              >
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/AdminDashboard" element={<AdminDashboard />} />
              </Route>

              {/* Provider-specific routes */}
              <Route
                path="/provider"
                element={<ProtectedRoutes allowedRoles={["service_provider"]} />}
              >
                <Route path="dashboard" element={<ProviderDashboard />} />
              </Route>

              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </BookingProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;