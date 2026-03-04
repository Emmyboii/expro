// src/Pages/Home.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaBolt,
    FaWrench,
    FaLightbulb,
} from "react-icons/fa";
import heroImg from "../Images/hero.png";
import electricians from "../Images/electrician.jpeg";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Testimonials from "../Components/Testimonials";
import Map from "../Components/Map";
import FAQ from "../Components/FAQ";

const Home = () => {
    const [filter, setFilter] = useState("All");
    const [expanded, setExpanded] = useState(null); // id of expanded case-study

    const SERVICES = [
        {
            id: "electrical",
            title: "Electrical Repairs",
            short: "Wiring, breakers, outlets — fast & code-compliant.",
            colorFrom: "from-yellow-400",
            colorTo: "to-blue-500",
            icon: <FaBolt />,
            category: "Electrical",
            long:
                "Troubleshooting, panel upgrades, circuit fixes, and safe wiring by licensed electricians. We document before/after and explain the fix.",
        },
        {
            id: "handyman",
            title: "Handyman & Maintenance",
            short: "Drywall, mounting, trim, and small renovations.",
            colorFrom: "from-green-400",
            colorTo: "to-teal-500",
            icon: <FaWrench />,
            category: "Handyman",
            long:
                "One-off handyman tasks or recurring maintenance. Clean, fast, and respectful: we arrive on time and leave spaces tidy.",
        },
        {
            id: "lighting",
            title: "Lighting Upgrades",
            short: "Design-led lighting, recessed, outdoor & smart.",
            colorFrom: "from-purple-400",
            colorTo: "to-pink-500",
            icon: <FaLightbulb />,
            category: "Lighting",
            long:
                "Energy-efficient fixtures, layout planning, dimmers and smart home integration. We mock-up lighting plans so you can preview the mood.",
        },
        {
            id: "plumbing",
            title: "Minor Plumbing Services",
            short: "Leak repairs, fixture installs, and drainage solutions.",
            colorFrom: "from-indigo-400",
            colorTo: "to-sky-500",
            icon: <FaWrench />,
            category: "Plumbing",
            long:
                "We handle essential plumbing needs including leak detection and repairs, faucet and fixture installations, pipe adjustments, and drainage fixes. Our team ensures clean, efficient work with proper testing to guarantee reliable water flow and long-term performance.",
        },
    ];

    // compute visible services by filter
    const visible = SERVICES.filter((s) => filter === "All" || s.category === filter);

    return (
        <div className="font-sans text-gray-800 antialiased">
            <Navbar />

            <main>
                <section className="relative min-h-[100vh] flex items-center bg-gray-950 text-white overflow-hidden">

                    {/* Background */}
                    <div className="absolute inset-0">
                        <img
                            src={heroImg}
                            alt="Expro handyman services"
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    </div>

                    {/* Pattern overlay (adds depth) */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:20px_20px]" />

                    {/* Content */}
                    <div className="relative z-10 px-6 md:px-20 lg:px-28 w-full max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 items-center">

                        {/* LEFT CONTENT */}
                        <div>

                            {/* Small badge */}
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-1 rounded-full text-sm text-gray-300 mb-6 border border-white/10">
                                <span className="w-2 h-2 bg-green-500 rounded-full" />
                                Trusted Home Services
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                                Fix It Fast.
                                <br />
                                Fix It <span className="text-red-500">Right.</span>
                            </h1>

                            {/* Subtext */}
                            <p className="mt-6 text-gray-300 sm:text-lg leading-relaxed max-w-xl">
                                Electrical faults, plumbing issues, or general repairs —
                                Expro provides skilled technicians to handle it all,
                                quickly and professionally.
                            </p>

                            {/* Highlights */}
                            <div className="mt-6 flex flex-wrap gap-5 text-sm">
                                <span className="flex items-center gap-2 text-gray-400">
                                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                                    Same-day service
                                </span>
                                <span className="flex items-center gap-2 text-gray-400">
                                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                                    Verified experts
                                </span>
                                <span className="flex items-center gap-2 text-gray-400">
                                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                                    Affordable pricing
                                </span>
                            </div>

                            {/* CTA */}
                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    to="/contact"
                                    className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold shadow-lg transition"
                                >
                                    Book a Service
                                </Link>

                                <a
                                    href="tel:5138867276"
                                    className="border border-white/20 hover:border-green-500 px-8 py-3 rounded-full transition"
                                >
                                    Call Now
                                </a>

                            </div>
                        </div>

                        {/* RIGHT SIDE (CARD / INFO PANEL) */}
                        <div className="hidden lg:block">

                            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-2xl">

                                <h3 className="text-xl font-semibold mb-4">
                                    Our Services
                                </h3>

                                <div className="space-y-4 text-gray-300">

                                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                        <span>Electrical Repairs</span>
                                        <span className="text-green-400 text-sm">Available</span>
                                    </div>

                                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                        <span>Plumbing Services</span>
                                        <span className="text-green-400 text-sm">Available</span>
                                    </div>

                                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                        <span>Home Fixes</span>
                                        <span className="text-green-400 text-sm">Available</span>
                                    </div>

                                </div>

                                {/* Divider */}
                                <div className="my-5 border-t border-white/10" />

                                {/* Contact block */}
                                <div className="space-y-2 text-sm text-gray-300">
                                    <p>📞  (513) 886-7276</p>
                                    <p>📍 West Chester, Ohio</p>
                                    <p className="text-green-400">● Available Now</p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Accent line (subtle brand feel) */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 via-green-500 to-transparent opacity-40" />

                </section>
                {/* Bottom wave divider */}
                <div className="relative bg-gray-600">
                    <svg
                        className="w-full -mt-1"
                        viewBox="0 0 1440 80"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#f9fafb"
                            d="M0,32 C480,120 960,-40 1440,40 L1440,80 L0,80 Z"
                        ></path>
                    </svg>
                </div>

                <section className="py-24 bg-white relative overflow-hidden">

                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] [background-size:24px_24px]" />

                    <div className="relative max-w-[1400px] mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT — IMAGE + EXPERIENCE CARD */}
                        <div className="relative">

                            {/* Image */}
                            <div className="overflow-hidden shadow-xl">
                                <img
                                    src={electricians}
                                    alt="Expro team working"
                                    className="w-full h-[480px] object-cover"
                                />
                            </div>

                            {/* Experience badge */}
                            {/* <div className="absolute bottom-6 left-6 bg-white px-6 py-4 shadow-lg border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900">10+</h3>
                                <p className="text-sm text-gray-500">Years Experience</p>
                            </div> */}

                            {/* Accent border */}
                            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-red-600 to-green-600" />

                        </div>

                        {/* RIGHT — CONTENT */}
                        <div>

                            {/* Label */}
                            <div className="mb-5">
                                <p className="text-sm uppercase tracking-widest text-gray-500">
                                    About Expro
                                </p>
                                <div className="w-14 h-[3px] bg-red-600 mt-2" />
                            </div>

                            {/* Heading */}
                            <h2 className="sm:text-4xl text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Built on Quality, Reliability and Professional Service
                            </h2>

                            {/* Description */}
                            <p className="mt-6 text-gray-600 sm:text-lg leading-relaxed max-w-xl">
                                At <span className="font-semibold text-gray-900">Expro</span>, we provide dependable
                                electrical, plumbing, and home repair services designed to keep your property
                                safe and functioning efficiently. Our team is committed to delivering
                                professional workmanship on every project.
                            </p>

                            {/* Feature points */}
                            <div className="mt-8 grid sm:grid-cols-2 gap-6">

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Certified Technicians</h4>
                                        <p className="text-sm text-gray-500">Skilled and experienced professionals</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Reliable Service</h4>
                                        <p className="text-sm text-gray-500">On-time and consistent delivery</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Affordable Pricing</h4>
                                        <p className="text-sm text-gray-500">Transparent and fair costs</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Customer Satisfaction</h4>
                                        <p className="text-sm text-gray-500">We prioritize your needs</p>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div className="mt-10 flex gap-4">

                                <Link
                                    to="/about"
                                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold transition"
                                >
                                    Learn More
                                </Link>

                                <Link
                                    to="/contact"
                                    className="border border-gray-300 hover:border-green-600 px-8 py-3 font-medium text-gray-700 transition"
                                >
                                    Contact Us
                                </Link>

                            </div>

                        </div>
                    </div>
                </section>

                <section className="relative bg-gray-950 text-white py-24 overflow-hidden">

                    {/* Subtle background texture */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:22px_22px]" />

                    <div className="relative max-w-[1400px] mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT — TEXT */}
                        <div>

                            {/* Label */}
                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-widest text-gray-400">
                                    Why Choose Expro
                                </p>
                                <div className="w-16 h-[3px] bg-red-600 mt-2" />
                            </div>

                            {/* Heading */}
                            <h2 className="sm:text-4xl text-3xl md:text-5xl font-bold leading-tight">
                                Professional Service.
                                <br />
                                Proven Results.
                            </h2>

                            {/* Description */}
                            <p className="mt-6 text-gray-400 sm:text-lg leading-relaxed max-w-xl">
                                We deliver reliable handyman solutions with a focus on safety,
                                efficiency, and long-lasting results. Our team is committed to
                                providing high-quality service you can depend on.
                            </p>

                            {/* Divider */}
                            <div className="mt-8 w-20 h-[2px] bg-gray-700" />

                            {/* Trust points */}
                            <div className="mt-8 space-y-5">

                                {[
                                    "Experienced & Certified Technicians",
                                    "Fast Response & Reliable Scheduling",
                                    "Transparent Pricing with No Hidden Fees",
                                    "Quality Workmanship Guaranteed"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-4">

                                        <div className="w-10 h-10 flex items-center justify-center bg-green-600/10 border border-green-600/30">
                                            <span className="text-green-400">✓</span>
                                        </div>

                                        <p className="text-gray-300">{text}</p>
                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* RIGHT — GRID CARDS */}
                        <div className="grid sm:grid-cols-2 gap-6">

                            {[
                                {
                                    title: "Licensed & Insured",
                                    desc: "Fully compliant services ensuring safety and accountability."
                                },
                                {
                                    title: "Trusted Professionals",
                                    desc: "Skilled experts with hands-on experience."
                                },
                                {
                                    title: "Fast Service",
                                    desc: "Quick response times for urgent needs."
                                },
                                {
                                    title: "Guaranteed Work",
                                    desc: "We stand behind every job we complete."
                                }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="relative bg-gray-900 border border-gray-800 p-6 hover:border-gray-600 transition group"
                                >

                                    {/* Top accent line */}
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 to-green-600 opacity-0 group-hover:opacity-100 transition" />

                                    <h3 className="sm:text-lg font-semibold mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Right vertical accent */}
                    <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-red-600 to-green-600 opacity-40" />

                </section>

                <section className="relative py-24 px-6 md:px-20 bg-[#0A0F1A] text-white overflow-hidden">

                    {/* subtle grid background */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

                    <div className="relative max-w-[1400px] mx-auto">

                        {/* HEADER */}
                        <div className="mb-16 max-w-3xl">
                            <h2 className="sm:text-4xl text-3xl md:text-5xl font-bold leading-tight">
                                Engineering-Grade Services
                            </h2>

                            <div className="w-16 h-[3px] bg-gradient-to-r from-red-500 to-green-400 mt-5 mb-6 rounded-full"></div>

                            <p className="text-gray-400 sm:text-lg leading-relaxed">
                                Expro delivers reliable electrical, plumbing, and facility maintenance solutions
                                built on precision, compliance, and operational excellence.
                            </p>
                        </div>

                        {/* MAIN LAYOUT */}
                        <div className="grid lg:grid-cols-5 gap-10">

                            {/* SIDEBAR FILTER */}
                            <div className="md:col-span-1 space-y-3">
                                <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
                                    Categories
                                </p>

                                {["All", "Handyman", "Minor Electrical", "Minor Plumbing"].map((c) => (
                                    <button
                                        key={c}
                                        onClick={() => { setFilter(c); setExpanded(null); }}
                                        className={`w-full text-left px-4 py-3 rounded-lg border transition
                                            ${filter === c
                                                ? "border-red-500 bg-red-500/10 text-white"
                                                : "border-gray-700 text-gray-400 hover:border-green-400 hover:text-white"
                                            }`}
                                    >
                                        {c}
                                    </button>
                                ))}

                                {/* CONTACT PANEL */}
                                <div className="mt-8 p-5 border border-gray-700 rounded-xl bg-gray-900">
                                    <p className="text-sm text-gray-400">Need assistance?</p>

                                    <a href="tel:5138867276" className="block mt-3 font-semibold hover:text-red-500">
                                         (513) 886-7276
                                    </a>

                                    <a href="mailto:exprofacilitiesservices@gmail.com" className="block text-gray-400 break-all text-sm hover:text-green-400">
                                        exprofacilitiesservices@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* SERVICES GRID */}
                            <div className="lg:col-span-4">

                                {/* STATS BAR */}
                                <div className="grid sm:grid-cols-3 grid-cols-2 gap-6 mb-10">
                                    {[
                                        { value: "100+", label: "Projects Delivered" },
                                        { value: "4.8", label: "Client Rating" },
                                        { value: "24/7", label: "Support Availability" },
                                    ].map((stat, i) => (
                                        <div key={i} className="border border-gray-800 p-5 rounded-xl bg-gray-900 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] transition">
                                            <div className="text-2xl font-bold">{stat.value}</div>
                                            <div className="text-sm text-gray-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* SERVICE CARDS */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <AnimatePresence mode="popLayout">
                                        {visible.map((s) => (
                                            <motion.div
                                                key={s.id}
                                                layout
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                className="group relative border border-gray-800 rounded-xl bg-gray-900 p-6 cursor-pointer hover:border-gradient-to-r hover:from-red-500 hover:to-green-400 transition"
                                                onClick={() => setExpanded((prev) => (prev === s.id ? null : s.id))}
                                            >

                                                {/* ICON */}
                                                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gradient-to-br from-red-500/10 to-green-400/10 text-red-500 text-xl mb-4">
                                                    {s.icon}
                                                </div>

                                                {/* TITLE */}
                                                <h4 className="font-semibold sm:text-lg text-white">
                                                    {s.title}
                                                </h4>

                                                <p className="text-sm text-gray-400 mt-2">
                                                    {s.short}
                                                </p>

                                                {/* ACTIONS */}
                                                <div className="mt-5 flex justify-between items-center text-sm">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.location.href = "/contact";
                                                        }}
                                                        className="text-red-500 hover:underline"
                                                    >
                                                        Request Service →
                                                    </button>

                                                    <span className="text-gray-500 group-hover:text-white">
                                                        Details
                                                    </span>
                                                </div>

                                                {/* EXPANDED PANEL */}
                                                <AnimatePresence>
                                                    {expanded === s.id && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="mt-5 border-t border-gray-800 pt-4"
                                                        >
                                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                                {s.long}
                                                            </p>

                                                            <div className="mt-4 flex gap-3">
                                                                <Link
                                                                    to="/contact"
                                                                    className="px-4 py-2 bg-gradient-to-r from-red-500 to-green-400 rounded-lg text-sm font-semibold hover:opacity-90 transition"
                                                                >
                                                                    Get Quote
                                                                </Link>

                                                                <button
                                                                    onClick={() => setExpanded(null)}
                                                                    className="px-4 py-2 border border-gray-700 rounded-lg text-sm text-gray-400 hover:text-white"
                                                                >
                                                                    Close
                                                                </button>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                            </div>
                        </div>

                        {/* BOTTOM CTA */}
                        <div className="mt-20 p-10 border border-gray-800 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-2xl font-semibold text-white">
                                    Let’s handle your next project
                                </h4>
                                <p className="text-gray-400 mt-2">
                                    Tell us your requirements and we’ll deliver a reliable solution.
                                </p>
                            </div>

                            <div className="flex sm:flex-row flex-col w-full items-center md:justify-end justify-center text-center gap-4">
                                <Link
                                    to="/contact"
                                    className="px-6 py-3 bg-gradient-to-r from-red-500 to-green-400 rounded-lg sm:w-auto w-full font-semibold hover:opacity-90 transition"
                                >
                                    Get Started
                                </Link>

                                <Link
                                    to="/services"
                                    className="px-6 py-3 border border-gray-700 sm:w-auto w-full rounded-lg hover:bg-gray-800"
                                >
                                    View Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <Testimonials />
                <FAQ />
                <Map />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
