import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function Venues({ auth }) {
    return (
        <Layout auth={auth}>
            <Head title="Venues" />
            <div className="bg-gray-100 py-12 pt-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-16">
                        <h1 className="text-6xl font-bold text-blue-800 mb-6">Our Venues</h1>
                        <p className="text-xl text-gray-700">
                            Discover our top-notch swimming venues, each equipped with the latest facilities to ensure a premium swimming experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <img src="/images/venue1.jpg" alt="Venue 1" className="w-full h-56 object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Cheras</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-2"><strong>Address:</strong> 123 Main Street, City, State</p>
                                <p className="text-gray-700 mb-2"><strong>Facilities:</strong> Olympic-sized pool, heated indoor pool, training rooms</p>
                                <p className="text-gray-700 mb-4"><strong>Contact:</strong> (123) 456-7890</p>
                                <a href="#" className="text-blue-800 hover:underline">View on Map</a>
                            </div>
                        </div>

                        <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <img src="/images/venue2.jpg" alt="Venue 2" className="w-full h-56 object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Bukit Jalil</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-2"><strong>Address:</strong> 456 Park Avenue, City, State</p>
                                <p className="text-gray-700 mb-2"><strong>Facilities:</strong> Children’s pool, diving boards, locker rooms</p>
                                <p className="text-gray-700 mb-4"><strong>Contact:</strong> (987) 654-3210</p>
                                <a href="#" className="text-blue-800 hover:underline">View on Map</a>
                            </div>
                        </div>

                        <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <img src="/images/venue3.jpg" alt="Venue 3" className="w-full h-56 object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Sunway Pyramid</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-2"><strong>Address:</strong> 789 Lake Road, City, State</p>
                                <p className="text-gray-700 mb-2"><strong>Facilities:</strong> Outdoor pool, café, sunbathing area</p>
                                <p className="text-gray-700 mb-4"><strong>Contact:</strong> (555) 123-4567</p>
                                <a href="#" className="text-blue-800 hover:underline">View on Map</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}
