import {Head} from "@inertiajs/react";
import React from 'react';
import Layout from "@/Layouts/Layout.jsx";

export default function About(auth){
    return(
        <>
            <Layout auth={auth}>
                <Head title="About Us" />
                <div className="bg-gray-100 py-12">
                    <div className="container mx-auto px-6 md:px-12 lg:px-24">
                        <h1 className="text-4xl font-bold text-blue-800 text-center mb-6">About Us</h1>
                        <p className="text-lg text-gray-700 text-center mb-12">
                            Welcome to [Academy Name], where passion meets professionalism in the world of swimming.
                            We are dedicated to providing the best swimming experience for our members of all ages and
                            skill levels.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
                                <p className="text-gray-700 mb-4">
                                    At [Academy Name], our mission is to cultivate a love for swimming through
                                    exceptional coaching and a supportive environment. We believe that swimming is a
                                    life skill that promotes physical health, mental well-being, and personal growth.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Our programs are designed to cater to swimmers of all ages, from babies taking their
                                    first splash to adults perfecting their technique. We focus on individual progress,
                                    safety, and above all, fun!
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h2>
                                <p className="text-gray-700 mb-4">
                                    Our vision is to be a leading swimming academy recognized for its excellence in
                                    teaching, training, and community involvement. We aspire to inspire individuals to
                                    achieve their full potential in the water, whether for recreation or competition.
                                </p>
                                <p className="text-gray-700">
                                    We are committed to maintaining a positive and encouraging environment where every
                                    swimmer feels valued and motivated to succeed. Our goal is to foster a lifelong love
                                    for swimming in our community.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Values</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Excellence: We strive for the highest standards in everything we do, from coaching
                                    to customer service.
                                </li>
                                <li>Integrity: We believe in honesty, transparency, and ethical practices in all our
                                    operations.
                                </li>
                                <li>Community: We are dedicated to creating a welcoming and inclusive environment for
                                    all members.
                                </li>
                                <li>Passion: We are passionate about swimming and committed to sharing that passion with
                                    others.
                                </li>
                                <li>Growth: We encourage personal development and continuous learning for both our
                                    swimmers and our staff.
                                </li>
                            </ul>
                        </div>

                        <div className="mb-12 pt-10">
                            <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">Our Achievements</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div
                                        className="bg-blue-800 text-white rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">500+ Medals Won</h3>
                                    <p className="text-gray-600">Our swimmers have excelled in various competitions,
                                        bringing home over 500 medals.</p>
                                </div>
                                <div className="text-center">
                                    <div
                                        className="bg-blue-800 text-white rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M9 12l2 2l4-4"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">1000+ Happy Members</h3>
                                    <p className="text-gray-600">We have successfully trained and satisfied over 1000
                                        members across all age groups.</p>
                                </div>
                                <div className="text-center">
                                    <div
                                        className="bg-blue-800 text-white rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M12 8v4l3 3"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">20+ Professional Coaches</h3>
                                    <p className="text-gray-600">Our coaching team consists of over 20 certified
                                        professionals who are passionate about swimming.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Meet Our Team</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <img src="/images/Coach1.jpg" alt="Coach 1" className="w-full h-50 object-cover rounded-full mb-4 shadow-lg"/>
                                    <h3 className="text-xl font-semibold text-gray-800">Coach John Doe</h3>
                                    <p className="text-gray-600">Head Coach</p>
                                    <p className="text-gray-600 mt-2">With over 20 years of experience, Coach John leads
                                        our team with a passion for teaching and a dedication to excellence.</p>
                                </div>
                                <div className="text-center">
                                    <img src="/images/Coach2.jpg" alt="Coach 2" className="w-full h-50 object-cover rounded-full mb-4 shadow-lg"/>
                                    <h3 className="text-xl font-semibold text-gray-800">Coach Jane Smith</h3>
                                    <p className="text-gray-600">Senior Instructor</p>
                                    <p className="text-gray-600 mt-2">Coach Jane specializes in working with young
                                        swimmers, helping them build confidence and develop strong swimming skills.</p>
                                </div>
                                <div className="text-center">
                                    <img src="/images/Coach3.jpg" alt="Coach 3" className="w-full h-50 object-cover rounded-full mb-4 shadow-lg"/>
                                    <h3 className="text-xl font-semibold text-gray-800">Coach Emily White</h3>
                                    <p className="text-gray-600">Competitive Swim Coach</p>
                                    <p className="text-gray-600 mt-2">Coach Emily has a background in competitive
                                        swimming and brings her expertise to help athletes achieve their best
                                        performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}


