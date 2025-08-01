import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Link } from "wouter";
import { galleryItems } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    image: string;
    title: {
      en: string;
      ms: string;
    };
    description: {
      en: string;
      ms: string;
    };
  } | null>(null);

  return (
    <>
      {/* Gallery Hero */}
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              {t('gallery.hero.title')}
            </h1>
            <p className="text-xl text-white/80 mb-8">
              {language === 'en'
                ? 'Browse through our portfolio of automotive repairs, restorations, and custom work'
                : 'Lihat portfolio kami untuk pembaikan automotif, pemulihan, dan kerja kustomisasi'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <motion.div 
                    className="gallery-item rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedImage(item)}
                  >
                    <img 
                      src={item.image} 
                      alt={language === 'en' ? item.title.en : item.title.ms} 
                      className="w-full h-64 object-cover" 
                    />
                    <div className="p-4 bg-white">
                      <h4 className="font-heading font-medium">
                        {language === 'en' ? item.title.en : item.title.ms}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {language === 'en' ? item.description.en : item.description.ms}
                      </p>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl">
                  <DialogTitle className="sr-only">
                    {language === 'en' ? item.title.en : item.title.ms}
                  </DialogTitle>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={language === 'en' ? item.title.en : item.title.ms} 
                        className="w-full h-auto" 
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-2xl font-heading font-bold mb-4">
                        {language === 'en' ? item.title.en : item.title.ms}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {language === 'en' ? item.description.en : item.description.ms}
                      </p>
                      <div className="space-y-4">
                        <h4 className="font-medium">
                          {language === 'en' ? 'Project Details:' : 'Butiran Projek:'}
                        </h4>
                        <p className="text-gray-600">
                          {language === 'en' 
                            ? 'This is one of our showcase projects that demonstrates our expertise and attention to detail. Our skilled mechanics put their years of experience to work, ensuring quality results.'
                            : 'Ini adalah salah satu projek pameran kami yang menunjukkan kepakaran dan perhatian kami terhadap detail. Mekanik kami yang mahir memanfaatkan pengalaman bertahun-tahun mereka, memastikan hasil yang berkualiti.'
                          }
                        </p>
                        <p className="text-gray-600">
                          {language === 'en'
                            ? 'We pride ourselves on using quality parts and advanced techniques to deliver exceptional results for every vehicle we work on.'
                            : 'Kami berbangga menggunakan alat ganti berkualiti dan teknik termaju untuk memberikan hasil yang luar biasa bagi setiap kenderaan yang kami kerjakan.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Gallery Sections */}
      <section className="py-16 bg-neutral-light">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              {language === 'en' 
                ? 'Specialized Restoration Projects' 
                : 'Projek Pemulihan Khusus'
              }
            </h2>
            <p className="section-subtitle">
              {language === 'en'
                ? 'Our expert team specializes in bringing vintage vehicles back to life'
                : 'Pasukan pakar kami khusus dalam menghidupkan semula kenderaan vintaj'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1570374910698-6db3d787e6fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Classic Car Restoration" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {language === 'en' ? 'Classic Car Restoration' : 'Pemulihan Kereta Klasik'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'We specialize in full and partial restorations of classic vehicles, bringing them back to their original glory or customizing them to your preferences.'
                    : 'Kami khusus dalam pemulihan penuh dan separa kenderaan klasik, mengembalikannya kepada kegemilangan asal atau menyesuaikannya mengikut pilihan anda.'
                  }
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1544990737-a19c01bfd75c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Performance Upgrades" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {language === 'en' ? 'Performance Upgrades' : 'Peningkatan Prestasi'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Enhance your vehicle\'s performance with our expert tuning, engine modifications, and performance part installations.'
                    : 'Tingkatkan prestasi kenderaan anda dengan penalaan pakar kami, pengubahsuaian enjin, dan pemasangan bahagian prestasi.'
                  }
                </p>
              </div>
            </motion.div>
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
              {language === 'en' ? 'Have a Project in Mind?' : 'Ada Projek yang Anda Fikirkan?'}
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Whether it\'s restoration, repair, or customization, our team has the expertise to bring your vision to life.'
                : 'Sama ada pemulihan, pembaikan, atau pengubahsuaian, pasukan kami mempunyai kepakaran untuk merealisasikan visi anda.'
              }
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="btn-accent inline-flex items-center justify-center">
                <i className="fas fa-comments mr-2"></i> 
                {language === 'en' ? 'Discuss Your Project' : 'Bincangkan Projek Anda'}
              </Link>
              <Link href="/services" className="btn-secondary inline-flex items-center justify-center">
                {language === 'en' ? 'View Our Services' : 'Lihat Perkhidmatan Kami'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
