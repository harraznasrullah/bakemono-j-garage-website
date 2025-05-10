import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ms';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const enTranslations: Record<string, string> = {
  // Navigation
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.gallery': 'Gallery',
  'nav.about': 'About',
  'nav.social': 'Social Media',
  'nav.contact': 'Contact',
  
  // Home page
  'home.hero.title': 'Your Trusted Automotive Workshop in Klang',
  'home.hero.subtitle': 'Quality service for all makes and models, including vintage cars',
  'home.hero.cta': 'Book Appointment',
  'home.hero.services': 'View Services',
  'home.about.title': 'About Bakemono J Garage',
  'home.about.description': 'Trusted automotive care partner in Klang, Selangor. Quality and functionality guaranteed.',
  'home.services.title': 'Our Services',
  'home.services.subtitle': 'Professional automotive care for your vehicle',
  'home.testimonials.title': 'Customer Testimonials',
  'home.testimonials.subtitle': 'What our customers say about us',
  
  // Services page
  'services.hero.title': 'Our Services',
  'services.hero.subtitle': 'Professional automotive care for all makes and models',
  'services.cta': 'Contact Us',
  
  // About page
  'about.hero.title': 'About Bakemono J Garage Workshop',
  'about.hero.subtitle': 'Your trusted automotive care partner in Klang',
  'about.mission.title': 'Our Mission',
  'about.mission.description': 'To provide high-quality automotive service with honesty and integrity.',
  'about.vision.title': 'Our Vision',
  'about.vision.description': 'To be the most trusted automotive workshop in Klang, known for our expertise and reliability.',
  'about.history.title': 'Our History',
  'about.history.description': 'Established with a passion for cars, we\'ve been serving the Klang community with expert automotive care.',
  'about.story.title': 'Our Story',
  'about.values.title': 'Our Values',
  'about.values.subtitle': 'These principles guide everything we do at Bakemono J Garage Workshop',
  'about.team.title': 'Our Expert Team',
  'about.team.subtitle': 'Meet the skilled professionals behind our quality service',
  'about.cta.title': 'Ready to Experience Our Expert Service?',
  'about.cta.subtitle': 'Join our community of satisfied customers and trust your vehicle with Malaysia\'s top recognized mechanics',
  'about.cta.button': 'Book an Appointment',
  
  // Gallery page
  'gallery.hero.title': 'Our Gallery',
  'gallery.hero.subtitle': 'Showcasing our work and expertise',
  
  // Contact page
  'contact.hero.title': 'Contact Us',
  'contact.hero.subtitle': 'We\'re here to help with your automotive needs',
  'contact.info.title': 'Contact Information',
  'contact.form.title': 'Send Us a Message',
  'contact.form.name': 'Your Name',
  'contact.form.email': 'Email Address',
  'contact.form.phone': 'Phone Number',
  'contact.form.service': 'Service Required',
  'contact.form.message': 'Your Message',
  'contact.form.submit': 'Submit',
  'contact.connect': 'Connect With Us',
  'contact.address': 'Address',
  'contact.phone': 'Phone',
  'contact.hours': 'Business Hours',
  
  // Social media page
  'social.hero.title': 'Our Social Media',
  'social.hero.subtitle': 'Follow us for updates, tips, and glimpses of our latest automotive work',
  'social.recent': 'Recent Posts',
  'social.recent.subtitle': 'Stay up-to-date with our latest social media updates',
  'social.connect': 'Connect With Us Today',
  'social.question': 'Have a question about your vehicle? Need to schedule a service appointment?',
  
  // Common phrases
  'common.viewMore': 'View More',
  'common.contactUs': 'Contact Us',
  'common.bookAppointment': 'Book Appointment',
  'common.close': 'Close',
  'common.loading': 'Loading...',
  'common.learnMore': 'Learn More',
  
  // Footer
  'footer.rights': 'All Rights Reserved',
  'footer.quickLinks': 'Quick Links',
  'footer.services': 'Services',
  'footer.hours': 'Business Hours',
  
  // Service types
  'service.maintenance': 'Periodic Maintenance Service',
  'service.suspension': 'Suspension Checking',
  'service.steering': 'Steering Checking',
  'service.inspection': 'Full Car Inspection',
  'service.hybrid': 'Hybrid Car Repair',
  'service.diagnostics': 'Full Diagnostic & Troubleshooting',
  'service.other': 'Other Services',
};

