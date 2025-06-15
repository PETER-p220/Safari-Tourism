import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PalmtreeIcon } from "lucide-react";
import { ThemeToggle } from "../ui";
import AuthModal from "../features/Auth/AuthModal";
import useAuth from "../../hooks/useAuth";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authView, setAuthView] = useState<"login" | "register">("login");
  const location = useLocation();
  const { logout, user } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Safari Packages", path: "/packages" },
    { name: "Tour campanies", path: "/tour-packages" },
    { name: "National Parks", path: "/national-parks" },
    // { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white dark:bg-gray-900 shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <PalmtreeIcon size={32} className="text-primary" />
              <span className="text-xl font-bold text-gray-900 font-display dark:text-white">
                Safari planner
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="items-center hidden space-x-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary dark:text-primary-light"
                      : "text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center space-x-4">
                <button
                  className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light"
                  onClick={() => logout()}
                >
                  Logout
                </button>
                {user && user?.role === "staff" ? (
                  <button className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light">
                    <Link to={"/Dashboard"}>Dashboard</Link>
                  </button>
                ) : (
                  <></>
                )}
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-4 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="bg-white shadow-xl md:hidden dark:bg-gray-800 animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-light"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col items-start justify-start w-full px-3 py-2 ga-4 gap it ite">
                <button
                  className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light"
                  onClick={() => logout()}
                >
                  Logout
                </button>
                {user && user?.role === "staff" ? (
                  <button className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light">
                    <Link to={"/Dashboard"}>Dashboard</Link>
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialView={authView}
      />
    </>
  );
};

export default Navbar;
