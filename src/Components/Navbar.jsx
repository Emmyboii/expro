import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../Images/NewLogo4.png";
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div className="font-sans text-gray-800 antialiased sticky top-0 z-50">

            {/* Navbar */}
            <header className="bg-white border-b border-gray-200 md:px-24 sticky top-0 z-50 shadow-sm">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between md:py-4 py-3 relative md:px-0 px-6">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 z-20">
                        <img src={logo} alt="Expro Logo" className="sm:w-[100px] w-[55px]" />
                        {/* <span className="font-bold text-xl text-gray-900 hidden sm:block">
                            Expro
                        </span> */}
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex gap-8 items-center text-[15px] font-medium relative">
                        {navItems.map((item, idx) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <div key={idx} className="relative">
                                    <Link
                                        to={item.path}
                                        className={`transition ${
                                            isActive
                                                ? "text-red-600 font-semibold"
                                                : "text-gray-700 hover:text-green-600"
                                        }`}
                                    >
                                        {item.name}
                                    </Link>

                                    {/* Active underline */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-underline"
                                                className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-600 rounded-full"
                                                initial={{ opacity: 0, scaleX: 0 }}
                                                animate={{ opacity: 1, scaleX: 1 }}
                                                exit={{ opacity: 0, scaleX: 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}

                        {/* CTA */}
                        <Link
                            to="/contact"
                            className="ml-4 bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition shadow-sm"
                        >
                            Book Service
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden z-20">
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setMenuOpen((s) => !s)}
                            className="p-2 rounded-md hover:bg-gray-100 transition"
                        >
                            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>

                    {/* Mobile menu */}
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.nav
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden overflow-hidden bg-white border-t px-6 pb-4 absolute top-full left-0 w-full shadow-md"
                            >
                                <ul className="flex flex-col gap-3 text-base pt-3">
                                    {navItems.map((item, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={item.path}
                                                onClick={() => setMenuOpen(false)}
                                                className={`block py-2 transition ${
                                                    location.pathname === item.path
                                                        ? "text-red-600 font-semibold"
                                                        : "text-gray-700 hover:text-green-600"
                                                }`}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}

                                    <li>
                                        <Link
                                            to="/contact"
                                            onClick={() => setMenuOpen(false)}
                                            className="block mt-2 bg-red-600 text-white text-center rounded-full py-2 font-semibold hover:bg-red-700 transition"
                                        >
                                            Book Service
                                        </Link>
                                    </li>
                                </ul>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </div>
            </header>
        </div>
    );
};

export default Navbar;