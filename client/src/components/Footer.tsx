import { Link } from "wouter";
import { contactInfo, services } from "@/lib/constants";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <footer className="bg-neutral-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              <span className="text-accent">BAKEMONO</span> J'GARAGE
            </h3>
            <p className="text-gray-400 mb-6">
              Your trusted automotive care partner in Klang, Selangor. Quality and functionality guaranteed.
            </p>
            <div className="flex space-x-4">
              <a 
                href={contactInfo.social.facebook} 
                className="text-gray-400 hover:text-accent transition duration-200"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href={contactInfo.social.instagram} 
                className="text-gray-400 hover:text-accent transition duration-200"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href={contactInfo.social.whatsapp} 
                className="text-gray-400 hover:text-accent transition duration-200"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-accent transition duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services#${service.id}`} 
                    className="text-gray-400 hover:text-accent transition duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-accent"></i>
                <span className="text-gray-400">{contactInfo.address}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-accent"></i>
                <span className="text-gray-400">{contactInfo.phoneNote}</span>
              </li>
              <li className="flex items-start">
                <i className="far fa-clock mt-1 mr-3 text-accent"></i>
                <span className="text-gray-400">
                  {contactInfo.hours.hq}<br />
                  {contactInfo.hours.closed}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bakemono J Garage Workshop. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-500 hover:text-accent transition duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-accent transition duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
