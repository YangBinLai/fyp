import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function KidClasses({ auth }) {
    return (
        <Layout auth={auth}>
            <Head title="Kid Swimming Classes" />

            <div className="relative text-white text-center pt-20">
                <img
                    src="/images/kid_class.jpg"
                    alt="Kid Class"
                    className="w-full h-96 object-cover filter blur-sm opacity-70"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold">Kid Swimming Classes</h1>
                    <p className="text-xl mt-4">Build confidence and skills in the water with our fun and engaging classes for kids.</p>
                    <a
                        href={route('register_class')}
                        className="mt-6 inline-block bg-white text-blue-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200"
                    >
                        Register Class
                    </a>
                </div>
            </div>

            <div className="py-12 bg-gray-100 text-center">
                <h2 className="text-4xl font-bold text-blue-800 mb-6">Why Enroll in Our Kid Swimming Classes?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <img src="/images/skill_icon.png" alt="Skill Development Icon" className="mx-auto mb-4 w-40 h-40"/>
                        <h3 className="text-xl font-semibold">Skill Development</h3>
                        <p className="text-gray-700 mt-2">Help your child develop essential swimming skills that last a lifetime.</p>
                    </div>
                    <div>
                        <img src="/images/health_icon.png" alt="Fitness Icon" className="mx-auto mb-4 w-40 h-40"/>
                        <h3 className="text-xl font-semibold">Fitness and Health</h3>
                        <p className="text-gray-700 mt-2">Encourage physical fitness and healthy habits through regular swimming.</p>
                    </div>
                    <div>
                        <img src="/images/fun_icon.png" alt="Fun Icon" className="mx-auto mb-4 w-40 h-40"/>
                        <h3 className="text-xl font-semibold">Fun and Socialization</h3>
                        <p className="text-gray-700 mt-2">Our classes are designed to be fun and help kids make new friends.</p>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Class Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">What to Expect</h3>
                            <p className="text-gray-700 mt-4">Our Kid Swimming Classes are structured to provide a fun and engaging experience for children aged 5-12 years. Each session lasts 45 minutes and includes:</p>
                            <ul className="list-disc list-inside mt-4 text-gray-700">
                                <li>Warm-up exercises to prepare the body for swimming.</li>
                                <li>Learning and practicing different swimming strokes.</li>
                                <li>Water safety education to ensure a safe swimming experience.</li>
                                <li>Fun games and activities that promote confidence in the water.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Our Instructors</h3>
                            <p className="text-gray-700 mt-4">Our team of certified instructors is passionate about teaching children to swim. They are trained to create a supportive and motivating environment that encourages kids to do their best.</p>
                            <ul className="list-disc list-inside mt-4 text-gray-700">
                                <li>Certified by national swimming bodies.</li>
                                <li>Experience in teaching children of all skill levels.</li>
                                <li>Trained in child psychology and motivational techniques.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-blue-800 mb-8">What Parents Are Saying</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-700 italic">"My daughter has gained so much confidence in the water thanks to the amazing instructors. She loves her swimming classes!"</p>
                            <p className="text-gray-900 mt-4 font-semibold">- Emma, mother of an 8-year-old</p>
                        </div>
                        <div>
                            <p className="text-gray-700 italic">"The classes are fun and engaging. My son looks forward to them every week and has made great progress in his swimming skills."</p>
                            <p className="text-gray-900 mt-4 font-semibold">- Mark, father of a 10-year-old</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">What should my child bring to class?</h3>
                            <p className="text-gray-700">Please ensure your child brings swimwear, a towel, swim goggles, and a water bottle. We provide all other necessary equipment.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">How many kids are in each class?</h3>
                            <p className="text-gray-700">We maintain a low instructor-to-student ratio to ensure each child receives personalized attention. Typically, there are 5-7 kids per instructor.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 text-black py-12 text-center">
                <h2 className="text-4xl font-bold text-blue-800">Ready to Get Started?</h2>
                <p className="text-lg mt-4">Enroll your child in our Kid Swimming Classes today and watch them thrive in the water!</p>
                <a
                    href={route('register_class')}
                    className="mt-6 inline-block bg-white text-blue-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200"
                >
                    Register Class
                </a>
                <p className="text-md mt-4">Or call us at <a href="tel:+1234567890" className="underline">+1234567890</a> for more information.</p>
            </div>
        </Layout>
    );
}
