import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome"/>
            <header id="main-header" className="fixed top-0 left-0 w-full bg-blue-800 py-4 z-10 text-white">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-white text-xl"><img src="/images/logo.PNG" alt='logo' style={{width: '50px', height: 'auto'}}/></div>
                    <nav className="space-x-4">
                        {auth.user ? (
                            <>
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Register
                                </Link>
                                <Link
                                    href={route('home')}
                                    className=''
                                >
                                    Home
                                </Link>
                                <Link
                                    href={route('about')}
                                    className=''
                                >
                                    About
                                </Link>
                                <Link
                                    href={route('classes')}
                                    className=''
                                >
                                    Classes
                                </Link>
                                <Link
                                    href={route('fees')}
                                    className=''
                                >
                                    Fees
                                </Link>
                                <Link
                                    href={route('venues')}
                                    className=''
                                >
                                    Venues
                                </Link>
                                <Link
                                    href={route('career')}
                                    className=''
                                >
                                    Career
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </header>
            <div
                className="relative min-h-screen flex flex-col items-center justify-center bg-white selection:bg-[#FF2D20] selection:text-white pt-16">
                <img src="/images/Pic1.jpeg"/>
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <main className="mt-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                            <div>
                                <p>Dive into Excellence</p>
                                <p>Where Champions are made</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                Welcome to [Academy Name], your premier destination for swimming education and
                                training.
                                Our academy is dedicated to fostering a love for swimming in students of all ages
                                and skill levels.
                                Founded in 2010, we have built a reputation for excellence in aquatic education
                                through our comprehensive
                                programs and experienced coaches.
                            </p>
                            <p>
                                At [Academy Name], we believe that swimming is more than just a sport—it's a life
                                skill.
                                Our mission is to provide a safe, fun, and supportive environment where swimmers can
                                develop their skills,
                                build confidence, and achieve their personal best. Whether you're looking to learn
                                the basics or compete at
                                a national level, we have the program and the expertise to help you succeed.
                            </p>
                        </div>
                        <div>
                            Schedule
                        </div>
                        <div>
                            Coaches
                        </div>
                        <div>
                            Gallery
                        </div>
                    </main>
                </div>
            </div>
            <footer className="bg-blue-800 text-white py-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="font-bold text-lg mb-4">LEARN TO SWIM PROGRAMME</h4>
                        <ul>
                            <li>Baby Swimming (4-23 months)</li>
                            <li>Kid Swimming (&gt;5 years)</li>
                            <li>Adult Swimming (&gt;13 years)</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">SCHOOL INFO</h4>
                        <ul>
                            <li>Location</li>
                            <li>FAQ</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">CONTACT US</h4>
                        <ul>
                            <li>Phone/Whatsapp: <a href="tel:0392192410" className="underline">03-92129410</a></li>
                            <li>Email: <a href="mailto:info@octopi.my" className="underline">info@octopi.my</a></li>
                            <li className="flex space-x-2 mt-4">
                                <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-8 border-t border-blue-700 pt-4">
                    <p>&copy; 2024 Octopi Swimming Academy All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}
