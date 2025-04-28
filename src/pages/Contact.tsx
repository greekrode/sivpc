import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import PageTransition from "../components/PageTransition";

const ContactCard = ({
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
    className="bg-[#F5E6D3] p-6 rounded-none border border-[#957C3D]/20 hover:border-[#957C3D]/40 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group relative overflow-hidden"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 bg-gradient-to-br from-[#D72638]/5 to-transparent pointer-events-none"
    />
    <div className="relative flex items-center space-x-4">
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="text-[#D72638] transition-colors duration-300 h-8 w-8" />
      </motion.div>
      <div>
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-semibold mb-1 text-[#4A3B24]"
        >
          {title}
        </motion.h4>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#5C4830] text-lg"
        >
          {content}
        </motion.span>
      </div>
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <PageTransition>
      <div className="pt-20 bg-[#002349] bg-[url('https://images.unsplash.com/photo-1571974599782-87624638275e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-fixed bg-cover bg-center bg-blend-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            Contact Us
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-[#957C3D]"
              >
                Get in Touch
              </motion.h3>
              <div className="space-y-6">
                <ContactCard
                  icon={Mail}
                  title="Email"
                  content="contact@sivpc.com"
                  index={0}
                />
                <ContactCard
                  icon={Phone}
                  title="Phone"
                  content="+65 6123 4567"
                  index={1}
                />
                <ContactCard
                  icon={MapPin}
                  title="Address"
                  content="123 Marina Bay, Singapore 018956"
                  index={2}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#F5E6D3] p-10 rounded-none border border-[#957C3D]/20 hover:border-[#957C3D]/40 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-[#D72638]/5 to-transparent pointer-events-none"
              />
              <form className="space-y-6 relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-lg font-medium mb-2 text-[#4A3B24]">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-white/80 border border-[#957C3D]/20 focus:border-[#957C3D] focus:outline-none text-[#4A3B24] placeholder-[#5C4830]/50"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-lg font-medium mb-2 text-[#4A3B24]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-white/80 border border-[#957C3D]/20 focus:border-[#957C3D] focus:outline-none text-[#4A3B24] placeholder-[#5C4830]/50"
                    placeholder="your@email.com"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-lg font-medium mb-2 text-[#4A3B24]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 bg-white/80 border border-[#957C3D]/20 focus:border-[#957C3D] focus:outline-none text-[#4A3B24] placeholder-[#5C4830]/50"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#D72638] hover:bg-[#D72638]/90 text-white py-3 px-6 flex items-center justify-center space-x-2 transition-colors duration-300 text-lg font-semibold"
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
      </div>
    </PageTransition>
  );
};

export default Contact;