// Malay translations
const msTranslations: Record<string, string> = {
  // Navigation
  'nav.home': 'Utama',
  'nav.services': 'Perkhidmatan',
  'nav.gallery': 'Galeri',
  'nav.about': 'Tentang Kami',
  'nav.social': 'Media Sosial',
  'nav.contact': 'Hubungi',
  
  // Home page
  'home.hero.title': 'Bengkel Automotif Terpercaya di Klang',
  'home.hero.subtitle': 'Perkhidmatan berkualiti untuk semua jenis dan model, termasuk kereta vintage',
  'home.hero.cta': 'Tempah Janji Temu',
  'home.hero.services': 'Lihat Perkhidmatan',
  'home.about.title': 'Tentang Bakemono J Garage',
  'home.about.description': 'Rakan penjagaan automotif yang dipercayai di Klang, Selangor. Kualiti dan fungsi dijamin.',
  'home.services.title': 'Perkhidmatan Kami',
  'home.services.subtitle': 'Penjagaan automotif profesional untuk kenderaan anda',
  'home.testimonials.title': 'Testimoni Pelanggan',
  'home.testimonials.subtitle': 'Apa yang pelanggan kami katakan tentang kami',
  
  // Services page
  'services.hero.title': 'Perkhidmatan Kami',
  'services.hero.subtitle': 'Penjagaan automotif profesional untuk semua jenis dan model',
  'services.cta': 'Hubungi Kami',
  
  // About page
  'about.hero.title': 'Tentang Bakemono J Garage Workshop',
  'about.hero.subtitle': 'Rakan penjagaan automotif yang dipercayai di Klang',
  'about.mission.title': 'Misi Kami',
  'about.mission.description': 'Untuk menyediakan perkhidmatan automotif berkualiti tinggi dengan kejujuran dan integriti.',
  'about.vision.title': 'Visi Kami',
  'about.vision.description': 'Untuk menjadi bengkel automotif yang paling dipercayai di Klang, dikenali dengan kepakaran dan kebolehpercayaan kami.',
  'about.history.title': 'Sejarah Kami',
  'about.history.description': 'Ditubuhkan dengan semangat untuk kereta, kami telah melayani masyarakat Klang dengan penjagaan automotif pakar.',
  'about.story.title': 'Kisah Kami',
  'about.values.title': 'Nilai-Nilai Kami',
  'about.values.subtitle': 'Prinsip-prinsip ini memandu semua yang kami lakukan di Bakemono J Garage Workshop',
  'about.team.title': 'Pasukan Pakar Kami',
  'about.team.subtitle': 'Kenali profesional mahir di sebalik perkhidmatan berkualiti kami',
  'about.cta.title': 'Bersedia Untuk Mengalami Perkhidmatan Pakar Kami?',
  'about.cta.subtitle': 'Sertai komuniti pelanggan kami yang berpuas hati dan percayakan kenderaan anda dengan mekanik terkenal di Malaysia',
  'about.cta.button': 'Tempah Temujanji',
  
  // Gallery page
  'gallery.hero.title': 'Galeri Kami',
  'gallery.hero.subtitle': 'Pameran kerja dan kepakaran kami',
  
  // Contact page
  'contact.hero.title': 'Hubungi Kami',
  'contact.hero.subtitle': 'Kami di sini untuk membantu dengan keperluan automotif anda',
  'contact.info.title': 'Maklumat Hubungan',
  'contact.form.title': 'Hantar Mesej Kepada Kami',
  'contact.form.name': 'Nama Anda',
  'contact.form.email': 'Alamat Emel',
  'contact.form.phone': 'Nombor Telefon',
  'contact.form.service': 'Perkhidmatan Diperlukan',
  'contact.form.message': 'Mesej Anda',
  'contact.form.submit': 'Hantar',
  'contact.connect': 'Hubungi Kami Di',
  'contact.address': 'Alamat',
  'contact.phone': 'Telefon',
  'contact.hours': 'Waktu Operasi',
  
  // Social media page
  'social.hero.title': 'Media Sosial Kami',
  'social.hero.subtitle': 'Ikuti kami untuk kemas kini, tip, dan lihat kerja automotif terbaru kami',
  'social.recent': 'Perkongsian Terkini',
  'social.recent.subtitle': 'Dapatkan kemas kini terkini daripada media sosial kami',
  'social.connect': 'Hubungi Kami Hari Ini',
  'social.question': 'Ada pertanyaan tentang kenderaan anda? Perlukan temujanji servis?',
  
  // Common phrases
  'common.viewMore': 'Lihat Lagi',
  'common.contactUs': 'Hubungi Kami',
  'common.bookAppointment': 'Tempah Janji Temu',
  'common.close': 'Tutup',
  'common.loading': 'Memuatkan...',
  'common.learnMore': 'Ketahui Lebih Lanjut',
  
  // Footer
  'footer.rights': 'Hak Cipta Terpelihara',
  'footer.quickLinks': 'Pautan Pantas',
  'footer.services': 'Perkhidmatan',
  'footer.hours': 'Waktu Operasi',
  
  // Service types
  'service.maintenance': 'Servis Penyelenggaraan Berkala',
  'service.suspension': 'Pemeriksaan Suspensi',
  'service.steering': 'Pemeriksaan Stereng',
  'service.inspection': 'Pemeriksaan Kereta Penuh',
  'service.hybrid': 'Pembaikan Kereta Hibrid',
  'service.diagnostics': 'Diagnostik Penuh & Penyelesaian Masalah',
  'service.other': 'Perkhidmatan Lain',
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const translations = language === 'en' ? enTranslations : msTranslations;

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};