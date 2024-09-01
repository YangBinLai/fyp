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
                        <a href="https://www.google.com/maps/place/Happy+Fish+Swim+School+@+Cheras+Perdana/@3.0495121,101.7693271,17z/data=!3m1!4b1!4m6!3m5!1s0x31cc3596943af187:0x13c81aa74284137!8m2!3d3.0495121!4d101.7719074!16s%2Fg%2F11l2fd7xjw?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                           className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                           target="_blank" rel="noopener noreferrer">
                            <img src="/images/venue1.jpg" alt="Venue 1" className="w-full h-56 object-cover"/>
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Cheras</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-2"><strong>Address:</strong> L1-02, The Netizen Cheras Homestay, Lebuh Utama Tun Hussein Onn, Cheras Perdana, 43200 Cheras, Selangor
                                </p>
                                <p className="text-gray-700 mb-2"><strong>Facilities:</strong> Olympic-sized pool,
                                    heated indoor pool, training rooms</p>
                                <p className="text-gray-700 mb-4"><strong>Contact:</strong> (012) 456-7890</p>
                            </div>
                        </a>

                        <a href="https://www.google.com/maps/place/National+Aquatic+Centre/@3.0551757,101.6904964,17z/data=!3m1!4b1!4m6!3m5!1s0x31cc4a97a6336cb3:0xe34496b4545a2fc1!8m2!3d3.0551757!4d101.6930767!16s%2Fg%2F120hhv5j?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                           className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                           target="_blank" rel="noopener noreferrer">
                            <img src="/images/venue2.jpeg" alt="Venue 2" className="w-full h-56 object-cover"/>
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Bukit Jalil</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-2"><strong>Address:</strong> Level 3, National Aquatic Centre, Bukit Jalil, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur
                                </p>
                                <p className="text-gray-700 mb-2"><strong>Facilities:</strong> Children’s pool, diving
                                    boards, locker rooms</p>
                                <p className="text-gray-700 mb-4"><strong>Contact:</strong> (012) 654-3210</p>
                            </div>
                        </a>

                        <a href="https://www.google.com/maps/place/Happy+Fish+@+Sunway+Pyramid/@3.0702266,101.6050236,17z/data=!3m1!4b1!4m6!3m5!1s0x31cc4d1305dc1d45:0x57b45cc6fd4938db!8m2!3d3.0702266!4d101.6076039!16s%2Fg%2F11gw2qpkjk?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                           className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                           target="_blank" rel="noopener noreferrer">
                            <img src="/images/venue3.jpg" alt="Venue 3" className="w-full h-56 object-cover"/>
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Sunway Pyramid</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-2"><strong>Address:</strong> LG3-06, Sunway Pyramid, 3, Jalan PJS 11/15, Bandar Sunway, 47500 Petaling Jaya, Selangor
                                </p>
                                <p className="text-gray-700 mb-2"><strong>Facilities:</strong> Outdoor pool, café,
                                    sunbathing area</p>
                                <p className="text-gray-700 mb-4"><strong>Contact:</strong> (012) 123-4567</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
