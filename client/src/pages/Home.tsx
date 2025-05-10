import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { features, services, testimonials, galleryItems } from "@/lib/constants";

const Home = () => {
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
              <div className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                TOP 10 MOST RECOGNISED MECHANICS IN MALAYSIA 2020
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Expert Auto Repair & Maintenance Services
              </h2>
              <p className="text-lg mb-8 text-gray-100">
                Quality and functionality guaranteed. We specialize in general repairs, vintage car restoration, and comprehensive maintenance services.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact" className="btn-accent inline-flex items-center justify-center">
                  <i className="fab fa-whatsapp mr-2 text-xl"></i> Book Appointment
                </Link>
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
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              From routine maintenance to specialized repairs, our experienced team provides comprehensive automotive care for your vehicle.
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
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services#${service.id}`} className="text-primary hover:text-accent font-medium inline-flex items-center transition duration-200">
                    Learn More <i className="fas fa-chevron-right ml-2 text-sm"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-primary inline-flex items-center justify-center">
              View All Services
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
            <h3 className="text-white text-xl md:text-2xl font-heading font-bold mb-2">TOP 10 MOST RECOGNISED MECHANICS IN MALAYSIA 2020</h3>
            <p className="text-white/80 text-lg">Trust your vehicle with award-winning expertise</p>
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
            <h2 className="section-title">Our Work Gallery</h2>
            <p className="section-subtitle">
              Browse through our recent automotive repair projects and restoration work.
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
              View More <i className="fas fa-arrow-right ml-2"></i>
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
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Read testimonials from our satisfied customers who trust us with their vehicles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex text-accent mb-3">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <i className="fas fa-star-half-alt"></i>
                  )}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">{testimonial.initials}</span>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">Ready to Experience Quality Automotive Service?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Book your appointment today and see why we're among Malaysia's top recognized mechanics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="btn-accent inline-flex items-center justify-center">
                <i className="fas fa-calendar-alt mr-2"></i> Book Appointment
              </Link>
              <Link href="/services" className="btn-secondary inline-flex items-center justify-center">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
