import { motion } from "framer-motion";
import { Link } from "wouter";
import { testimonials } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { language, t } = useLanguage();
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* About Hero */}
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-white/80 mb-8">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  {t('about.story.title')}
                </h2>
                <p className="text-gray-600 mb-4">
                  {language === 'en'
                    ? 'Established in Klang, Selangor, Bakemono J Garage Workshop has built a reputation as one of the most trusted automotive repair centers in Malaysia. Our recognition as one of the "TOP 10 MOST RECOGNISED MECHANICS IN MALAYSIA 2020" reflects our commitment to excellence.'
                    : 'Ditubuhkan di Klang, Selangor, Bakemono J Garage Workshop telah membina reputasi sebagai salah satu pusat pembaikan automotif yang paling dipercayai di Malaysia. Pengiktirafan kami sebagai salah satu "10 MEKANIK YANG PALING DIKENALI DI MALAYSIA 2020" mencerminkan komitmen kami terhadap kecemerlangan.'
                  }
                </p>
                <p className="text-gray-600 mb-4">
                  {language === 'en'
                    ? 'Our team of skilled mechanics has extensive experience with most make and model cars, from everyday vehicles to vintage classics. We pride ourselves on providing affordable, high-quality service with a focus on customer satisfaction.'
                    : 'Pasukan mekanik mahir kami mempunyai pengalaman luas dengan kebanyakan jenis dan model kereta, dari kenderaan harian hingga klasik vintaj. Kami berbangga menyediakan perkhidmatan berkualiti tinggi dengan harga berpatutan dan tumpuan kepada kepuasan pelanggan.'
                  }
                </p>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Whether you need routine maintenance, complex repairs, or vintage car restoration, we have the expertise and equipment to get the job done right.'
                    : 'Sama ada anda memerlukan penyelenggaraan rutin, pembaikan kompleks, atau pemulihan kereta vintaj, kami mempunyai kepakaran dan peralatan untuk menyelesaikan tugas dengan betul.'
                  }
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-success mt-1 mr-2 text-xl"></i>
                  <span>{language === 'en' ? 'Experienced mechanics' : 'Mekanik berpengalaman'}</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-success mt-1 mr-2 text-xl"></i>
                  <span>{language === 'en' ? 'Quality parts' : 'Alat ganti berkualiti'}</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-success mt-1 mr-2 text-xl"></i>
                  <span>{language === 'en' ? 'Fair pricing' : 'Harga berpatutan'}</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-success mt-1 mr-2 text-xl"></i>
                  <span>{language === 'en' ? 'Modern equipment' : 'Peralatan moden'}</span>
                </div>
              </div>

              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                {language === 'en' ? 'Contact Us' : 'Hubungi Kami'}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://pixabay.com/get/g31165fb4f77e7a1fae61a565915094f59feb806a619c95903cd59630025acd82244eb96b76c84dedb1549f714522c16ea02b150a4372e8923f2a1fe015d2ce19_1280.jpg" 
                alt="Our Team of Mechanics" 
                className="rounded-lg shadow-md h-full object-cover"
              />
              
              <div className="grid grid-rows-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=340" 
                  alt="Our Workshop Interior" 
                  className="rounded-lg shadow-md h-full object-cover"
                />
                
                <img 
                  src="https://pixabay.com/get/g3afd3973d7d18bd205d42486bc954189176f58ba3ea031ced98f3cd9ecc48da6554aae254de68a1f6a0dc83c5de977ef23e605476f4abb8709d77e0059ff82b0_1280.jpg" 
                  alt="Quality Parts and Tools" 
                  className="rounded-lg shadow-md h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-neutral-light">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              {language === 'en' ? 'Our Values' : 'Nilai-Nilai Kami'}
            </h2>
            <p className="section-subtitle">
              {language === 'en'
                ? 'These principles guide everything we do at Bakemono J Garage Workshop'
                : 'Prinsip-prinsip ini memandu semua yang kami lakukan di Bakemono J Garage Workshop'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: language === 'en' ? "Quality" : "Kualiti",
                description: language === 'en' 
                  ? "We never compromise on the quality of our work or the parts we use. Every repair and service is performed to the highest standards."
                  : "Kami tidak pernah berkompromi dengan kualiti kerja kami atau alat ganti yang kami gunakan. Setiap pembaikan dan servis dilakukan mengikut standard tertinggi.",
                icon: "fa-award"
              },
              {
                title: language === 'en' ? "Honesty" : "Kejujuran",
                description: language === 'en'
                  ? "We believe in transparent communication and honest assessments. We'll always tell you exactly what your vehicle needs without unnecessary work."
                  : "Kami percaya kepada komunikasi yang telus dan penilaian yang jujur. Kami akan sentiasa memberitahu anda secara tepat apa yang diperlukan oleh kenderaan anda tanpa kerja yang tidak perlu.",
                icon: "fa-handshake"
              },
              {
                title: language === 'en' ? "Customer Satisfaction" : "Kepuasan Pelanggan",
                description: language === 'en'
                  ? "Your satisfaction is our priority. We strive to exceed expectations with every visit, ensuring your vehicle receives the best care possible."
                  : "Kepuasan anda adalah keutamaan kami. Kami berusaha untuk melebihi jangkaan dengan setiap kunjungan, memastikan kenderaan anda menerima penjagaan terbaik yang mungkin.",
                icon: "fa-smile"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <i className={`fas ${value.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              {language === 'en' ? 'Our Expert Team' : 'Pasukan Pakar Kami'}
            </h2>
            <p className="section-subtitle">
              {language === 'en'
                ? 'Meet the skilled professionals behind our quality service'
                : 'Kenali profesional mahir di sebalik perkhidmatan berkualiti kami'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Ali Hassan",
                role: language === 'en' ? "Master Mechanic" : "Mekanik Utama",
                bio: language === 'en'
                  ? "With over 15 years of experience, Ali specializes in diagnosing complex automotive issues and vintage car restoration."
                  : "Dengan pengalaman lebih 15 tahun, Ali pakar dalam mendiagnosis masalah automotif kompleks dan pemulihan kereta vintaj.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
              },
              {
                name: "Michael Tan",
                role: language === 'en' ? "Service Manager" : "Pengurus Perkhidmatan",
                bio: language === 'en'
                  ? "Michael ensures that every service meets our high standards of quality. He has a background in automotive engineering."
                  : "Michael memastikan setiap perkhidmatan memenuhi standard kualiti tinggi kami. Beliau mempunyai latar belakang dalam kejuruteraan automotif.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
              },
              {
                name: "Raj Singh",
                role: language === 'en' ? "Diagnostics Specialist" : "Pakar Diagnostik",
                bio: language === 'en'
                  ? "Raj is our expert in computer diagnostics and electrical systems, with specialized training in hybrid vehicle technology."
                  : "Raj adalah pakar kami dalam diagnostik komputer dan sistem elektrik, dengan latihan khusus dalam teknologi kenderaan hibrid.",
                image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-neutral-light">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-8">
              <div className="text-accent text-4xl">
                <i className="fas fa-quote-left"></i>
              </div>
            </div>
            <blockquote className="text-center mb-8">
              <p className="text-gray-600 text-lg md:text-xl italic mb-6">
                {language === 'en'
                  ? '"I have been bringing all my vehicles to Bakemono J Garage for years. They are simply the best in the Klang Valley area. Their attention to detail and technical expertise has saved me from costly repairs numerous times. I wouldn\'t trust my cars with anyone else."'
                  : '"Saya telah membawa semua kenderaan saya ke Bakemono J Garage selama bertahun-tahun. Mereka adalah yang terbaik di kawasan Lembah Klang. Perhatian mereka terhadap perincian dan kepakaran teknikal telah menyelamatkan saya daripada pembaikan mahal beberapa kali. Saya tidak akan mempercayai kereta saya dengan orang lain."'
                }
              </p>
              <cite className="text-gray-800 font-medium not-italic">
                {language === 'en'
                  ? '— David Wong, Loyal Customer Since 2015'
                  : '— David Wong, Pelanggan Setia Sejak 2015'
                }
              </cite>
            </blockquote>
          </motion.div>
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
                ? 'Ready to Experience Our Expert Service?'
                : 'Bersedia Untuk Mengalami Perkhidmatan Pakar Kami?'
              }
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Join our community of satisfied customers and trust your vehicle with Malaysia\'s top recognized mechanics.'
                : 'Sertai komuniti pelanggan kami yang berpuas hati dan percayakan kenderaan anda dengan mekanik terkenal di Malaysia.'
              }
            </p>
            <Link href="/contact" className="btn-accent inline-flex items-center justify-center">
              <i className="fas fa-calendar-alt mr-2"></i> 
              {language === 'en' ? 'Book an Appointment' : 'Tempah Temujanji'}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
