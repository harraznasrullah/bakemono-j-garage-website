import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useMedia } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMedia("(max-width: 768px)");
  const [location] = useLocation();
  const { t } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/services", label: t('nav.services') },
    { href: "/gallery", label: t('nav.gallery') },
    { href: "/about", label: t('nav.about') },
    { href: "/social", label: t('nav.social') },
    { href: "/contact", label: t('nav.contact') }
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
          <nav className="hidden md:flex items-center space-x-6">
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
            <LanguageSwitcher className="ml-2" />
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
              <div className="pt-3 mt-3 border-t border-gray-200">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
