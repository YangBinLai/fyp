import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function AdultClasses({ auth }) {
    return (
        <Layout auth={auth}>
            <Head title="Adult Swimming Classes" />

            {/* Hero Section */}
            <div className="relative text-white text-center pt-20">
                {/* Background Image */}
                <img
                    src="/images/adult_class.jpeg"
                    alt="Adult Class"
                    className="w-full h-96 object-cover filter blur-sm opacity-70"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold">Adult Swimming Classes</h1>
                    <p className="text-xl mt-4">Achieve your swimming goals with our personalized and supportive classes for adults.</p>
                    <a
                        href={route('register')}
                        className="mt-6 inline-block bg-white text-blue-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200"
                    >
                        Register Now
                    </a>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-12 bg-gray-100 text-center">
                <h2 className="text-4xl font-bold text-blue-800 mb-6">Why Join Our Adult Swimming Classes?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <img src="/images/fit_icon.png" alt="Fitness Icon" className="mx-auto mb-4 w-40 h-40"/>
                        <h3 className="text-xl font-semibold">Stay Fit</h3>
                        <p className="text-gray-700 mt-2">Swimming is a full-body workout that helps you stay in shape while being easy on the joints.</p>
                    </div>
                    <div>
                        <img src="/images/relief_icon.png" alt="Stress Relief Icon" className="mx-auto mb-4 w-40 h-40"/>
                        <h3 className="text-xl font-semibold">Stress Relief</h3>
                        <p className="text-gray-700 mt-2">Escape the stress of everyday life and relax in the calming waters of our pool.</p>
                    </div>
                    <div>
                        <img src="/images/skill_icon.png" alt="Skill Improvement Icon" className="mx-auto mb-4 w-40 h-40"/>
                        <h3 className="text-xl font-semibold">Improve Skills</h3>
                        <p className="text-gray-700 mt-2">Whether you're a beginner or looking to refine your strokes, our classes are tailored to your needs.</p>
                    </div>
                </div>
            </div>

            {/* Class Details Section */}
            <div className="py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Class Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">What to Expect</h3>
                            <p className="text-gray-700 mt-4">Our Adult Swimming Classes are designed for individuals aged 13 years and older. Each session lasts 60 minutes and includes:</p>
                            <ul className="list-disc list-inside mt-4 text-gray-700">
                                <li>Personalized instruction based on your skill level and goals.</li>
                                <li>Focus on technique improvement, endurance, and speed.</li>
                                <li>Water safety education for increased confidence in the water.</li>
                                <li>Relaxation and stress-relief exercises at the end of each session.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Our Instructors</h3>
                            <p className="text-gray-700 mt-4">Our instructors are highly experienced in teaching adults. They are patient, encouraging, and skilled at helping you overcome any challenges you may face in the water.</p>
                            <ul className="list-disc list-inside mt-4 text-gray-700">
                                <li>Certified by national swimming associations.</li>
                                <li>Experienced in working with adults of all skill levels, from beginners to advanced swimmers.</li>
                                <li>Specialized in creating a positive and motivating learning environment.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-blue-800 mb-8">What Our Students Are Saying</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-700 italic">"I started as a complete beginner, and now I can swim confidently thanks to the patient guidance of the instructors."</p>
                            <p className="text-gray-900 mt-4 font-semibold">- John, age 34</p>
                        </div>
                        <div>
                            <p className="text-gray-700 italic">"Swimming has become my favorite way to stay fit and de-stress. The classes are fun and challenging!"</p>
                            <p className="text-gray-900 mt-4 font-semibold">- Maria, age 42</p>
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
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Do I need any prior swimming experience?</h3>
                            <p className="text-gray-700">No prior experience is necessary. Our classes are tailored to suit all levels, from beginners to advanced swimmers.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">What should I bring to class?</h3>
                            <p className="text-gray-700">Please bring swimwear, a towel, swim goggles, and a water bottle. We provide all other necessary equipment.</p>
                        </div>
                        {/* Add more FAQs as needed */}
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gray-100 text-black py-12 text-center">
                <h2 className="text-4xl font-bold">Start Your Journey Today!</h2>
                <p className="text-lg mt-4">Sign up for our Adult Swimming Classes and take the first step towards achieving your swimming goals!</p>
                <a
                    href={route('register')}
                    className="mt-6 inline-block bg-white text-blue-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200"
                >
                    Register Now
                </a>
                <p className="text-md mt-4">Or call us at <a href="tel:+1234567890" className="underline">+1234567890</a> for more information.</p>
            </div>
        </Layout>
    );
}
