import { Link } from "wouter";
import { contactInfo, services } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  
  const quickLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/services", label: t('nav.services') },
    { href: "/gallery", label: t('nav.gallery') },
    { href: "/about", label: t('nav.about') },
    { href: "/social", label: t('nav.social') },
    { href: "/contact", label: t('nav.contact') }
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
              {t('home.about.description')}
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
                href={contactInfo.social.tiktok} 
                className="text-gray-400 hover:text-accent transition duration-200"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
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
            <h4 className="text-lg font-heading font-semibold mb-4">{t('footer.quickLinks')}</h4>
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
            <h4 className="text-lg font-heading font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services#${service.id}`} 
                    className="text-gray-400 hover:text-accent transition duration-200"
                  >
                    {language === 'en' ? service.title.en : service.title.ms}
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
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-gray-500 mb-2 md:mb-1">
                &copy; {new Date().getFullYear()} Bakemono J Garage Workshop. 
                {language === 'en' ? ' All rights reserved.' : ' Hak cipta terpelihara.'}
              </p>
              <p className="text-gray-500 text-sm">
                {language === 'en' 
                  ? 'Serving Klang, Shah Alam, Subang Jaya, and nearby areas.'
                  : 'Melayani Klang, Shah Alam, Subang Jaya, dan kawasan berdekatan.'
                }
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-accent transition duration-200">
                {language === 'en' ? 'Privacy Policy' : 'Dasar Privasi'}
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-accent transition duration-200">
                {language === 'en' ? 'Terms of Service' : 'Terma Perkhidmatan'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
