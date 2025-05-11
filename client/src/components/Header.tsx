import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useMedia } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMedia("(max-width: 768px)");
  const [location] = useLocation();
  const { t } = useLanguage();
  
  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  
  // Function to handle both closing menu and scrolling to top
  const handleNavigate = () => {
    closeMobileMenu();
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/services", label: t('nav.services') },
    { href: "/gallery", label: t('nav.gallery') },
    { href: "/about", label: t('nav.about') },
    { href: "/social", label: t('nav.social') },
    { href: "/contact", label: t('nav.contact') },
    { href: "/analytics", label: t('nav.analytics') }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link 
              href="/"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img 
                src="/images/logo.jpg" 
                alt="Bakemono J Garage Logo" 
                className="h-12 md:h-14 cursor-pointer"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-medium transition duration-200 ${
                  location === link.href ? "text-accent" : "hover:text-accent"
                }`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher className="ml-2" />
          </nav>

          {/* Mobile Language Switcher and Navigation Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher className="mr-1" />
            <button 
              onClick={toggleMobileMenu} 
              className="text-neutral-dark focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu (Hidden by default) */}
        {isMobile && (
          <div className={`md:hidden py-4 border-t border-gray-200 ${mobileMenuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`font-medium py-3 px-2 transition duration-200 ${
                    location === link.href 
                      ? "text-accent border-l-4 border-accent pl-3" 
                      : "hover:text-accent hover:bg-gray-50"
                  }`}
                  onClick={handleNavigate}
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
