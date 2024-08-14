import { Link, Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Welcome({ auth }) {
    return (
        <>
            <Layout auth={auth}>
                <Head title="Welcome"/>
                <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 selection:bg-[#FF2D20] selection:text-white pt-15 pb-10">
                    <img src="/images/Pic1.jpeg" alt="Swimming" />
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl text-center">
                        <main className="mt-6">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Dive into Excellence</h1>
                            <h2 className="text-xl font-semibold text-gray-700 mb-6">Where Champions are Made</h2>

                            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Welcome to [Academy Name]</h3>
                                    <p className="text-gray-700 mb-4">
                                        Your premier destination for swimming education and training. Our academy is
                                        dedicated to fostering a love for swimming in students of all ages and skill levels.
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        Founded in 2010, we have built a reputation for excellence in aquatic education
                                        through our comprehensive programs and experienced coaches.
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        At [Academy Name], we believe that swimming is more than just a sport—it's a life
                                        skill. Our mission is to provide a safe, fun, and supportive environment where
                                        swimmers can develop their skills, build confidence, and achieve their personal
                                        best.
                                    </p>
                                    <p className="text-gray-700">
                                        Whether you're looking to learn the basics or compete at a national level, we have
                                        the program and the expertise to help you succeed.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Programs</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Beginner Classes</li>
                                        <li>Intermediate Classes</li>
                                        <li>Advanced Classes</li>
                                        <li>Private Coaching</li>
                                        <li>Competitive Swimming</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-blue-800 mb-4">Meet Our Coaches</h3>
                                <p className="text-gray-700">
                                    Our coaches are experienced professionals dedicated to helping you achieve your swimming
                                    goals. Whether you're a beginner or an elite athlete, our team is here to guide you
                                    every step of the way.
                                </p>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-blue-800 mb-4">Gallery</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <img src="/images/gallery1.jpg" alt="Gallery 1"
                                         className="w-full h-40 object-cover rounded-md shadow-lg"/>
                                    <img src="/images/gallery2.jpg" alt="Gallery 2"
                                         className="w-full h-40 object-cover rounded-md shadow-lg"/>
                                    <img src="/images/gallery3.jpg" alt="Gallery 3"
                                         className="w-full h-40 object-cover rounded-md shadow-lg"/>
                                    <img src="/images/gallery4.jpg" alt="Gallery 4"
                                         className="w-full h-40 object-cover rounded-md shadow-lg"/>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </Layout>
        </>
    );
}
