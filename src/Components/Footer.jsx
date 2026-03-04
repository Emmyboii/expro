import { useEffect, useState } from "react";
import { FaArrowUp, FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import logo from "../Images/NewLogo4.png";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative bg-[#0A0F1A] text-gray-200 overflow-hidden pt-24">
      {/* Background glows */}
      <div className="absolute -top-32 left-0 w-96 h-64 bg-gradient-to-r from-red-500 to-green-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-gradient-to-l from-green-400 to-red-500 opacity-15 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Logo & Info */}
        <motion.div
          className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center lg:text-left max-w-sm">
            <img src={logo} alt="Expro Logo" className="w-32 mx-auto lg:mx-0 mb-4" />
            <p className="text-gray-300 leading-relaxed">
              Trusted electrical and handyman services across the Tri-State Area.
              Licensed & insured. Fast, reliable, and professional.
            </p>
          </div>

          {/* Contact & Newsletter */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-auto">
            {/* Contact Card */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-6 shadow-lg flex flex-col gap-3 hover:shadow-red-500/40 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 text-red-500">
                <FaPhone /> <span> (513) 886-7276</span>
              </div>
              <div className="flex items-center gap-2 text-green-400 break-all">
                <FaEnvelope /> <span>exprofacilitiesservices@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-red-500">
                <FaLocationDot /> <span>Ohio • Kentucky • Indiana</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span>⏰</span> <span>Mon – Sat: 8 AM – 6 PM</span>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-green-500/30 transition flex flex-col gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold sm:text-lg text-white">Stay Connected</h4>
              <p className="text-gray-400 text-sm">
                Subscribe to get updates on services and special offers.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-xl bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-500 to-green-400 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition transform"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-gray-700 py-8 text-center text-sm text-gray-500 flex flex-col lg:flex-row lg:justify-between items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>© {new Date().getFullYear()} <strong className="text-red-500">Expro Facilities Services </strong>. All rights reserved.</span>
          {/* <span className="text-gray-400">Designed for quality & reliability across the Tri-State Area.</span> */}
        </motion.div>
      </div>

      {/* Back to Top Button */}
      {showTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-red-500 to-green-400 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;