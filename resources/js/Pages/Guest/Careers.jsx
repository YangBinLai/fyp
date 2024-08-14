import { Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Career({ auth }) {
    return (
        <Layout auth={auth}>
            <Head title="Careers" />
            <div className="bg-gray-100 py-12">
                <div className="relative">
                    <img
                        src="/images/CareerPic.jpg"
                        alt="Team at Happy Fish Swim School"
                        className="w-full h-96 object-cover filter blur-sm opacity-70"
                    />
                </div>
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-blue-800 mb-4">Join Our Team</h1>
                        <p className="text-xl text-gray-700">
                            At [Academy Name], we’re always looking for passionate and talented individuals to join our
                            team.
                            If you love swimming and are eager to make a difference, explore our current opportunities
                            below.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">Our Culture</h2>
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <p className="text-gray-700 mb-4">
                                Our team at [Academy Name] is made up of enthusiastic and dedicated professionals who
                                are committed to providing the best possible experience for our members. We believe in
                                fostering a positive, inclusive, and collaborative work environment where everyone can
                                thrive.
                            </p>
                            <p className="text-gray-700 mb-4">
                                We value teamwork, continuous learning, and a passion for excellence. Whether you are
                                coaching, working behind the scenes, or interacting with our members, you will be part
                                of a team that encourages innovation and personal growth.
                            </p>
                            <p className="text-gray-700">
                                Join us and contribute to a culture that celebrates success, values diversity, and
                                nurtures the talents of all our employees.
                            </p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">Current Job Openings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Swimming Coach</h3>
                                <p className="text-gray-700 mb-4">
                                    We are looking for an experienced and passionate Swimming Coach to join our team.
                                    The ideal candidate will have a strong background in coaching, a passion for
                                    swimming, and the ability to inspire and motivate swimmers of all ages.
                                </p>
                                <p className="text-gray-700 mb-2"><strong>Location:</strong> [City, State]</p>
                                <p className="text-gray-700 mb-2"><strong>Type:</strong> Full-Time</p>
                                <p className="text-gray-700 mb-6"><strong>Experience:</strong> 3+ Years</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Service Representative</h3>
                                <p className="text-gray-700 mb-4">
                                    We are seeking a friendly and efficient Customer Service Representative to join our
                                    front desk team. The ideal candidate will have excellent communication skills and a
                                    passion for helping others.
                                </p>
                                <p className="text-gray-700 mb-2"><strong>Location:</strong> [City, State]</p>
                                <p className="text-gray-700 mb-2"><strong>Type:</strong> Part-Time</p>
                                <p className="text-gray-700 mb-6"><strong>Experience:</strong> 1+ Years</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">Why Work with Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out"></div>
                                <div className="relative p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition duration-300 ease-in-out">Competitive
                                        Salary</h3>
                                    <p className="text-gray-700 group-hover:text-white transition duration-300 ease-in-out">
                                        We offer competitive salaries that reflect your skills and experience.
                                    </p>
                                </div>
                            </div>

                            <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out"></div>
                                <div className="relative p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition duration-300 ease-in-out">Professional
                                        Development</h3>
                                    <p className="text-gray-700 group-hover:text-white transition duration-300 ease-in-out">
                                        We encourage continuous learning and provide opportunities for professional
                                        growth.
                                    </p>
                                </div>
                            </div>

                            <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out"></div>
                                <div className="relative p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition duration-300 ease-in-out">Supportive
                                        Environment</h3>
                                    <p className="text-gray-700 group-hover:text-white transition duration-300 ease-in-out">
                                        Work in a supportive environment where your contributions are valued.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
