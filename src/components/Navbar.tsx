import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegisterClick = () => {
    if (location.pathname === '/events') {
      // If already on events page, dispatch custom event to open modal
      window.dispatchEvent(new CustomEvent('openRegistrationModal'));
    } else {
      // Navigate to events page with a flag to open modal
      navigate('/events?openRegistration=true');
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${"bg-[#002349]/95 backdrop-blur-md shadow-lg"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold bg-[#ffb703] bg-clip-text text-transparent">
                SIVPC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleRegisterClick}
              className="px-4 py-2 bg-[#ffb703] text-black font-semibold rounded-lg hover:bg-[#e6a503] transition-colors duration-200"
            >
              Register Now
            </button>
            <Link to="/events" className="nav-link">
              Events
            </Link>
            <Link to="/prizes" className="nav-link">
              Prizes
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#957C3D] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={handleRegisterClick}
                className="block w-full text-left px-3 py-2 bg-[#ffb703] text-black font-semibold rounded-md hover:bg-[#e6a503] transition-colors duration-200"
              >
                Register Now
              </button>
              <Link
                to="/events"
                className="block px-3 py-2 text-white hover:bg-[#957C3D]/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/prizes"
                className="block px-3 py-2 text-white hover:bg-[#957C3D]/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prizes
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:bg-[#957C3D]/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:bg-[#957C3D]/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
