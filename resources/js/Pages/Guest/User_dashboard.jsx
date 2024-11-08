import React from 'react';
import {Head, Link, useForm, usePage} from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function UserDashboard({ auth }) {
    const { registrations = [] } = usePage().props;
    const { post, delete: destroy } = useForm({
        registration_id: '',
    });

    const handleCheckout = (event, registrationId) => {
        event.preventDefault(); //To prevent refresh
        post(route('process_payment', registrationId), {
            onSuccess: (value) => {
                window.location.href = value.props.url.url; //Bypass CORS (handle in fe rather than be)
            },
            onError: () => {
                alert('Failed payment');
            },
        });

    };

    const handleDelete = (event, registrationId) => {
        event.preventDefault();
        if (confirm("Are you sure you want to delete this class?")) {
            destroy(route('registrations.destroy', registrationId), {
                onSuccess: () => {
                    alert('Class deleted successfully');
                },
                onError: () => {
                    alert('Failed to delete class');
                }
            });
        }
    };

    return (
        <Layout auth={auth}>
            <Head title="User Dashboard" />

            <div className="min-h-screen py-12 bg-gray-100">
                <div className="max-w-7xl w-full sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-6">{auth.user.name}'s Classes</h2>
                        {registrations.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Class Name</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Time</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Coach</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Edit</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Payment</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Cancellation</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {registrations.map((registration) => (
                                        <tr key={registration.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{registration.class}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{registration.date}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{registration.time}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{registration.coach.name}</td>
                                            <td className={`px-6 py-4 whitespace-no-wrap border-b border-gray-300 ${registration.status === 'accepted' ? 'text-green-500' : registration.status === 'rejected' ? 'text-red-500' : ''}`}>
                                                {registration.status}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                                {['accepted', 'rejected'].includes(registration.status) ? (
                                                    <span className="text-gray-500 italic">Cannot Edit</span>
                                                ) : (
                                                    <Link
                                                        href={route('registrations.edit', registration.id)}
                                                        className={`px-4 py-2 rounded ${registration.status === 'pending' ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white'} hover:bg-opacity-75`}
                                                    >
                                                        Edit
                                                    </Link>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-center">
                                                {registration.payment_status === 'paid' ? (
                                                    <span className="text-green-500 font-bold text-lg">Paid</span>
                                                ) :  registration.status === 'pending' ? (
                                                    <span className="text-black font-bold text-lg"> - </span>
                                                ) : registration.status === 'rejected' ? (
                                                    <span className="text-black font-bold text-lg"> - </span>
                                                ) : (
                                                    registration.status === 'accepted' && (
                                                        <Link
                                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                            onClick={(event) => handleCheckout(event, registration.id)}
                                                        >
                                                            Pay
                                                        </Link>
                                                    )
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-center">
                                                {registration.status === 'pending' ? (
                                                    <button
                                                        onClick={(event) => handleDelete(event, registration.id)}
                                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                    >
                                                        Cancel
                                                    </button>
                                                ) : (
                                                    <span className="text-gray-500 italic">Cannot Cancel</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p className="text-gray-600">You have not registered for any classes yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
