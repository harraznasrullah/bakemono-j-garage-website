import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { contactInfo, serviceOptions } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

// Define the form schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(6, "Phone number must be at least 6 characters."),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Message must be at least 10 characters.")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: language === 'en' ? "Message Sent" : "Mesej Dihantar",
        description: language === 'en' 
          ? "Thank you for your message. We'll get back to you soon!" 
          : "Terima kasih atas mesej anda. Kami akan menghubungi anda segera!",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: language === 'en' ? "Error" : "Ralat",
        description: error.message || (language === 'en' 
          ? "There was a problem sending your message. Please try again."
          : "Terdapat masalah menghantar mesej anda. Sila cuba lagi."),
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <>
      {/* Contact Hero */}
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-white/80 mb-8">
              {language === 'en' 
                ? 'Get in touch with our team for any inquiries about our services'
                : 'Hubungi pasukan kami untuk sebarang pertanyaan tentang perkhidmatan kami'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-neutral-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              {/* WhatsApp Contact Box - Moved to the top for mobile */}
              <motion.div
                className="bg-green-600 text-white rounded-lg shadow-md p-4 mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <i className="fab fa-whatsapp text-3xl mr-3"></i>
                    <div>
                      <h3 className="text-lg font-medium">
                        {language === 'en' ? 'Contact Us on WhatsApp' : 'Hubungi Kami di WhatsApp'}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {language === 'en' 
                          ? 'Fast response for inquiries and appointments' 
                          : 'Respons cepat untuk pertanyaan dan temujanji'
                        }
                      </p>
                    </div>
                  </div>
                  <a 
                    href={contactInfo.social.whatsapp} 
                    className="bg-white text-green-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition duration-200 flex items-center w-full sm:w-auto justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    <span>{language === 'en' ? 'Chat Now: 017-295 2514' : 'Sembang Sekarang: 017-295 2514'}</span>
                  </a>
                </div>
              </motion.div>
              
              {/* Contact Information Box */}
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-heading font-semibold mb-6">{t('contact.info.title')}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">{t('contact.address')}</h4>
                      <p className="text-gray-600">{contactInfo.address}</p>
                      <div className="flex space-x-2 mt-3">
                        <a 
                          href="https://www.google.com/maps/dir/?api=1&destination=Bakemono+J+Garage+Workshop+%26+Service%2C+28%2C+JALAN+PENGASAH+4%2C+BATU+3+3%2F4%2C+Jalan+Kapar%2C+Kampung+Rantau+Panjang%2C+42100+Klang%2C+Selangor"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors"
                        >
                          <i className="fab fa-google mr-2"></i>
                          {language === 'en' ? 'Google Maps' : 'Google Maps'}
                        </a>
                        <a 
                          href="https://waze.com/ul?ll=3.0733165,101.4106939&navigate=yes"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-sky-500 text-white text-sm font-medium rounded-md hover:bg-sky-600 transition-colors"
                        >
                          <i className="fab fa-waze mr-2"></i>
                          {language === 'en' ? 'Waze' : 'Waze'}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">{t('contact.phone')}</h4>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                      <p className="text-sm text-gray-500">
                        {language === 'en' ? contactInfo.phoneNote : 'Hubungi atau WhatsApp untuk pertanyaan: 017-295 2514'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="contact-icon">
                      <i className="far fa-clock"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">{t('contact.hours')}</h4>
                      <p className="text-gray-600">{contactInfo.hours.hq}</p>
                      <p className="text-gray-600 font-medium">
                        {language === 'en' ? contactInfo.hours.closed : 'Tutup: Ahad'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4">{t('contact.connect')}</h4>
                  <div className="flex space-x-4">
                    <a 
                      href={contactInfo.social.facebook} 
                      className="social-icon"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a 
                      href={contactInfo.social.instagram} 
                      className="social-icon"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a 
                      href={contactInfo.social.tiktok} 
                      className="social-icon"
                      aria-label="TikTok"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-tiktok"></i>
                    </a>
                    <a 
                      href={contactInfo.social.whatsapp} 
                      className="social-icon"
                      aria-label="WhatsApp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-primary text-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-heading font-semibold mb-4">{t('contact.hours')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="far fa-clock mt-1 mr-3 text-accent"></i>
                    <span className="flex-1">{contactInfo.hours.hq}</span>
                  </li>

                  <li className="flex items-start">
                    <i className="fas fa-calendar-times mt-1 mr-3 text-accent"></i>
                    <span className="flex-1">{language === 'en' ? contactInfo.hours.closed : 'Tutup pada Jumaat'}</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Service Area Section - SEO Enhancement */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mt-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-xl font-heading font-semibold mb-4">
                  {language === 'en' ? 'Our Service Areas' : 'Kawasan Perkhidmatan Kami'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en' 
                    ? 'Proudly serving customers throughout:' 
                    : 'Berbangga melayani pelanggan di seluruh:'}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                    <span>Klang</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                    <span>Shah Alam</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                    <span>Subang Jaya</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                    <span>Port Klang</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                    <span>Kapar</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                    <span>Meru</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  {language === 'en'
                    ? 'And all surrounding areas in Selangor'
                    : 'Dan semua kawasan sekitarnya di Selangor'
                  }
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-2">

              <motion.div 
                className="bg-white rounded-lg shadow-md p-6 mb-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-heading font-semibold mb-6">{t('contact.form.title')}</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.name')}</FormLabel>
                            <FormControl>
                              <Input placeholder={language === 'en' ? "Your name" : "Nama anda"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.email')}</FormLabel>
                            <FormControl>
                              <Input placeholder={language === 'en' ? "Your email" : "Emel anda"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.phone')}</FormLabel>
                          <FormControl>
                            <Input placeholder={language === 'en' ? "Your phone number" : "Nombor telefon anda"} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.service')}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={language === 'en' ? "Select a service" : "Pilih perkhidmatan"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {serviceOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {language === 'en' ? option.label : option.labelMs || option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.message')}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={language === 'en' 
                                ? "Describe your automotive needs..." 
                                : "Terangkan keperluan automotif anda..."
                              } 
                              rows={4}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="btn-primary"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i> 
                          {language === 'en' ? 'Sending...' : 'Menghantar...'}
                        </>
                      ) : (
                        t('contact.form.submit')
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>

              <motion.div 
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <iframe 
                  title="Bakemono J Garage Workshop Location" 
                  className="w-full h-80 border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0799535803208!2d101.4106939105733!3d3.0733164968894706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc549127fea2af%3A0xea94958e3bcbfbca!2sBakemono%20J%20Garage%20Workshop%20%26%20Service!5e0!3m2!1sen!2smy!4v1746942287763!5m2!1sen!2smy"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
                <div className="text-center mt-2 text-sm text-gray-500">
                  <a href="https://www.google.com/maps/place/Bakemono+J+Garage+Workshop+%26+Service/@3.0733165,101.4106939,17z/" target="_blank" rel="noopener noreferrer">
                    {language === 'en' ? 'View on Google Maps' : 'Lihat di Google Maps'}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
