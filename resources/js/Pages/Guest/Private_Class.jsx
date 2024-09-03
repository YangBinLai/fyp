import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function PrivateClasses({ auth }) {
    return (
        <Layout auth={auth}>
            <Head title="Private Swimming Classes" />

            <div className="relative text-black text-center">
                <img
                    src="/images/private_class.jpg"
                    alt="Private Class"
                    className="w-full h-96 object-cover filter blur-sm opacity-70"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold">Private Swimming Classes</h1>
                    <p className="text-xl mt-4">Achieve your swimming goals with personalized, one-on-one instruction tailored just for you.</p>
                    <a
                        href={auth.user ? route('register_class') : route('login')}
                        className="mt-6 inline-block bg-white text-blue-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200"
                    >
                        Book Your Private Class
                    </a>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-12 bg-gray-100 text-center">
                <h2 className="text-4xl font-bold text-blue-800 mb-6">Why Choose Private Swimming Classes?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <img src="/images/customize_icon.png" alt="Customized Training Icon" className="mx-auto mb-4  w-40 h-40"/>
                        <h3 className="text-xl font-semibold">Customized Training</h3>
                        <p className="text-gray-700 mt-2">Get personalized instruction that focuses on your specific goals and skill level.</p>
                    </div>
                    <div>
                        <img src="/images/schedule_icon.png" alt="Flexible Scheduling Icon" className="mx-auto mb-4 w-40 h-40"/>
                        <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
                        <p className="text-gray-700 mt-2">Enjoy the convenience of scheduling your lessons at a time that works best for you.</p>
                    </div>
                    <div>
                        <img src="/images/confidence_icon.png" alt="Confidence Icon" className="mx-auto mb-4 w-40 h-40"/>
                        <h3 className="text-xl font-semibold">Build Confidence</h3>
                        <p className="text-gray-700 mt-2">Work closely with our instructors to build confidence and improve your swimming skills.</p>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Class Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">What to Expect</h3>
                            <p className="text-gray-700 mt-4">Our Private Swimming Classes are designed to offer the ultimate in personalized instruction. Each session lasts 60 minutes and can be tailored to meet your specific needs and goals. Whether you are looking to improve your technique, build endurance, or overcome a fear of water, our instructors are here to help.</p>
                            <ul className="list-disc list-inside mt-4 text-gray-700">
                                <li>One-on-one instruction with a certified swim coach.</li>
                                <li>Customized training plans based on your goals and abilities.</li>
                                <li>Flexible scheduling options to fit your busy lifestyle.</li>
                                <li>Progress tracking and personalized feedback after each session.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Our Instructors</h3>
                            <p className="text-gray-700 mt-4">Our instructors are experienced in providing private lessons and are dedicated to helping you achieve your swimming goals. They are patient, supportive, and skilled in creating a personalized learning experience.</p>
                            <ul className="list-disc list-inside mt-4 text-gray-700">
                                <li>Certified by national swimming bodies.</li>
                                <li>Extensive experience in providing personalized swimming instruction.</li>
                                <li>Specialized in working with individuals of all skill levels.</li>
                                <li>Trained in creating a positive and motivating learning environment.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-blue-800 mb-8">What Our Clients Are Saying</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-700 italic">"The private lessons have been amazing. My coach tailored the sessions to my goals and I’ve made incredible progress in just a few weeks."</p>
                            <p className="text-gray-900 mt-4 font-semibold">- Jessica, age 28</p>
                        </div>
                        <div>
                            <p className="text-gray-700 italic">"I was nervous about learning to swim as an adult, but the private classes have been exactly what I needed to build my confidence in the water."</p>
                            <p className="text-gray-900 mt-4 font-semibold">- Mike, age 45</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQs Section */}
            <div className="py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">How are private lessons different from group classes?</h3>
                            <p className="text-gray-700">Private lessons offer one-on-one instruction, allowing the coach to focus entirely on your goals and progress. This leads to faster improvement and a more personalized experience.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Can I schedule lessons at my convenience?</h3>
                            <p className="text-gray-700">Yes, we offer flexible scheduling options to fit your busy lifestyle. Simply contact us to arrange a time that works best for you.</p>
                        </div>
                        {/* Add more FAQs as needed */}
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 text-black py-12 text-center">
                <h2 className="text-4xl font-bold">Ready to Start Your Private Lessons?</h2>
                <p className="text-lg mt-4">Book your private swimming classes today and get the personalized instruction you need to achieve your swimming goals!</p>
                <a
                    href={auth.user ? route('register_class') : route('login')}
                    className="mt-6 inline-block bg-white text-blue-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200"
                >
                    Book Your Private Class
                </a>
                <p className="text-md mt-4">Or call us at <a href="tel:+1234567890" className="underline">+1234567890</a> for more information.</p>
            </div>
        </Layout>
    );
}
