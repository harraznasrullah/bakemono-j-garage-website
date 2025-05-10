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
                  <li className="flex items-center">
                    <i className="far fa-clock mr-3 text-accent"></i>
                    <span>{contactInfo.hours.hq}</span>
                  </li>

                  <li className="flex items-center">
                    <i className="fas fa-calendar-times mr-3 text-accent"></i>
                    <span>{language === 'en' ? contactInfo.hours.closed : 'Tutup pada Jumaat'}</span>
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
                <div className="grid grid-cols-2 gap-2 mb-4">
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
              {/* WhatsApp Contact Bar */}
              <motion.div
                className="bg-green-600 text-white rounded-lg shadow-md p-4 mb-4 flex flex-col md:flex-row justify-between items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-3 md:mb-0">
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
                  className="bg-white text-green-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition duration-200 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  <span>{language === 'en' ? 'Chat Now: 017-295 2514' : 'Sembang Sekarang: 017-295 2514'}</span>
                </a>
              </motion.div>

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
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=101.4414%2C3.0418%2C101.4514%2C3.0518&layer=mapnik&marker=3.0468%2C101.4464`}
                  allowFullScreen
                ></iframe>
                <div className="text-center mt-2 text-sm text-gray-500">
                  <a href="https://www.openstreetmap.org/?mlat=3.0468&mlon=101.4464" target="_blank" rel="noopener noreferrer">
                    {language === 'en' ? 'View larger map' : 'Lihat peta lebih besar'}
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
