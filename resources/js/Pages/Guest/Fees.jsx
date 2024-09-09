import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function Fees({ auth }) {
    return (
        <Layout auth={auth}>
            <Head title="Fees" />
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-16">
                        <h1 className="text-6xl font-bold text-blue-800 mb-6">Class Fees</h1>
                        <p className="text-xl text-gray-700">
                            Affordable and flexible pricing options for every swimmer, whether you are just starting or looking to compete at the highest level.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Pricing Plans</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                <tr>
                                    <th className="py-3 px-6 text-left bg-blue-800 text-white font-bold uppercase">Class Type</th>
                                    <th className="py-3 px-6 text-center bg-blue-800 text-white font-bold uppercase">Duration</th>
                                    <th className="py-3 px-6 text-center bg-blue-800 text-white font-bold uppercase">Price per Session</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-4 px-6 text-gray-900">Baby Swimming (4-23 months)</td>
                                    <td className="py-4 px-6 text-center text-gray-700">30 minutes</td>
                                    <td className="py-4 px-6 text-center text-gray-700">RM20</td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-4 px-6 text-gray-900">Toddler Swimming (2-4 years)</td>
                                    <td className="py-4 px-6 text-center text-gray-700">30 minutes</td>
                                    <td className="py-4 px-6 text-center text-gray-700">RM22</td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-4 px-6 text-gray-900">Kid Swimming (5-12 years)</td>
                                    <td className="py-4 px-6 text-center text-gray-700">45 minutes</td>
                                    <td className="py-4 px-6 text-center text-gray-700">RM25</td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-4 px-6 text-gray-900">Adult Swimming (&gt;13 years)</td>
                                    <td className="py-4 px-6 text-center text-gray-700">60 minutes</td>
                                    <td className="py-4 px-6 text-center text-gray-700">RM30</td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-4 px-6 text-gray-900">Private Lessons</td>
                                    <td className="py-4 px-6 text-center text-gray-700">60 minutes</td>
                                    <td className="py-4 px-6 text-center text-gray-700">RM50</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <h2 className="text-4xl font-bold text-blue-800 mb-6">Ready to Dive In?</h2>
                        <p className="text-xl text-gray-700 mb-8">Choose the right class for you and start your swimming journey today. Our experienced coaches are ready to help you achieve your goals.</p>
                        <a href={route('register_class')} className="bg-blue-800 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
                            Register Class Now !
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
