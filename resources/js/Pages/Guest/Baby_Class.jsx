import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function BabyClass({ auth }) {
    return (
        <Layout auth={auth}>
            <Head title="Baby Swimming Classes" />

            {/* Hero Section */}
            <div className="relative text-black py-2 text-center">
                <img
                    src="/images/baby_class.jpg"
                    alt="Baby Class"
                    className="w-full h-96 object-cover filter blur-sm opacity-70"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold">Baby Swimming Classes</h1>
                    <p className="text-xl mt-4">Nurture your baby's love for water with our safe, fun, and engaging
                        swimming lessons.</p>
                    <a
                        href={auth.user ? route('register_class') : route('login')}
                        className="mt-6 inline-block bg-white text-blue-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200"
                    >
                        Register Class
                    </a>
                </div>
            </div>


            {/* Benefits Section */}
            <div className="py-12 bg-gray-100 text-center">
                <h2 className="text-4xl font-bold text-blue-800 mb-6">Why Choose Our Baby Swimming Classes?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <img src="/images/safety_icon.png" alt="Safety Icon" className="mx-auto mb-4 w-40 h-40"/>
                        <h3 className="text-xl font-semibold">Safety</h3>
                        <p className="text-gray-700 mt-2">Introduce your baby to water in a safe and nurturing
                            environment.</p>
                    </div>
                    <div>
                        <img src="/images/bonding_icon.png" alt="Bonding Icon" className="mx-auto mb-4 w-40 h-40"/>
                        <h3 className="text-xl font-semibold">Bonding</h3>
                        <p className="text-gray-700 mt-2">Enhance your connection with your baby through fun water activities.</p>
                    </div>
                    <div>
                        <img src="/images/development_icon.png" alt="Development Icon" className="mx-auto mb-4 w-40 h-40"/>
                        <h3 className="text-xl font-semibold">Development</h3>
                        <p className="text-gray-700 mt-2">Support your baby's physical and cognitive development through sensory play.</p>
                    </div>
                </div>
            </div>


            {/* Program Details Section */}
            <div className="py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Class Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">What to Expect</h3>
                            <p className="text-gray-700 mt-4">Each session is 30 minutes long and is filled with fun and engaging water activities designed to help your baby become comfortable in the water. We focus on:</p>
                            <ul className="list-disc list-inside mt-4 text-gray-700">
                                <li>Gentle water introduction</li>
                                <li>Floating techniques</li>
                                <li>Parental involvement</li>
                                <li>Water safety education</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Our Instructors</h3>
                            <p className="text-gray-700 mt-4">Our instructors are certified and have extensive experience working with infants and toddlers. They are trained to create a safe, supportive, and enjoyable environment for your baby.</p>
                            <ul className="list-disc list-inside mt-4 text-gray-700">
                                <li>Certified by Malaysia Swimming</li>
                                <li>Trained in infant CPR and First Aid</li>
                                <li>Experienced in early childhood development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-blue-800 mb-8">What Parents Are Saying</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-700 italic">"The baby swimming classes have been amazing for my son. He loves the water now, and the instructors are fantastic!"</p>
                            <p className="text-gray-900 mt-4 font-semibold">- Sarah, mother of a 9-month-old</p>
                        </div>
                        <div>
                            <p className="text-gray-700 italic">"A wonderful bonding experience for me and my daughter. I feel more confident about water safety too!"</p>
                            <p className="text-gray-900 mt-4 font-semibold">- James, father of a 1-year-old</p>
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
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Is the water safe for babies?</h3>
                            <p className="text-gray-700">Yes, our pools are maintained at optimal temperatures and are regularly cleaned and sanitized to ensure a safe environment for your baby.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">What should I bring to class?</h3>
                            <p className="text-gray-700">You should bring swim diapers, a towel, and any special baby toiletries. We provide flotation devices and toys.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gray-100 text-white py-12 text-center">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Ready to Get Started?</h2>
                <p className="text-lg font-semibold text-gray-900 mt-4">Sign up for our Baby Swimming Classes today and give your little one a head start in water safety and fun!</p>
                <a
                    href={auth.user ? route('register_class') : route('login')}
                   className="mt-6 inline-block bg-white text-blue-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200"
                >
                    Register Class
                </a>
                <p className="text-md font-semibold text-gray-900 mt-4">Or call us at <a href="tel:+1234567890" className="underline">+1234567890</a> for more information.</p>
            </div>
        </Layout>
    );
}
