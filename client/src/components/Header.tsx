import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useMedia } from "@/hooks/use-mobile";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMedia("(max-width: 768px)");
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/social", label: "Social Media" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary cursor-pointer">
                <span className="text-accent">BAKEMONO</span> J'GARAGE
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-medium transition duration-200 ${
                  location === link.href ? "text-accent" : "hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-neutral-dark focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        
        {/* Mobile Menu (Hidden by default) */}
        {isMobile && (
          <div className={`md:hidden py-4 border-t border-gray-200 ${mobileMenuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`font-medium transition duration-200 ${
                    location === link.href ? "text-accent" : "hover:text-accent"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
