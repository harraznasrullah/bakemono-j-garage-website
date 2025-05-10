import { useEffect } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/constants";
import { Link } from "wouter";

const SocialFeed = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // Load TikTok embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up on component unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Social Feed Hero */}
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Our Social Media</h1>
            <p className="text-xl text-white/80 mb-8">
              Follow us for updates, tips, and glimpses of our latest automotive work
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-8 md:py-12 bg-neutral-light">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            <motion.a
              href={contactInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <i className="fab fa-facebook text-5xl text-[#1877F2] mb-4"></i>
              <h3 className="text-xl font-heading font-semibold mb-2">Facebook</h3>
              <p className="text-gray-600 mb-4">Follow our page for updates, promotions and customer reviews</p>
              <span className="inline-block text-primary font-medium">@BakemonoJGarage</span>
            </motion.a>

            <motion.a
              href={contactInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <i className="fab fa-instagram text-5xl text-[#E1306C] mb-4"></i>
              <h3 className="text-xl font-heading font-semibold mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4">Check out photos and videos of our work in progress</p>
              <span className="inline-block text-primary font-medium">@bakemonojgarageservice</span>
            </motion.a>

            <motion.a
              href={contactInfo.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <i className="fab fa-tiktok text-5xl text-[#000000] mb-4"></i>
              <h3 className="text-xl font-heading font-semibold mb-2">TikTok</h3>
              <p className="text-gray-600 mb-4">Watch quick videos of our repair processes and results</p>
              <span className="inline-block text-primary font-medium">@bakemonojgarage</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Embedded Feeds Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="section-title">Recent Posts</h2>
            <p className="section-subtitle">
              Stay up-to-date with our latest social media updates
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Facebook Embed */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-4 border-b bg-[#f0f2f5]">
                <h3 className="text-xl font-heading font-semibold flex items-center">
                  <i className="fab fa-facebook-square text-[#1877F2] mr-2"></i> Facebook Feed
                </h3>
              </div>
              <div className="h-[700px] overflow-hidden bg-white">
                <iframe 
                  src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(contactInfo.social.facebook)}&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                  width="100%" 
                  height="700" 
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no" 
                  frameBorder="0" 
                  allow="encrypted-media"
                  title="Facebook Feed"
                ></iframe>
              </div>
            </motion.div>

            {/* TikTok Embed */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-4 border-b bg-[#f0f2f5]">
                <h3 className="text-xl font-heading font-semibold flex items-center">
                  <i className="fab fa-tiktok text-black mr-2"></i> TikTok Feed
                </h3>
              </div>
              <div className="h-[700px] overflow-auto p-4 bg-white">
                <div className="flex flex-col items-center">
                  <iframe 
                    src="https://www.tiktok.com/embed/v2/@bakemonojgarage" 
                    style={{ 
                      width: '100%', 
                      height: '600px', 
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="TikTok Feed"
                  ></iframe>
                  <p className="text-center text-gray-500 mt-4">
                    For more videos, visit our <a href={contactInfo.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-primary font-medium">TikTok profile</a>
                  </p>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">Connect With Us Today</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Have a question about your vehicle? Need to schedule a service appointment?
            </p>
            <Link href="/contact" className="btn-accent inline-flex items-center justify-center">
              <i className="fas fa-comments mr-2"></i> Contact Us
            </Link>
          </motion.div>
        </div>
      </section>


    </>
  );
};

export default SocialFeed;