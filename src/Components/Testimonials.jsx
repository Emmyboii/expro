import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessica Reynolds",
      role: "Homeowner — Cincinnati, OH",
      comment:
        "Expro upgraded our lighting system and resolved a wiring issue we’d been dealing with for months. Clean work and very professional.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Davenport",
      role: "Property Manager — Louisville, KY",
      comment:
        "Fast response and reliable service. They handled multiple electrical repairs across our units without any issues.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Alyssa Cooper",
      role: "Homeowner — Indianapolis, IN",
      comment:
        "Very respectful team. Installed new fittings and fixed a leak in under an hour. Will definitely use again.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      name: "Daniel Peterson",
      role: "Facility Supervisor — Dayton, OH",
      comment:
        "We had an urgent electrical issue at our workshop. Expro responded quickly and got everything back running the same day.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      name: "Erin Wallace",
      role: "Landlord — Lexington, KY",
      comment:
        "Reliable and consistent. My tenants had plumbing issues and Expro resolved everything without delays.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Brian Mitchell",
      role: "Business Owner — Columbus, OH",
      comment:
        "Professional team that understands commercial requirements. They completed our repairs with minimal downtime.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Sophia Turner",
      role: "Homeowner — Hamilton, OH",
      comment:
        "Good communication and fair pricing. The technician explained everything clearly before starting the job.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Kevin Brooks",
      role: "Apartment Manager — Cincinnati, OH",
      comment:
        "We’ve used Expro multiple times for maintenance work. Always punctual and efficient.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Rachel Adams",
      role: "Homeowner — Louisville, KY",
      comment:
        "They fixed a plumbing issue that two other companies couldn’t resolve. Very impressed.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      name: "James Carter",
      role: "Warehouse Supervisor — Indianapolis, IN",
      comment:
        "Handled electrical maintenance for our facility. Organized, clean, and reliable service.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      name: "Olivia Bennett",
      role: "Homeowner — West Chester, OH",
      comment:
        "Quick turnaround and professional service. The team made sure everything was working perfectly before leaving.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      name: "David Wilson",
      role: "Property Investor — Dayton, OH",
      comment:
        "Dependable service for multiple properties. Expro has become our go-to team for repairs and maintenance.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/63.jpg",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-24 px-6 md:px-20 relative overflow-hidden">

      {/* Background gradient glows */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-red-600/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-green-500/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-gradient-to-tr from-red-500/30 to-green-400/30 blur-2xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="max-w-3xl mb-16 relative z-10">
          <p className="text-sm uppercase tracking-widest text-white font-semibold">
            Client Feedback
          </p>

          <h2 className="sm:text-4xl text-3xl md:text-5xl font-bold mt-3 leading-tight bg-clip-text text-white">
            Trusted by <span className="text-green-400"> Homeowners & Businesses</span>
          </h2>

          <div className="w-16 h-[3px] bg-red-600 mt-5 mb-6 rounded-full"></div>

          <p className="text-gray-300 sm:text-lg">
            We deliver dependable service backed by technical expertise, professionalism, and consistent results.
          </p>
        </div>

        {/* GRID */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 relative z-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative border border-gray-800 bg-gradient-to-br from-red-500/5 to-green-500/5 rounded-xl p-8 hover:shadow-[0_0_25px_rgba(255,0,0,0.2)] hover:scale-[1.02] transition-all duration-500"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-red-500 text-xl mb-6" />

              {/* Comment */}
              <p className="text-gray-300 leading-relaxed mb-6">
                “{t.comment}”
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <FaStar
                    key={j}
                    className={`text-sm ${j < t.rating ? "text-green-400" : "text-gray-700"}`}
                  />
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-800 mb-4"></div>

              {/* Client */}
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUST BAR */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {[
            { value: "100+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "4.8", label: "Average Rating" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="border border-gray-800 bg-gradient-to-br from-red-500/5 to-green-500/5 sm:p-6 p-3 rounded-xl text-center hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] transition-all">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;