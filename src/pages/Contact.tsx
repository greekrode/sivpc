import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

const ContactInfo = ({
  icon: Icon,
  title,
  content,
  index,
}: {
  icon: typeof Mail;
  title: string;
  content: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-center space-x-4"
  >
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="text-[#c9a86b] transition-colors duration-300 h-8 w-8" />
    </motion.div>
    <div>
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl font-semibold mb-1 text-[#ffffff]"
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
  </motion.div>
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

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-10"
              >
                <div className="inline-block">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#c9a86b] mb-2">
                    Contact Information
                  </h2>
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
                </div>
                <div className="space-y-8">
                  <ContactInfo
                    icon={Mail}
                    title="Email"
                    content="contact@sivpc.com"
                    index={0}
                  />
                  <ContactInfo
                    icon={Phone}
                    title="Whatsapp"
                    content="+65 9774 7304"
                    index={1}
                  />
                  <ContactInfo
                    icon={MapPin}
                    title="Location"
                    content="Singapore"
                    index={2}
                  />
                </div>
              </motion.section>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-lg font-medium mb-2 text-[#4A3B24]">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-white/80 border border-[#d9cdb8] focus:border-[#c9a86b] focus:outline-none text-[#4A3B24] placeholder-[#5e4b3b]/50 rounded-md"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-2 text-[#4A3B24]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-white/80 border border-[#d9cdb8] focus:border-[#c9a86b] focus:outline-none text-[#4A3B24] placeholder-[#5e4b3b]/50 rounded-md"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-2 text-[#4A3B24]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 bg-white/80 border border-[#d9cdb8] focus:border-[#c9a86b] focus:outline-none text-[#4A3B24] placeholder-[#5e4b3b]/50 rounded-md"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#c9a86b] hover:bg-[#c9a86b]/90 text-white py-3 px-6 flex items-center justify-center space-x-2 transition-colors duration-300 text-lg font-semibold rounded-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
