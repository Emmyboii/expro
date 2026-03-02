import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Map from '../Components/Map'
import { motion } from "framer-motion";
import {
    FaBolt,
    FaTools,
    FaWater,
    // FaPlug,
    FaHandshake,
    FaClock,
    FaShieldAlt,
} from "react-icons/fa";
import electricalImg from "../Images/electrical_repair.jpeg";
import renovationImg from "../Images/handy.jpeg";
// import lightingImg from "../Images/lighting.jpg";
import applianceImg from "../Images/plumbing.png";
import Testimonials from '../Components/Testimonials';
import { Link } from 'react-router-dom';
import FAQ from '../Components/FAQ';

const Services = () => {

    const services = [
        {
            title: "Handyman Services",
            desc: "Professional general maintenance including repairs, installations, furniture assembly, drywall fixes, and routine property upkeep for homes and commercial spaces.",
            img: renovationImg,
            icon: <FaTools className="text-green-600 text-2xl" />,
            features: [
                "General Repairs",
                "Furniture Assembly",
                "Property Maintenance",
                "Installations & Fixes"
            ]
        },
        {
            title: "Minor Electrical Services",
            desc: "Safe and reliable electrical work including socket repairs, lighting installations, fault diagnostics, and minor wiring solutions handled by trained professionals.",
            img: electricalImg,
            icon: <FaBolt className="text-green-600 text-2xl" />,
            features: [
                "Socket & Switch Repairs",
                "Lighting Installation",
                "Electrical Fault Fixing",
                "Basic Wiring"
            ]
        },
        {
            title: "Minor Plumbing Services",
            desc: "Efficient plumbing solutions covering leak repairs, pipe maintenance, fixture installation, and general water system troubleshooting for residential and commercial needs.",
            img: applianceImg,
            icon: <FaWater className="text-green-600 text-2xl" />,
            features: [
                "Leak Repairs",
                "Pipe Fixing",
                "Fixture Installation",
                "Drainage Solutions"
            ]
        }
    ];

    const valueProps = [
        {
            icon: <FaShieldAlt className="text-blue-500 text-4xl" />,
            title: "Licensed & Insured",
            desc: "Certified professionals ensure safety and reliability.",
        },
        {
            icon: <FaClock className="text-blue-500 text-4xl" />,
            title: "Fast & Reliable",
            desc: "Quick responses and efficient project completion.",
        },
        {
            icon: <FaHandshake className="text-blue-500 text-4xl" />,
            title: "Transparent Pricing",
            desc: "Upfront quotes with no hidden fees.",
        },
    ];

    return (
        <div className="font-sans text-gray-800 antialiased">
            <Navbar />

            <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={electricalImg}
                        alt="Expro Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <div className="relative max-w-[1400px] mx-auto px-6 md:px-20 py-20 flex flex-col justify-center min-h-screen">

                    {/* TOP LABEL */}
                    <motion.span
                        className="uppercase tracking-widest text-sm text-green-400 font-semibold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Expro Facility Services
                    </motion.span>

                    {/* HEADLINE */}
                    <motion.h1
                        className="sm:text-4xl text-3xl md:text-6xl font-extrabold leading-tight max-w-3xl mt-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Reliable Maintenance <br />
                        Solutions for Homes & Businesses
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                        className="text-gray-300 sm:text-lg max-w-xl mt-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Expro provides professional handyman, electrical, and plumbing services
                        with a focus on safety, efficiency, and long-term reliability.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        className="flex gap-4 sm:justify-start justify-center mt-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link to="/contact">
                            <button className="bg-green-600 hover:bg-green-700 sm:px-8 px-5 py-3 sm:text-base text-sm rounded-md font-semibold transition">
                                Request Service
                            </button>
                        </Link>

                        <a href="#services">
                            <button className="border border-white/30 sm:px-8 px-5 py-3 rounded-md sm:text-base text-sm font-semibold hover:bg-white/10 transition">
                                View Services
                            </button>
                        </a>
                    </motion.div>

                    {/* SERVICES STRIP */}
                    <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl">

                        {[
                            {
                                title: "Handyman Services",
                                desc: "General repairs, installations, and property maintenance.",
                            },
                            {
                                title: "Minor Electrical",
                                desc: "Safe wiring fixes, lighting, sockets, and diagnostics.",
                            },
                            {
                                title: "Minor Plumbing",
                                desc: "Leak repairs, pipe fixes, and fixture installations.",
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:bg-white/20 transition"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id='services' className="bg-[#0A0F1A] text-white sm:py-32 py-20 px-6 md:px-20">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

                    {/* LEFT SIDE (Sticky Content) */}
                    <div className="md:sticky top-32 h-fit space-y-8">

                        <p className="uppercase tracking-widest text-green-500 text-sm">
                            Our Services
                        </p>

                        <h2 className="sm:text-4xl text-3xl md:text-5xl font-extrabold leading-tight">
                            Facility Solutions Built for Reliability & Performance
                        </h2>

                        <p className="text-gray-400 sm:text-lg leading-relaxed max-w-md">
                            At Expro Facility Services, we provide dependable, high-quality
                            maintenance and repair solutions tailored for homes and businesses.
                            Our approach combines precision, efficiency, and professionalism.
                        </p>

                        <Link to="/contact">
                            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 mt-5 rounded-md font-semibold transition">
                                Request a Service
                            </button>
                        </Link>

                    </div>

                    {/* RIGHT SIDE (STACKED CARDS) */}
                    <div className="space-y-10">

                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                className="group relative h-[420px] rounded-3xl overflow-hidden"
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                            >

                                {/* Background Image */}
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/70"></div>

                                {/* Content */}
                                <div className="absolute bottom-0 sm:p-8 p-4 w-full">

                                    {/* Title */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-green-600/20 p-2 rounded-md">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-md">
                                        {service.desc}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((item, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 bg-white/10 border border-white/10 rounded-full"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                </div>

                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>


            <section className="bg-gray-950 text-white sm:py-32 py-20 px-6 md:px-20">

                {/* HEADER */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-green-500 uppercase tracking-widest text-sm mb-4">
                        Why Choose Expro
                    </p>

                    <h2 className="sm:text-4xl text-3xl md:text-5xl font-extrabold leading-tight">
                        Built on Reliability, Driven by Excellence
                    </h2>

                    <p className="text-gray-400 mt-6 sm:text-lg leading-relaxed">
                        At Expro Facility Services, we combine technical expertise with
                        dependable service delivery, ensuring every project is handled with
                        precision, safety, and professionalism.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                    {valueProps.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="group border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition-all duration-500"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >

                            {/* ICON */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-green-600/10 text-green-500 mb-6 text-2xl group-hover:scale-110 transition">
                                {item.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                        </motion.div>
                    ))}

                </div>

                {/* METRICS (TRUST SECTION) */}
                <div className="mt-24 border-t border-white/10 pt-16 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                    {[
                        { number: "100+", label: "Projects Completed" },
                        { number: "98%", label: "Client Satisfaction" },
                        { number: "24/7", label: "Service Availability" },
                        { number: "10+", label: "Years Experience" },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-extrabold text-green-500 mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-gray-400 sm:text-sm text-xs uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}

                </div>

            </section>

            <section className="relative bg-[#0A0F1A] text-white sm:py-32 py-20 px-6 md:px-20 overflow-hidden">

                {/* HEADER */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-24"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-green-500 uppercase tracking-widest text-sm mb-4">
                        Process
                    </p>

                    <h2 className="sm:text-4xl text-3xl md:text-5xl font-extrabold">
                        How We Deliver Excellence
                    </h2>

                    <p className="text-gray-400 mt-6 sm:text-lg leading-relaxed">
                        A structured and reliable workflow designed to ensure every project
                        is handled with precision, efficiency, and professionalism.
                    </p>
                </motion.div>

                {/* MAIN GRID */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative">

                    {/* LEFT SIDE (STICKY TIMELINE) */}
                    <div className="relative hidden md:block">

                        <div className="sticky top-40">

                            {/* Vertical line */}
                            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-white/10"></div>

                            {/* Steps indicator */}
                            {[
                                "Request",
                                "Execution",
                                "Completion"
                            ].map((label, idx) => (
                                <div key={idx} className="flex items-center gap-4 mb-16 relative">

                                    {/* Dot */}
                                    <div className="relative z-10 w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                                        <span className="text-green-500 text-sm font-semibold">
                                            {`0${idx + 1}`}
                                        </span>
                                    </div>

                                    <span className="text-gray-400 text-sm">
                                        {label}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT SIDE (CONTENT FLOW) */}
                    <div className="flex flex-col gap-20">

                        {[
                            {
                                number: "01",
                                title: "Request Service",
                                desc: "Submit your request through our platform or contact our team directly. We evaluate your needs and schedule a suitable time.",
                            },
                            {
                                number: "02",
                                title: "Expert Execution",
                                desc: "Our professionals arrive on time and execute the job with precision, ensuring safety and efficiency at every stage.",
                            },
                            {
                                number: "03",
                                title: "Final Inspection",
                                desc: "We complete a full quality check, ensuring everything meets our standards before handing over the finished work.",
                            },
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="relative group"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                            >

                                {/* CARD */}
                                <div className="relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-green-500/30 transition">

                                    {/* Glow effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/10 to-transparent"></div>
                                    </div>

                                    {/* STEP NUMBER */}
                                    <div className="flex items-center justify-between mb-6">

                                        <span className="text-5xl font-bold text-white/10">
                                            {step.number}
                                        </span>

                                        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xl">
                                            ✓
                                        </div>

                                    </div>

                                    {/* CONTENT */}
                                    <h3 className="text-2xl font-semibold mb-4">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed">
                                        {step.desc}
                                    </p>

                                </div>

                            </motion.div>
                        ))}

                    </div>

                </div>

                {/* BACKGROUND DEPTH */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

            </section>

            <Testimonials />

            <section className="relative py-28 px-6 md:px-24 bg-[#0B0F19] text-white">
                {/* subtle grid overlay */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-6">
                        <h2 className="sm:text-4xl text-3xl md:text-5xl font-bold leading-tight">
                            Reliable Facility Maintenance.
                            <br />
                            <span className="text-green-500">Delivered Professionally.</span>
                        </h2>

                        <p className="text-gray-300 sm:text-lg max-w-xl leading-relaxed">
                            Expro Facilities Services provides dependable plumbing, electrical, and
                            maintenance solutions for residential and commercial properties.
                            Our team ensures every job is completed safely, efficiently, and to the
                            highest professional standard.
                        </p>

                        <div className="flex gap-4 sm:justify-start justify-center pt-4">
                            <Link to="/contact">
                                <button className="sm:px-8 px-4 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                                    Request Service
                                </button>
                            </Link>

                            <Link to="/services">
                                <button className="sm:px-8 px-4 py-3 border border-gray-600 rounded-md hover:border-white hover:text-white transition">
                                    View Services
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE (STRUCTURED CARD, NOT PLAYFUL SHAPES) */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <div className="space-y-6">

                            <div className="flex sm:flex-row flex-col justify-between items-center border-b border-white/10 pb-4">
                                <span className="text-gray-400">Service Coverage</span>
                                <span className="font-semibold">West Chester, Ohio</span>
                            </div>

                            <div className="flex sm:flex-row flex-col justify-between items-center border-b border-white/10 pb-4">
                                <span className="text-gray-400">Response Time</span>
                                <span className="font-semibold">Same Day Available</span>
                            </div>

                            <div className="flex sm:flex-row flex-col justify-between items-center border-b border-white/10 pb-4">
                                <span className="text-gray-400">Services</span>
                                <span className="font-semibold">Plumbing & Electrical</span>
                            </div>

                            <div className="flex sm:flex-row flex-col justify-between items-center">
                                <span className="text-gray-400">Support</span>
                                <span className="font-semibold">Mon – Sat</span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <FAQ />
            <Map />
            <Footer />
        </div>
    )
}

export default Services