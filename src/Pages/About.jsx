import { motion } from "framer-motion";
import { FaBolt, FaClock, FaCogs, FaHandshake, FaHandsHelping, FaRocket, FaShieldAlt } from "react-icons/fa";
import aboutTeam from "../Images/electricians working.jpeg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden">

            {/* Subtle dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900"></div>

            {/* Floating geometric shapes */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-green-500/20"
                    style={{
                        width: `${80 + i * 30}px`,
                        height: `${80 + i * 30}px`,
                        top: `${Math.random() * 80}%`,
                        left: `${Math.random() * 80}%`,
                    }}
                    animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 6 + i }}
                />
            ))}

            {/* Central content card */}
            <motion.div
                className="relative z-10 max-w-5xl bg-gray-800/80 backdrop-blur-lg rounded-3xl p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl border border-gray-700"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Left: Text content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="sm:text-4xl text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Welcome to <span className="text-green-400">Expro Facilities Services </span>
                    </h1>
                    <p className="text-gray-300 sm:text-lg md:text-xl mb-6 leading-relaxed">
                        We deliver premium electrical, plumbing, and renovation services to homes and businesses in the Tri-State area.
                        Safety, precision, and excellence guide everything we do.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <Link to="#learn">
                            <motion.button
                                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                            >
                                Learn Our Story
                            </motion.button>
                        </Link>

                        <Link to="/contact">
                            <motion.button
                                className="bg-transparent border border-green-400 text-green-400 px-8 py-3 rounded-full font-semibold hover:bg-green-400 hover:text-white transition transform hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                            >
                                Get a Free Quote
                            </motion.button>
                        </Link>
                    </div>
                </div>

                {/* Right: Team image */}
                <div className="flex-1 hidden md:flex justify-center">
                    <motion.div
                        className="w-full max-w-md overflow-hidden rounded-3xl shadow-2xl border border-gray-700"
                        initial={{ rotate: -2 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <img
                            src={aboutTeam}
                            alt="Our Team"
                            className="w-full object-cover h-80"
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-3xl animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                ↓
            </motion.div>
        </section>
    );
};

const WhoWeAreSection = () => {
    const pods = [
        {
            icon: <FaRocket className="text-green-400 text-3xl" />,
            title: "Innovation",
            desc: "We leverage the latest techniques to deliver smarter electrical solutions.",
        },
        {
            icon: <FaCogs className="text-green-400 text-3xl" />,
            title: "Expert Craftsmanship",
            desc: "Our licensed professionals ensure every project is executed perfectly.",
        },
        {
            icon: <FaHandsHelping className="text-green-400 text-3xl" />,
            title: "Customer Focus",
            desc: "We prioritize your safety, satisfaction, and peace of mind.",
        },
    ];

    return (
        <section id="learn" className="relative bg-gray-900 sm:py-32 py-20 overflow-hidden">

            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] bg-[size:50px_50px] opacity-5 pointer-events-none"></div>

            {/* Heading */}
            <motion.h2
                className="sm:text-4xl text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Who <span className="text-green-400">We Are</span>
            </motion.h2>

            {/* Cards layout */}
            <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-center gap-12 md:gap-8 px-6">

                {pods.map((pod, i) => (
                    <motion.div
                        key={i}
                        className={`bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-700 w-full md:w-80 cursor-pointer hover:translate-y-[-10px] hover:shadow-green-400/40 transition-all`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.3, duration: 0.7 }}
                    >
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 mb-5">
                            {pod.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">{pod.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{pod.desc}</p>
                    </motion.div>
                ))}

            </div>

            {/* Bottom story */}
            <motion.div
                className="mt-28 max-w-4xl mx-auto text-center text-gray-200 sm:text-lg md:text-xl leading-relaxed px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <p>
                    At <span className="text-green-400 font-semibold">Expro facilities services </span>, we are innovators, craftsmen, and partners in transforming your space.
                    Every project is approached with precision, safety, and your satisfaction in mind.
                    Our goal is to deliver electrical and renovation solutions that exceed expectations and bring your vision to life.
                </p>
            </motion.div>
        </section>
    );
};

const ValuesSection = () => {
  const values = [
    {
      icon: <FaShieldAlt className="text-green-400 text-4xl" />,
      title: "Licensed & Insured",
      desc: "Our certified electricians and insured services guarantee safety and professionalism at every step.",
    },
    {
      icon: <FaHandshake className="text-green-400 text-4xl" />,
      title: "Transparent Pricing",
      desc: "We believe in honesty — our quotes are upfront, clear, and without hidden costs.",
    },
    {
      icon: <FaClock className="text-green-400 text-4xl" />,
      title: "Fast Local Service",
      desc: "Serving our community with quick responses and efficient solutions tailored to your needs.",
    },
    {
      icon: <FaBolt className="text-green-400 text-4xl" />,
      title: "Guaranteed Workmanship",
      desc: "Every project is backed by our satisfaction guarantee and decades of combined expertise.",
    },
  ];

  return (
    <section className="relative bg-gray-900 sm:py-32 py-20 px-6 md:px-24 overflow-hidden">
      {/* Subtle floating gradient circles */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>

      <motion.h2
        className="sm:text-5xl text-4xl font-extrabold text-white text-center mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our <span className="text-green-400">Core Values</span>
      </motion.h2>

      {/* Grid of cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-10">
        {values.map((v, i) => (
          <motion.div
            key={i}
            className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer hover:-translate-y-4 hover:shadow-2xl hover:shadow-green-400/30 transition-all border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-700 mb-5">
              {v.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
            <p className="text-gray-300 text-sm">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const MissionVisionSection = () => {
  const missionVision = [
    {
      icon: "https://img.icons8.com/ios-filled/40/ffffff/goal.png",
      title: "Our Mission",
      desc: "To provide safe, efficient, and innovative electrical solutions that improve homes and businesses across the tri-state area, all while exceeding client expectations.",
    },
    {
      icon: "https://toppng.com/uploads/preview/vision-statement-vision-icon-11550185735pikqoehvxu.png",
      title: "Our Vision",
      desc: "To be the most trusted and forward-thinking electrical services company, setting new standards for quality, transparency, and community impact.",
    },
  ];

  return (
    <section className="relative bg-gray-900 sm:py-32 py-20 px-6 md:px-24 overflow-hidden">
      {/* Background floating shapes */}
      <div className="absolute -top-32 left-1/4 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>

      <motion.h2
        className="sm:text-5xl text-4xl font-extrabold text-white text-center mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our <span className="text-green-400">Mission & Vision</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto relative z-10">
        {missionVision.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative bg-gray-800/80 rounded-3xl p-10 flex flex-col items-center text-center hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-400/30 transition-all border border-gray-700 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.3, duration: 0.7 }}
          >
            <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center mb-6">
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {

    return (
        <div className="font-sans text-gray-800 antialiased">
            <Navbar />
            <HeroSection />
            <WhoWeAreSection />
            <ValuesSection />
            <MissionVisionSection />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default About