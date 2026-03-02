import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How can I schedule a service with Expro?",
    answer:
      "You can book a service by filling out our contact form or calling our support line. Once we receive your request, our team will confirm availability and schedule a convenient appointment time.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in West Chester Township, Ohio, and serve surrounding areas across Southwest Ohio. Contact us to confirm availability in your specific location.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide minor electrical repairs, plumbing services, appliance installations, and general handyman work for residential and small commercial properties.",
  },
  {
    question: "Are your technicians licensed and insured?",
    answer:
      "Yes, our technicians are trained professionals who follow safety standards and industry best practices to ensure every job is completed safely and correctly.",
  },
  {
    question: "Do you offer same-day or emergency services?",
    answer:
      "We do our best to accommodate urgent requests, including same-day service depending on availability. Please call us directly for immediate assistance.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the type of service and scope of work. We offer transparent pricing and can provide an estimate before starting any job.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major debit and credit cards, electronic payments, and cash upon completion of the service.",
  },
  {
    question: "Do you guarantee your work?",
    answer:
      "Yes, we stand behind the quality of our work. If you experience any issues after a service, contact us and we will resolve it promptly.",
  },
  {
    question: "Do I need to provide any materials?",
    answer:
      "In most cases, our technicians bring the necessary tools and materials. If specific parts are required, we will inform you ahead of time.",
  },
  {
    question: "How quickly can you arrive?",
    answer:
      "Response times vary based on location and availability, but we aim to provide fast and reliable service, often within the same day or next day.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="relative py-28 px-6 md:px-24 bg-gray-900 text-white overflow-hidden">

      {/* Gradient background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-red-600/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-green-500/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-gradient-to-tr from-red-500/30 to-green-400/30 blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <span className="text-sm uppercase tracking-widest text-red-500 font-semibold">
            Support
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight bg-clip-text text-green-500">
            <span className="text-white">Frequently</span> Asked
            <br />
            Questions
          </h2>

          <p className="mt-6 text-gray-300 max-w-md leading-relaxed">
            Find clear answers to common questions about our services, booking process, and support. If you need further assistance, our team is always available.
          </p>

          {/* Support Card */}
          <div className="mt-10 lg:block hidden p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-green-500/10 border border-red-500/20 backdrop-blur-md">
            <h4 className="font-semibold sm:text-lg text-red-400">Need Assistance?</h4>
            <p className="text-gray-300 text-sm mt-2">
              Speak directly with our support team for quick help.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+15138867276"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-green-400 hover:from-red-600 hover:to-green-500 text-center text-sm font-semibold transition"
              >
                Call Support
              </a>
              <a
                href="/contact"
                className="px-5 py-2 rounded-full border border-white/20 hover:border-red-500 text-center text-sm transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden bg-gradient-to-r from-red-500/5 to-green-500/5 backdrop-blur-md transition-all duration-300 ${isOpen ? 'border-red-500/40 shadow-[0_0_20px_rgba(255,0,0,0.2)]' : 'border-white/10'}`}
              >
                {/* Header */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gradient-to-r hover:from-red-500/10 hover:to-green-500/10 transition"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <span className="text-red-500 text-xl">{isOpen ? <FiMinus /> : <FiPlus />}</span>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="px-6 pb-5 text-gray-300 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Card */}
          <div className="lg:mt-10 block lg:hidden p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-green-500/10 border border-red-500/20 backdrop-blur-md">
            <h4 className="font-semibold sm:text-lg text-red-400">Need Assistance?</h4>
            <p className="text-gray-300 text-sm mt-2">
              Speak directly with our support team for quick help.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+15138867276"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-green-400 hover:from-red-600 hover:to-green-500 text-center text-sm font-semibold transition"
              >
                Call Support
              </a>
              <a
                href="/contact"
                className="px-5 py-2 rounded-full border border-white/20 hover:border-red-500 text-center text-sm transition"
              >
                Contact Us
              </a>
            </div>
          </div>

      </div>
    </section>
  );
}