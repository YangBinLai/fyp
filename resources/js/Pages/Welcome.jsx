import { Link, Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Welcome({ auth }) {
    return (
        <>
            <Layout auth={auth}>
                <Head title="Welcome"/>
                <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 selection:bg-[#FF2D20] selection:text-white pt-15 pb-10">
                    <img src="/images/Pic1.jpeg" alt="Swimming" className="w-full -mt-20"/>
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl text-center">
                        <main className="mt-6">
                            <h1 className="text-6xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Georgia, serif'}}>Dive into Excellence</h1>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-6" style={{fontFamily: 'Georgia, serif'}}>Where Champions are Made</h2>

                            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Welcome to Octopi</h3>
                                    <p className="text-gray-700 mb-4">
                                        Your premier destination for swimming education and training. Our academy is
                                        dedicated to fostering a love for swimming in students of all ages and skill levels.
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        Founded in 2010, we have built a reputation for excellence in aquatic education
                                        through our comprehensive programs and experienced coaches.
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        At Octopi, we believe that swimming is more than just a sport—it's a life
                                        skill. Our mission is to provide a safe, fun, and supportive environment where
                                        swimmers can develop their skills, build confidence, and achieve their personal
                                        best.
                                    </p>
                                    <p className="text-gray-700">
                                        Whether you're looking to learn the basics or compete at a national level, we have
                                        the program and the expertise to help you succeed.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Programs</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Baby Classes</li>
                                        <li>Kid Classes</li>
                                        <li>Adult Classes</li>
                                        <li>Private Lessons</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-blue-800 mb-4">Gallery</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <img src="/images/gallery1.jpg" alt="Gallery 1" className="w-full h-80 object-cover rounded-md shadow-lg"/>
                                    <img src="/images/gallery2.jpg" alt="Gallery 2" className="w-full h-80 object-cover rounded-md shadow-lg"/>
                                    <img src="/images/gallery3.jpg" alt="Gallery 3" className="w-full h-80 object-cover rounded-md shadow-lg"/>
                                    <img src="/images/gallery4.jpg" alt="Gallery 4" className="w-full h-80 object-cover rounded-md shadow-lg"/>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </Layout>
        </>
    );
}
