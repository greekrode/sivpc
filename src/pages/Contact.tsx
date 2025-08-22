import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

const ContactInfo = ({
  icon: Icon,
  title,
  content,
}: {
  icon: typeof Mail;
  title: string;
  content: string;
}) => (
  <div className="text-center space-y-3">
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <Icon className="text-[#c9a86b] transition-colors duration-300 h-10 w-10" />
    </motion.div>
    <div>
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl font-semibold mb-2 text-[#ffffff]"
      >
        {title}
      </motion.h4>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-[#ffffff]/80 text-lg"
      >
        {content}
      </motion.span>
    </div>
  </div>
);

const Contact = () => {
  return (
    <PageTransition>
      {/* Blurred, fixed background overlay */}
      <div
        className="fixed inset-0 z-0 pt-20"
        style={{
          background: "#314e61",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          filter: "blur(5px)",
        }}
      />

      {/* Main content - not fixed, so it scrolls normally */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-16 relative"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#c9a86b] to-transparent absolute bottom-0"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-light text-[#ffffff] tracking-wide mb-2 py-16"
            >
              Get in <span className="text-[#c9a86b] font-semibold">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[#ffffff] font-light text-xl md:text-2xl max-w-3xl leading-relaxed"
            >
              Have questions about the events? We're here to help you.
            </motion.p>
          </motion.div>

          <div className="space-y-16">
            {/* Contact Information Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#c9a86b] mb-4">
                  Contact Information
                </h2>
                <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#c9a86b] to-transparent mx-auto" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-[#c9a86b]/30 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <ContactInfo
                    icon={Mail}
                    title="Email"
                    content="contact@sivpc.com"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-[#c9a86b]/30 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <ContactInfo
                    icon={Phone}
                    title="WhatsApp"
                    content="+65 9774 7304"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-[#c9a86b]/30 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <ContactInfo
                    icon={MapPin}
                    title="Location"
                    content="Singapore"
                  />
                </motion.div>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-center space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm p-12 rounded-lg border border-[#c9a86b]/30 max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-[#c9a86b] mb-4">
                  Ready to Join Us?
                </h3>
                <p className="text-[#ffffff]/90 text-lg mb-6 leading-relaxed">
                  Whether you're a pianist, teacher, or music enthusiast, we'd love to hear from you. 
                  Reach out with any questions about our events, competitions, or how to get involved.
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <motion.a
                    href="mailto:contact@sivpc.com"
                    className="bg-[#c9a86b] hover:bg-[#c9a86b]/90 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </motion.a>
                  <motion.a
                    href="https://wa.me/6597747304"
                    className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-5 h-5" />
                    WhatsApp
                  </motion.a>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
