import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfService = () => {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Terms of Service Hero */}
      <section className="py-16 bg-primary">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Terms of Service</h1>
            <p className="text-xl text-white/80">
              Please read these terms carefully before using our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Introduction</h2>
              <p>
                Welcome to Bakemono J Garage Workshop. These Terms of Service ("Terms") govern your use of our services, website, and any related applications or offerings (collectively, our "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
              </p>

              <h2>Service Description</h2>
              <p>
                Bakemono J Garage Workshop provides automotive maintenance, repair, and restoration services for various vehicle makes and models, including vintage cars.
              </p>

              <h2>Appointment Scheduling and Cancellation</h2>
              <p>
                You may schedule appointments through our website, by phone, or in person. We request that cancellations be made at least 24 hours in advance. Repeated no-shows may result in scheduling restrictions.
              </p>

              <h2>Payment and Pricing</h2>
              <p>
                Pricing for our services varies based on the specific service required, parts needed, and labor time. We will provide an estimate before beginning work. Additional costs may arise if unforeseen issues are discovered during service.
              </p>
              <p>
                Payment is due upon completion of service. We accept cash, major credit cards, and bank transfers.
              </p>

              <h2>Service Warranty</h2>
              <p>
                We provide a 30-day warranty on labor for services performed at our workshop. Parts warranties vary according to manufacturer terms. This warranty does not cover damage due to:
              </p>
              <ul>
                <li>Accidents or collisions</li>
                <li>Improper use of the vehicle</li>
                <li>Alterations or repairs by other service providers</li>
                <li>Normal wear and tear</li>
              </ul>

              <h2>Vehicle Storage</h2>
              <p>
                Vehicles left at our workshop for more than 7 days after service completion may incur storage fees. We reserve the right to apply for abandonment title on vehicles left unclaimed for more than 30 days.
              </p>

              <h2>Customer Responsibilities</h2>
              <p>As a customer, you are responsible for:</p>
              <ul>
                <li>Providing accurate information about your vehicle and its issues</li>
                <li>Removing valuable personal items from your vehicle before service</li>
                <li>Promptly picking up your vehicle after service completion</li>
                <li>Paying for services rendered</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Bakemono J Garage Workshop shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, resulting from your use of our Services or any vehicle service we provide.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and images, is the property of Bakemono J Garage Workshop and is protected by copyright and other intellectual property laws.
              </p>

              <h2>Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website. Your continued use of our Services after such changes constitutes your acceptance of the new Terms.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Malaysia, without regard to its conflict of law principles.
              </p>

              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                <strong>Bakemono J Garage Workshop</strong><br />
                Lot 5624/2, Jalan Bakti, Batu 3, Jalan Shahpadu Off Jalan Kapar<br />
                42100 Klang, Selangor, Malaysia<br />
                Phone: (+60) 017-295 2514<br />
                Email: info@bakemonoj.com
              </p>

              <p className="text-gray-500">Last Updated: May 10, 2025</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;