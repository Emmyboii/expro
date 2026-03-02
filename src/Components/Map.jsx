import React from 'react'
import { Link } from 'react-router-dom'

const Map = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">

            {/* Red & green floating glows */}
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-red-600/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-green-500/20 rounded-full blur-[140px] animate-pulse-slow pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative px-6 md:px-16">

                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <h3 className="sm:text-4xl text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-400">
                        Where We Serve
                    </h3>
                    <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                        Our team provides reliable electrical and handyman services across the <span className="font-semibold text-green-400">Tri-State Area</span> — Ohio, Kentucky, and Indiana.  
                        We ensure safe, efficient, and high-quality solutions wherever you are.
                    </p>
                </div>

                {/* Grid: Map + Info Card */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Map */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 hover:scale-[1.02] transition-transform duration-500">
                        <iframe
                            title="Expro Facilities Services "
                            className="w-full h-[480px] md:h-[520px] border-0 rounded-3xl"
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.4428836792285!2d-84.39521938461867!3d39.3566929794984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840fa54ad42b38b%3A0x94b74258ef08a3f8!2s6942%20Tylersville%20Rd%2C%20West%20Chester%20Township%2C%20OH%2045069!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                        />
                        {/* Floating Pin */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <svg className="w-10 h-10 text-red-500 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0C6.14 0 3 3.14 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                            </svg>
                        </div>
                    </div>

                    {/* Info Card */}
                    <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(16,185,129,0.25)] transition-all duration-500">
                        <h4 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-400">
                            Our Headquarters & Coverage
                        </h4>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex flex-wrap items-center gap-3">
                                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                                <strong>HQ:</strong> 6942 Tylersville Rd, West Chester township, Ohio 45069
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                                Cincinnati, OH & Northern Kentucky
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                                Louisville & Lexington, KY
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                                Indianapolis & Surrounding Areas, IN
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                                Dayton & Columbus, OH
                            </li>
                        </ul>

                        <p className="mt-6 text-gray-400 text-sm leading-relaxed">
                            Whether it’s a quick electrical repair, lighting installation, or handyman service, our team is fully equipped to serve homes and businesses across the Tri-State Area with speed, safety, and precision.
                        </p>

                        <Link
                            to="/contact"
                            className="mt-6 inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                        >
                            Request a Visit
                        </Link>

                        {/* Decorative floating dots */}
                        <div className="absolute -top-6 -left-6 w-6 h-6 bg-red-500/40 rounded-full animate-bounce-slow pointer-events-none"></div>
                        <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-green-500/40 rounded-full animate-bounce-slow pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Map