import Navbar from '../Components/Navbar'
import Map from '../Components/Map'
import Footer from '../Components/Footer'
import FAQ from '../Components/FAQ'
import contact from '../Images/contact2.jpg'
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa6"

const Contact = () => {
    return (
        <div className="font-sans text-gray-800 antialiased">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section
                className="relative sm:py-32 py-20 px-6 md:px-24 text-white"
                style={{
                    backgroundImage: `url(${contact})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark Corporate Overlay */}
                <div className="absolute inset-0 bg-black/75"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">

                    {/* Heading */}
                    <h1 className="sm:text-4xl text-3xl md:text-5xl font-bold leading-tight mb-6">
                        Contact <span className="text-green-500">Expro Facilities Services</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-gray-300 sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Professional plumbing and electrical services for residential and commercial
                        properties. Get in touch with our team for reliable support and fast response.
                    </p>

                    {/* Contact Info Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">

                        <div className="bg-white/5 border border-white/10 p-5 rounded-lg">
                            <p className="text-gray-400 text-sm">Phone</p>
                            <a href="tel:5138867276" className="sm:text-lg font-semibold hover:text-white">
                                 (513) 886-7276
                            </a>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-5 rounded-lg">
                            <p className="text-gray-400 text-sm">Email</p>
                            <a
                                href="mailto:exprofacilitiesservices@gmail.com"
                                className="sm:text-lg font-semibold break-all hover:text-white"
                            >
                                exprofacilitiesservices@gmail.com
                            </a>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-5 rounded-lg">
                            <p className="text-gray-400 text-sm">Office</p>
                            <p className="sm:text-lg font-semibold">
                                6942 Tylersville Rd,<br />
                                West Chester Township,<br />
                                Ohio 45069
                            </p>
                        </div>

                    </div>

                    {/* CTA */}
                    <a
                        href="tel:5138867276"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-400 transition"
                    >
                        Call Now <FaArrowRight />
                    </a>

                </div>
            </section>

            {/* ===== CONTACT INFO GRID ===== */}
            <section className="relative sm:py-32 py-20 px-6 md:px-24 bg-[#0f1115] text-white overflow-hidden">

                {/* Ambient Glow */}
                <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />

                <div className="relative max-w-[1400px] mx-auto">

                    {/* Header */}
                    <motion.div
                        className="mb-20 max-w-2xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="sm:text-4xl text-3xl md:text-5xl font-bold leading-tight">
                            Contact <span className="text-green-500">Expro Facilities Services</span>
                        </h2>
                        <p className="mt-4 text-gray-400">
                            Speak with our team for service bookings, consultations, and project enquiries.
                        </p>
                    </motion.div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {[
                            {
                                title: "Phone",
                                value: " (513) 886-7276",
                                link: "tel:5138867276",
                            },
                            {
                                title: "Email",
                                value: "exprofacilitiesservices@gmail.com",
                                link: "mailto:exprofacilitiesservices@gmail.com",
                            },
                            {
                                title: "Office",
                                value: "6942 Tylersville Rd, West Chester Township, Ohio 45069",
                            },
                            {
                                title: "Working Hours",
                                value: "Mon – Sat • 8AM – 6PM",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="relative group p-[1px] rounded-2xl bg-gradient-to-b from-white/20 to-white/5"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Glass Panel */}
                                <div className="h-full rounded-2xl bg-white/5 backdrop-blur-xl md:p-8 p-4 flex flex-col justify-between">

                                    {/* Title */}
                                    <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
                                        {item.title}
                                    </p>

                                    {/* Value */}
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            className="sm:text-lg break-all font-semibold text-white group-hover:text-white transition"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="sm:text-lg font-semibold text-white leading-relaxed">
                                            {item.value}
                                        </p>
                                    )}

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl bg-white/10 blur-xl"></div>

                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-12"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold">
                                Need Immediate Assistance?
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Our team is available for urgent service requests and consultations.
                            </p>
                        </div>

                        <a
                            href="tel:5138867276"
                            className="relative px-8 py-3 rounded-full bg-white text-black font-semibold overflow-hidden group"
                        >
                            <span className="relative z-10">Call Now</span>

                            {/* Shine Effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700"></span>
                        </a>
                    </motion.div>

                </div>
            </section>

            <Map />

            {/* ===== FAQ & FOOTER ===== */}
            <div className="mt-24">
                <FAQ />
                <Footer />
            </div>
        </div>
    )
}

export default Contact
