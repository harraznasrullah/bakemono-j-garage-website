import { motion } from "framer-motion";
import { Link } from "wouter";
import { services } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { language } = useLanguage();
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* Services Hero */}
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              {language === 'en' ? 'Our Automotive Services' : 'Perkhidmatan Automotif Kami'}
            </h1>
            <p className="text-xl text-white/80 mb-8">
              {language === 'en' 
                ? 'Comprehensive automotive repair and maintenance services performed by experienced mechanics'
                : 'Perkhidmatan pembaikan dan penyelenggaraan automotif komprehensif dilakukan oleh mekanik berpengalaman'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-16 bg-neutral-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Service Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  {language === 'en' ? 'Quality Service Guarantees' : 'Jaminan Perkhidmatan Berkualiti'}
                </h2>
                <p className="text-gray-600 mb-4">
                  {language === 'en' 
                    ? 'At Bakemono J Garage Workshop, we stand behind our work with confidence. Our team of certified mechanics brings years of experience and technical expertise to every job, ensuring your vehicle receives the highest quality care.'
                    : 'Di Bakemono J Garage Workshop, kami yakin dengan kerja kami. Pasukan mekanik bertauliah kami membawa pengalaman dan kepakaran teknikal bertahun-tahun kepada setiap kerja, memastikan kenderaan anda menerima penjagaan berkualiti tertinggi.'
                  }
                </p>
                <p className="text-gray-600 mb-6">
                  {language === 'en'
                    ? 'We use only quality parts and the latest diagnostic equipment to deliver accurate repairs and maintenance services. Our commitment to excellence has earned us recognition as one of Malaysia\'s top mechanics.'
                    : 'Kami hanya menggunakan alat ganti berkualiti dan peralatan diagnostik terkini untuk memberikan perkhidmatan pembaikan dan penyelenggaraan yang tepat. Komitmen kami terhadap kecemerlangan telah menjadikan kami diiktiraf sebagai salah satu mekanik terbaik di Malaysia.'
                  }
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-success mt-1 mr-2 text-xl"></i>
                    <span>{language === 'en' ? '30-day service guarantee' : 'Jaminan servis 30 hari'}</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-success mt-1 mr-2 text-xl"></i>
                    <span>{language === 'en' ? 'Transparent pricing' : 'Harga yang telus'}</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-success mt-1 mr-2 text-xl"></i>
                    <span>{language === 'en' ? 'Quality parts used' : 'Alat ganti berkualiti digunakan'}</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-success mt-1 mr-2 text-xl"></i>
                    <span>{language === 'en' ? 'Professional technicians' : 'Juruteknik profesional'}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                  {language === 'en' ? 'Book a Service Now' : 'Tempah Servis Sekarang'}
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://pixabay.com/get/g31165fb4f77e7a1fae61a565915094f59feb806a619c95903cd59630025acd82244eb96b76c84dedb1549f714522c16ea02b150a4372e8923f2a1fe015d2ce19_1280.jpg" 
                alt="Professional Mechanics at Work" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              {language === 'en' ? 'Frequently Asked Questions' : 'Soalan Lazim'}
            </h2>
            <p className="section-subtitle">
              {language === 'en' 
                ? 'Get answers to common questions about our automotive services'
                : 'Dapatkan jawapan untuk soalan lazim tentang perkhidmatan automotif kami'
              }
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: {
                    en: "How often should I change my oil?",
                    ms: "Berapa kerap saya harus menukar minyak enjin?"
                  },
                  answer: {
                    en: "For most vehicles, we recommend changing your oil every 5,000 to 7,500 kilometers or every 6 months, whichever comes first. However, this may vary based on your vehicle type, age, and driving conditions.",
                    ms: "Untuk kebanyakan kenderaan, kami mengesyorkan penukaran minyak setiap 5,000 hingga 7,500 kilometer atau setiap 6 bulan, yang mana lebih awal. Walau bagaimanapun, ini mungkin berbeza bergantung pada jenis kenderaan, usia, dan keadaan pemanduan anda."
                  }
                },
                {
                  question: {
                    en: "Do you work on all vehicle makes and models?",
                    ms: "Adakah anda mengendalikan semua jenis dan model kenderaan?"
                  },
                  answer: {
                    en: "Yes, our technicians are experienced with most makes and models, including domestic, imported, and vintage vehicles. We have specialized expertise in both modern vehicles and classic car restoration.",
                    ms: "Ya, juruteknik kami berpengalaman dengan kebanyakan jenis dan model, termasuk kenderaan tempatan, import, dan vintage. Kami mempunyai kepakaran khusus dalam kenderaan moden dan pemulihan kereta klasik."
                  }
                },
                {
                  question: {
                    en: "How do I know if my transmission needs service?",
                    ms: "Bagaimana saya tahu jika transmisi saya perlu diservis?"
                  },
                  answer: {
                    en: "Signs that your transmission may need service include: difficulty shifting gears, unusual noises when in neutral, leaking fluid, grinding or shaking during gear shifts, and warning lights on your dashboard.",
                    ms: "Tanda-tanda bahawa transmisi anda mungkin perlu diservis termasuk: kesukaran menukar gear, bunyi luar biasa ketika dalam keadaan neutral, kebocoran cecair, bunyi bergesel atau gegaran semasa pertukaran gear, dan lampu amaran pada papan pemuka anda."
                  }
                },
                {
                  question: {
                    en: "Do you provide warranty on repairs?",
                    ms: "Adakah anda memberikan jaminan pada pembaikan?"
                  },
                  answer: {
                    en: "Yes, we stand behind our work with a 30-day service guarantee on all repairs. Some parts may also carry their own manufacturer warranties, which we'll explain at the time of service.",
                    ms: "Ya, kami menyokong kerja kami dengan jaminan perkhidmatan 30 hari untuk semua pembaikan. Sesetengah bahagian juga mungkin mempunyai jaminan pengeluar mereka sendiri, yang akan kami jelaskan pada masa servis."
                  }
                },
                {
                  question: {
                    en: "How do I schedule an appointment?",
                    ms: "Bagaimana saya boleh membuat temujanji?"
                  },
                  answer: {
                    en: "You can schedule an appointment by calling us, using our WhatsApp booking service, or filling out the contact form on our website. We'll confirm your appointment and provide any necessary preparation instructions.",
                    ms: "Anda boleh membuat temujanji dengan menghubungi kami, menggunakan perkhidmatan tempahan WhatsApp, atau mengisi borang hubungan di laman web kami. Kami akan mengesahkan temujanji anda dan memberikan arahan persediaan yang diperlukan."
                  }
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold mb-2">
                      {language === 'en' ? faq.question.en : faq.question.ms}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en' ? faq.answer.en : faq.answer.ms}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              {language === 'en' ? 'Ready to Book Your Service?' : 'Bersedia untuk Tempah Servis Anda?'}
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Contact us today to schedule an appointment with our experienced mechanics.'
                : 'Hubungi kami hari ini untuk membuat temujanji dengan mekanik berpengalaman kami.'
              }
            </p>
            <Link href="/contact" className="btn-accent inline-flex items-center justify-center">
              <i className="fas fa-calendar-alt mr-2"></i> 
              {language === 'en' ? 'Book Appointment' : 'Tempah Janji Temu'}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
