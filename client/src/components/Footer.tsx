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
    <footer className="bg-neutral-dark text-white pt-10 md:pt-16 pb-6 md:pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Brand Column - Full width on smallest screens */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 mb-6 sm:mb-0">
            <h3 className="text-xl font-heading font-bold mb-4">
              <span className="text-accent">BAKEMONO</span> J'GARAGE
            </h3>
            <p className="text-gray-400 mb-6 text-sm md:text-base max-w-md">
              {t('home.about.description')}
            </p>
            <div className="flex space-x-6">
              <a 
                href={contactInfo.social.facebook} 
                className="text-gray-400 hover:text-accent transition duration-200 text-lg"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href={contactInfo.social.instagram} 
                className="text-gray-400 hover:text-accent transition duration-200 text-lg"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href={contactInfo.social.tiktok} 
                className="text-gray-400 hover:text-accent transition duration-200 text-lg"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a 
                href={contactInfo.social.whatsapp} 
                className="text-gray-400 hover:text-accent transition duration-200 text-lg"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links - Better touch targets */}
          <div className="col-span-1">
            <h4 className="text-lg font-heading font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-accent transition duration-200 block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services - Better touch targets */}
          <div className="col-span-1">
            <h4 className="text-lg font-heading font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services#${service.id}`} 
                    className="text-gray-400 hover:text-accent transition duration-200 block py-1"
                  >
                    {language === 'en' ? service.title.en : service.title.ms}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info - Improved readability */}
          <div className="col-span-1">
            <h4 className="text-lg font-heading font-semibold mb-4">
              {language === 'en' ? 'Contact Info' : 'Maklumat Hubungan'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-accent"></i>
                <span className="text-gray-400 text-sm md:text-base">{contactInfo.address}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-accent"></i>
                <span className="text-gray-400 text-sm md:text-base">{contactInfo.phoneNote}</span>
              </li>
              <li className="flex items-start">
                <i className="far fa-clock mt-1 mr-3 text-accent"></i>
                <span className="text-gray-400 text-sm md:text-base">
                  {contactInfo.hours.hq}<br />
                  {language === 'en' ? contactInfo.hours.closed : 'Tutup: Ahad'}
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
