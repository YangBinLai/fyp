import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children, auth = {} }) {
    const [isClassesDropdownOpen, setClassesDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const classesDropdownTimeout = useRef(null);
    const userDropdownTimeout = useRef(null);
    const user = auth.user || null;

    const handleClassesMouseEnter = () => {
        if (classesDropdownTimeout.current) {
            clearTimeout(classesDropdownTimeout.current);
        }
        setClassesDropdownOpen(true);
    };

    const handleClassesMouseLeave = () => {
        classesDropdownTimeout.current = setTimeout(() => {
            setClassesDropdownOpen(false);
        }, 100);
    };

    const handleUserMouseEnter = () => {
        if (userDropdownTimeout.current) {
            clearTimeout(userDropdownTimeout.current);
        }
        setUserDropdownOpen(true);
    };

    const handleUserMouseLeave = () => {
        userDropdownTimeout.current = setTimeout(() => {
            setUserDropdownOpen(false);
        }, 100);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        return () => {
            if (classesDropdownTimeout.current) {
                clearTimeout(classesDropdownTimeout.current);
            }
            if (userDropdownTimeout.current) {
                clearTimeout(userDropdownTimeout.current);
            }
        };
    }, []);

    return (
        <>
            <header id="main-header" className="fixed top-0 left-0 w-full bg-blue-800 py-4 z-10 text-white">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-white text-xl">
                        <img src="/images/logo.PNG" alt='logo' style={{ width: '50px', height: 'auto' }} />
                    </div>
                    <button className="md:hidden text-white" onClick={toggleMobileMenu}>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </button>
                    {/* Hamburger Dropdown Menu */}
                    {isMobileMenuOpen && (
                        <nav className="absolute top-16 left-0 w-full bg-white text-black py-4 z-20 shadow-lg">
                            <Link
                                href={route('home')}
                                className="block px-4 py-2 text-black transition hover:bg-gray-100 hover:text-black"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                            <Link
                                href={route('about')}
                                className="block px-4 py-2 text-black transition hover:bg-gray-100 hover:text-black"
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                            <div className="relative">
                                <button
                                    className="block w-full text-left px-4 py-2 text-black transition hover:bg-gray-100"
                                    onClick={() => setClassesDropdownOpen(!isClassesDropdownOpen)}
                                >
                                    Classes <FontAwesomeIcon icon={faCaretDown} className="pl-1" />
                                </button>
                                {isClassesDropdownOpen && (
                                    <div className="ml-4 bg-white">
                                        <Link href={route('baby_class')} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                                            Baby Swimming (4-23 months)
                                        </Link>
                                        <Link href={route('kid_class')} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                                            Kid Swimming (5-12 years)
                                        </Link>
                                        <Link href={route('adult_class')} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                                            Adult Swimming
                                        </Link>
                                        <Link href={route('private_class')} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                                            Private Class
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link
                                href={route('fees')}
                                className="block px-4 py-2 text-black transition hover:bg-gray-100 hover:text-black"
                                onClick={closeMobileMenu}
                            >
                                Fees
                            </Link>
                            <Link
                                href={route('venues')}
                                className="block px-4 py-2 text-black transition hover:bg-gray-100 hover:text-black"
                                onClick={closeMobileMenu}
                            >
                                Venues
                            </Link>
                            <Link
                                href={route('career')}
                                className="block px-4 py-2 text-black transition hover:bg-gray-100 hover:text-black"
                                onClick={closeMobileMenu}
                            >
                                Career
                            </Link>
                            {user && (
                                <Link
                                    href={route('user_dashboard')}
                                    className="block px-4 py-2 text-black transition hover:bg-gray-100 hover:text-black"
                                    onClick={closeMobileMenu}
                                >
                                    Dashboard
                                </Link>
                            )}
                            {user && (
                                <Link
                                    href={route('coach_availability')}
                                    className="block px-4 py-2 text-black transition hover:bg-gray-100 hover:text-black"
                                    onClick={closeMobileMenu}
                                >
                                    Coach
                                </Link>
                            )}
                            {user && (
                                <div className="relative">
                                    <button
                                        className="block w-full text-left px-4 py-2 text-black transition hover:bg-gray-100"
                                        onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
                                    >
                                        {auth.user.name} <FontAwesomeIcon icon={faCaretDown} className="pl-1" />
                                    </button>
                                    {isUserDropdownOpen && (
                                        <div className="ml-4 bg-white">
                                            <Link
                                                href={route('profile.edit')}
                                                className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                                                onClick={closeMobileMenu}
                                            >
                                                Profile
                                            </Link>
                                            <Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                                className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-md"
                                                onClick={closeMobileMenu}
                                            >
                                                Log Out
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                            {!user && (
                                <Link
                                    href={route('register')}
                                    className="block px-4 py-2 text-black transition hover:bg-gray-100 hover:text-black"
                                    onClick={closeMobileMenu}
                                >
                                    Register
                                </Link>
                            )}
                            {!user && (
                                <Link
                                    href={route('login')}
                                    className="block px-4 py-2 text-black transition hover:bg-gray-100 hover:text-black"
                                    onClick={closeMobileMenu}
                                >
                                    Log in
                                </Link>
                            )}
                        </nav>
                    )}

                    {/* Normal Menu for desktop view */}
                    <nav className="hidden md:flex items-center space-x-4">
                        <Link href={route('home')} className="rounded-md px-3 py-2 text-white transition hover:text-white/70">
                            Home
                        </Link>
                        <Link href={route('about')} className="rounded-md px-3 py-2 text-white transition hover:text-white/70">
                            About
                        </Link>
                        <div className="relative" onMouseEnter={handleClassesMouseEnter} onMouseLeave={handleClassesMouseLeave}>
                            <button className="rounded-md px-3 py-2 text-white transition hover:text-white/70">
                                Classes <FontAwesomeIcon icon={faCaretDown} className="pl-1" />
                            </button>
                            {isClassesDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
                                    <Link href={route('baby_class')} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                                        Baby Swimming (4-23 months)
                                    </Link>
                                    <Link href={route('kid_class')} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                                        Kid Swimming (5-12 years)
                                    </Link>
                                    <Link href={route('adult_class')} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                                        Adult Swimming
                                    </Link>
                                    <Link href={route('private_class')} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                                        Private Class
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link href={route('fees')} className="rounded-md px-3 py-2 text-white transition hover:text-white/70">
                            Fees
                        </Link>
                        <Link href={route('venues')} className="rounded-md px-3 py-2 text-white transition hover:text-white/70">
                            Venues
                        </Link>
                        <Link href={route('career')} className="rounded-md px-3 py-2 text-white transition hover:text-white/70">
                            Career
                        </Link>
                        {user && (
                            <Link href={route('user_dashboard')} className="rounded-md px-3 py-2 text-white transition hover:text-white/70">
                                Dashboard
                            </Link>
                        )}
                        {user && (
                            <Link href={route('coach_availability')} className="rounded-md px-3 py-2 text-white transition hover:text-white/70">
                                Coach
                            </Link>
                        )}
                        {user && (
                            <div className="relative" onMouseEnter={handleUserMouseEnter} onMouseLeave={handleUserMouseLeave}>
                                <button className="rounded-md px-3 py-2 text-white transition hover:text-white/70">
                                    {auth.user.name} <FontAwesomeIcon icon={faCaretDown} className="pl-1" />
                                </button>
                                {isUserDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
                                        <Link href={route('profile.edit')} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                                            Profile
                                        </Link>
                                        <Link href={route('logout')} method="post" as="button" className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-md">
                                            Log Out
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                        {!user && (
                            <Link href={route('register')} className="rounded-md px-3 py-2 text-white transition hover:text-white/70">
                                Register
                            </Link>
                        )}
                        {!user && (
                            <Link href={route('login')} className="rounded-md px-3 py-2 text-white transition hover:text-white/70">
                                Log in
                            </Link>
                        )}
                    </nav>
                </div>
            </header>

            <main className="pt-20">
                {children}
            </main>

            <footer className="bg-blue-800 text-white py-8">
                <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 px-4">
                    <div>
                        <h4 className="font-bold text-xl mb-4">LEARN TO SWIM PROGRAMME</h4>
                        <ul>
                            <li><Link href={route('baby_class')} className="block mb-2 hover:text-gray-300">Baby
                                Swimming (4-23 months)</Link></li>
                            <li><Link href={route('kid_class')} className="block mb-2 hover:text-gray-300">Kid Swimming
                                (5-12 years)</Link></li>
                            <li><Link href={route('adult_class')} className="block mb-2 hover:text-gray-300">Adult
                                Swimming</Link></li>
                            <li><Link href={route('private_class')} className="block mb-2 hover:text-gray-300">Private
                                Class</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-xl mb-4">SCHOOL INFO</h4>
                        <ul>
                            <li><Link href={route('venues')} className="block mb-2 hover:text-gray-300">Location</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-xl mb-4">CONTACT US</h4>
                        <ul>
                            <li>Phone/Whatsapp: <a href="tel:+1234567890"
                                                   className="underline hover:text-gray-300">+1234567890</a></li>
                            <li>Email: <a href="mailto:info@octopi.my"
                                          className="underline hover:text-gray-300">info@octopi.my</a></li>
                            <li className="flex space-x-2 mt-4">
                                <a href="#" className="text-white hover:text-gray-300"><i
                                    className="fab fa-youtube"></i></a>
                                <a href="#" className="text-white hover:text-gray-300"><i
                                    className="fab fa-facebook"></i></a>
                                <a href="#" className="text-white hover:text-gray-300"><i
                                    className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-8 border-t border-blue-700 pt-4">
                    <p>&copy; 2024 Octopi Swimming Academy.</p>
                </div>
            </footer>

        </>
    );
}
