import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { features, services, testimonials, galleryItems, contactInfo } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  // Get language context
  const { t, language } = useLanguage();
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="relative h-[60vh] bg-black">
          <div className="absolute inset-0 hero-gradient z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613214450416-9d34fc57d6f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }}
          ></div>
          <div className="container h-full flex items-center relative z-10">
            <motion.div 
              className="max-w-2xl text-white"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-medium mb-4 relative z-10">
                {language === 'en' 
                  ? 'TOP 10 MOST RECOGNISED MECHANICS IN MALAYSIA 2020'
                  : 'MEKANIK TERATAS 10 PALING DIIKTIRAF DI MALAYSIA 2020'
                }
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                {language === 'en'
                  ? 'Expert Auto Repair & Maintenance Services'
                  : 'Servis Pembaikan & Penyelenggaraan Auto Pakar'
                }
              </h2>
              <p className="text-base md:text-lg mb-8 text-gray-100">
                {language === 'en'
                  ? 'Quality and functionality guaranteed. We specialize in general repairs, vintage car restoration, and comprehensive maintenance services.'
                  : 'Kualiti dan fungsi dijamin. Kami mengkhususkan diri dalam pembaikan umum, pemulihan kereta vintage, dan perkhidmatan penyelenggaraan komprehensif.'
                }
              </p>
              <div className="flex flex-col md:flex-row w-full md:w-auto gap-4 md:gap-0 md:space-x-4">
                <a 
                  href={contactInfo.social.whatsapp} 
                  className="btn-accent inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp mr-2 text-xl"></i> Book Appointment
                </a>
                <Link href="/services" className="btn-secondary inline-flex items-center justify-center">
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="feature-icon">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="services" className="py-16 bg-neutral-light">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              {language === 'en' ? 'Our Services' : 'Perkhidmatan Kami'}
            </h2>
            <p className="section-subtitle">
              {language === 'en'
                ? 'From routine maintenance to specialized repairs, our experienced team provides comprehensive automotive care for your vehicle.'
                : 'Dari penyelenggaraan rutin hingga pembaikan khusus, pasukan berpengalaman kami menyediakan penjagaan automotif komprehensif untuk kenderaan anda.'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <img 
                  src={service.image} 
                  alt={language === 'en' ? service.title.en : service.title.ms}
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {language === 'en' ? service.title.en : service.title.ms}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === 'en' ? service.description.en : service.description.ms}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {(language === 'en' ? service.features.en : service.features.ms).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services#${service.id}`} className="text-primary hover:text-accent font-medium inline-flex items-center transition duration-200">
                    {language === 'en' ? 'Learn More' : 'Ketahui Lebih Lanjut'} <i className="fas fa-chevron-right ml-2 text-sm"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-primary inline-flex items-center justify-center">
              {language === 'en' ? 'View All Services' : 'Lihat Semua Perkhidmatan'}
            </Link>
          </div>
        </div>
      </section>

      {/* Recognition Banner */}
      <section className="py-12 bg-primary">
        <div className="container text-center">
          <motion.div 
            className="bg-white/10 rounded-lg py-8 px-4 md:px-8 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white text-xl md:text-2xl font-heading font-bold mb-2">
              {language === 'en'
                ? 'TOP 10 MOST RECOGNISED MECHANICS IN MALAYSIA 2020'
                : 'ANTARA 10 MEKANIK PALING DIIKTIRAF DI MALAYSIA 2020'
              }
            </h3>
            <p className="text-white/80 text-lg">
              {language === 'en'
                ? 'Trust your vehicle with award-winning expertise'
                : 'Percayakan kenderaan anda dengan kepakaran bertaraf cemerlang'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              {language === 'en' ? 'Our Work Gallery' : 'Galeri Kerja Kami'}
            </h2>
            <p className="section-subtitle">
              {language === 'en'
                ? 'Browse through our recent automotive repair projects and restoration work.'
                : 'Lihat projek pembaikan automotif dan kerja pemulihan terkini kami.'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.slice(0, 3).map((item, index) => (
              <motion.div 
                key={item.id}
                className="gallery-item rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <div className="p-4 bg-white">
                  <h4 className="font-heading font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/gallery" className="btn-outline inline-flex items-center justify-center">
              {language === 'en' ? 'View More' : 'Lihat Lagi'} <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              {language === 'en' 
                ? 'What Our Customers Say' 
                : 'Apa Kata Pelanggan Kami'}
            </h2>
            <p className="section-subtitle">
              {language === 'en'
                ? 'Read testimonials from our satisfied customers who trust us with their vehicles.'
                : 'Baca testimoni daripada pelanggan kami yang berpuas hati yang mempercayai kami dengan kenderaan mereka.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="group bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Decorative background element */}
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-accent/10 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
                
                {/* Rating stars */}
                <div className="flex text-accent mb-3 relative z-10">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <i className="fas fa-star-half-alt"></i>
                  )}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-600 mb-4 italic relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                
                {/* Customer info */}
                <div className="flex items-center relative z-10">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3 transition-all duration-300 group-hover:bg-primary/40 group-hover:shadow-md">
                    <span className="text-primary font-bold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
              {language === 'en'
                ? 'Ready to Experience Quality Automotive Service?'
                : 'Bersedia Mengalami Perkhidmatan Automotif Berkualiti?'
              }
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Book your appointment today and see why we\'re among Malaysia\'s top recognized mechanics.'
                : 'Tempah temujanji anda hari ini dan lihat mengapa kami antara mekanik terkenal di Malaysia.'
              }
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="btn-accent inline-flex items-center justify-center">
                <i className="fas fa-calendar-alt mr-2"></i> {language === 'en' ? 'Book Appointment' : 'Tempah Janji Temu'}
              </Link>
              <Link href="/services" className="btn-secondary inline-flex items-center justify-center">
                {language === 'en' ? 'Explore Services' : 'Lihat Perkhidmatan'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
