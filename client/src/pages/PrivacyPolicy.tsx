import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Privacy Policy Hero */}
      <section className="py-16 bg-primary">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Privacy Policy</h1>
            <p className="text-xl text-white/80">
              How we collect, use, and protect your information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                Bakemono J Garage Workshop ("we", "our", or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by the terms described in this Privacy Policy.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when contacting us or scheduling services.</li>
                <li><strong>Vehicle Information:</strong> Details about your vehicle, including make, model, year, and service history.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and other data automatically collected when you visit our website.</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including:</p>
              <ul>
                <li>Providing and maintaining our services</li>
                <li>Responding to your inquiries and service requests</li>
                <li>Sending service reminders and promotional communications</li>
                <li>Improving our website and service offerings</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2>How We Share Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul>
                <li>With service providers who assist us in operating our business</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
              </p>

              <h2>Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul>
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to object to or restrict processing of your information</li>
              </ul>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;