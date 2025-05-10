import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { contactInfo } from "@/lib/constants";

const OilChange = () => {
  const { t, language } = useLanguage();
  
  // Common animation variant
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // FAQ data with both languages
  const faqData = [
    {
      id: 1,
      questionEn: "How much does an oil change cost in Klang?",
      answerEn: "Oil change costs at Bakemono J Garage Workshop in Klang typically range from RM80-RM350 depending on your vehicle make, model, and the type of oil used (mineral, semi-synthetic, or fully synthetic). Contact us for a specific quote for your vehicle.",
      questionMs: "Berapa harga tukar minyak enjin di Klang?",
      answerMs: "Kos penukaran minyak di Bakemono J Garage Workshop di Klang biasanya antara RM80-RM350 bergantung pada jenis kenderaan, model, dan jenis minyak yang digunakan (mineral, separa sintetik, atau sintetik penuh). Hubungi kami untuk mendapatkan sebut harga khusus untuk kenderaan anda."
    },
    {
      id: 2,
      questionEn: "How often should I change my engine oil?",
      answerEn: "Most modern vehicles should have their oil changed every 5,000-10,000 km or every 6 months, whichever comes first. However, the exact interval depends on your vehicle make, model, and driving conditions. We recommend following your vehicle manufacturer's service schedule.",
      questionMs: "Berapa kerap saya perlu menukar minyak enjin?",
      answerMs: "Kebanyakan kenderaan moden perlu menukar minyak setiap 5,000-10,000 km atau setiap 6 bulan, yang mana lebih awal. Walau bagaimanapun, selang yang tepat bergantung pada jenis kenderaan, model, dan keadaan pemanduan. Kami mengesyorkan anda mengikuti jadual servis yang ditetapkan oleh pengeluar kenderaan."
    },
    {
      id: 3,
      questionEn: "What are the signs that I need an oil change?",
      answerEn: "Signs that indicate you need an oil change include: dark/dirty oil on the dipstick, engine running louder than usual, warning light on dashboard, decreased fuel efficiency, and it's been over 6 months or 10,000 km since your last oil change.",
      questionMs: "Apakah tanda-tanda yang menunjukkan saya perlu menukar minyak enjin?",
      answerMs: "Tanda-tanda yang menunjukkan anda perlu menukar minyak termasuk: minyak gelap/kotor pada batang celup, enjin berbunyi lebih kuat daripada biasa, lampu amaran pada papan pemuka, kecekapan bahan api berkurangan, dan sudah lebih 6 bulan atau 10,000 km sejak penukaran minyak terakhir anda."
    },
    {
      id: 4,
      questionEn: "What type of oil is best for my car?",
      answerEn: "The best oil for your car depends on its make, model, age, and your driving habits. Modern vehicles typically use 5W-30 or 0W-20 synthetic oil, but we recommend following the manufacturer's specifications. At Bakemono J Garage, we can advise on the optimal oil for your specific vehicle.",
      questionMs: "Apakah jenis minyak yang terbaik untuk kereta saya?",
      answerMs: "Minyak terbaik untuk kereta anda bergantung pada jenis, model, usia, dan tabiat pemanduan anda. Kenderaan moden biasanya menggunakan minyak sintetik 5W-30 atau 0W-20, tetapi kami mengesyorkan anda mengikuti spesifikasi pengeluar. Di Bakemono J Garage, kami boleh menasihatkan minyak optimum untuk kenderaan khusus anda."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              {language === 'en' ? 'Oil Change & Maintenance Service' : 'Servis Tukar Minyak & Penyelenggaraan'}
            </h1>
            <p className="text-xl text-white/80 mb-8">
              {language === 'en' 
                ? 'Professional engine oil change and maintenance services in Klang, Selangor' 
                : 'Perkhidmatan profesional penukaran minyak enjin dan penyelenggaraan di Klang, Selangor'}
            </p>
            <a 
              href={contactInfo.social.whatsapp} 
              className="btn-accent inline-flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i> 
              {language === 'en' ? 'Book Appointment' : 'Tempah Janji Temu'}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1580983218760-f4f48bdc013e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt={language === 'en' ? "Oil change service in Klang" : "Servis tukar minyak di Klang"} 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6">
                {language === 'en' ? 'Why Regular Oil Changes are Important' : 'Mengapa Penukaran Minyak Berkala Penting'}
              </h2>
              
              <p className="mb-6">
                {language === 'en' 
                  ? 'Regular oil changes are crucial for maintaining your engine\'s health and longevity. Engine oil lubricates moving parts, reduces friction, helps cool the engine, and removes contaminants.' 
                  : 'Penukaran minyak berkala sangat penting untuk menjaga kesihatan dan jangka hayat enjin anda. Minyak enjin melincirkan bahagian yang bergerak, mengurangkan geseran, membantu menyejukkan enjin, dan menghilangkan bahan cemar.'}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <p>
                    {language === 'en' 
                      ? 'Extends engine life and improves performance' 
                      : 'Memanjangkan hayat enjin dan meningkatkan prestasi'}
                  </p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <p>
                    {language === 'en' 
                      ? 'Improves fuel efficiency and saves money' 
                      : 'Meningkatkan kecekapan bahan api dan menjimatkan wang'}
                  </p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <p>
                    {language === 'en' 
                      ? 'Prevents engine overheating and reduces emissions' 
                      : 'Mencegah enjin terlalu panas dan mengurangkan pelepasan'}
                  </p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <p>
                    {language === 'en' 
                      ? 'Maintains warranty requirements for new vehicles' 
                      : 'Mengekalkan keperluan waranti untuk kenderaan baru'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mt-3">
                <i className="fas fa-map-marker-alt text-accent mr-2"></i>
                <span className="font-medium">
                  {language === 'en' ? 'Servicing Klang and nearby areas' : 'Melayani Klang dan kawasan berdekatan'}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <i className="fas fa-phone-alt text-accent mr-2"></i>
                <span>
                  {contactInfo.phone}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Oil Change Process */}
      <section className="py-16 bg-neutral-light">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              {language === 'en' ? 'Our Oil Change Process' : 'Proses Penukaran Minyak Kami'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'en' 
                ? 'At Bakemono J Garage Workshop, we follow a comprehensive process to ensure your vehicle gets the best service' 
                : 'Di Bakemono J Garage Workshop, kami mengikuti proses komprehensif untuk memastikan kenderaan anda mendapat perkhidmatan terbaik'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {language === 'en' ? 'Vehicle Inspection' : 'Pemeriksaan Kenderaan'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'We conduct a thorough inspection of your vehicle to identify any potential issues' 
                  : 'Kami menjalankan pemeriksaan menyeluruh terhadap kenderaan anda untuk mengenal pasti sebarang masalah yang berpotensi'}
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {language === 'en' ? 'Drain Old Oil' : 'Buang Minyak Lama'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'We drain the old oil completely and properly dispose of it according to environmental standards' 
                  : 'Kami mengalirkan minyak lama sepenuhnya dan membuangnya dengan betul mengikut piawaian alam sekitar'}
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {language === 'en' ? 'Replace Filter' : 'Ganti Penapis'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'We replace the oil filter with a high-quality new one that matches your vehicle specifications' 
                  : 'Kami menggantikan penapis minyak dengan yang baru berkualiti tinggi yang sesuai dengan spesifikasi kenderaan anda'}
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {language === 'en' ? 'Add New Oil' : 'Tambah Minyak Baru'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'We fill your engine with the recommended grade and amount of high-quality engine oil' 
                  : 'Kami mengisi enjin anda dengan gred dan jumlah minyak enjin berkualiti tinggi yang disyorkan'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              {language === 'en' ? 'Frequently Asked Questions' : 'Soalan Lazim'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'en' 
                ? 'Common questions about oil change and maintenance services in Klang' 
                : 'Soalan lazim tentang perkhidmatan penukaran minyak dan penyelenggaraan di Klang'}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqData.map((faq) => (
                <motion.div 
                  key={faq.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: faq.id * 0.1 }}
                >
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {language === 'en' ? faq.questionEn : faq.questionMs}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' ? faq.answerEn : faq.answerMs}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
              {language === 'en' ? 'Ready for Your Next Oil Change?' : 'Bersedia untuk Penukaran Minyak Anda Seterusnya?'}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {language === 'en' 
                ? `Book an appointment with Bakemono J Garage Workshop in Klang today. Call or WhatsApp at ${contactInfo.phone}` 
                : `Tempah janji temu dengan Bakemono J Garage Workshop di Klang hari ini. Hubungi atau WhatsApp di ${contactInfo.phone}`}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href={contactInfo.social.whatsapp} 
                className="btn-accent inline-flex items-center justify-center w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp mr-2 text-xl"></i> 
                {language === 'en' ? 'WhatsApp Us' : 'WhatsApp Kami'}
              </a>
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto">
                {language === 'en' ? 'Contact Us' : 'Hubungi Kami'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OilChange;