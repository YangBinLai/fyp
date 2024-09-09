import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Unavailable({ auth, unavailableDates }) {
    return (
        <Layout auth={auth}>
            <Head title="Coach Unavailable Times" />

            <div className="min-h-screen flex flex-col bg-gray-100 py-12">
                <div className="max-w-7xl w-full sm:px-6 lg:px-8">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-6">Coaches' Dates and Times</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Coach Name</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Time</th>
                                </tr>
                                </thead>
                                <tbody>
                                {unavailableDates.map((availability, index) => (
                                    <tr key={availability.id || index}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{availability.coach.name}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{availability.date}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{availability.time}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
