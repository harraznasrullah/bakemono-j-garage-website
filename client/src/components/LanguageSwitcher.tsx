import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FlagIcon } from 'react-flag-kit';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ms' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`lang-switcher ${className}`}
      aria-label={language === 'en' ? 'Switch to Malay' : 'Switch to English'}
    >
      <span className="flex items-center">
        <FlagIcon 
          code={language === 'en' ? 'GB' : 'MY'} 
          size={16} 
          className="mr-1.5" 
        />
        <span>{language === 'en' ? 'EN' : 'MY'}</span>
        <i className="fas fa-chevron-down text-xs ml-1"></i>
      </span>
    </button>
  );
};

export default LanguageSwitcher;