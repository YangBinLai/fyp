import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const { registrations = [] } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Coach Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-medium">Class List</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Class</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Day</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Time</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {registrations.map((registration) => (
                                    <tr key={registration.id}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{registration.user.name}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{registration.class}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{registration.date}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{registration.time}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{registration.status}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-right">
                                            {registration.status === 'pending' && (
                                                <div className="flex">
                                                    <Link
                                                        as="button"
                                                        method="post"
                                                        href={route('registrations.accept', registration.id)}
                                                        className="text-green-600 hover:text-green-900 mr-4"
                                                    >
                                                        Accept
                                                    </Link>
                                                    <Link
                                                        as="button"
                                                        method="post"
                                                        href={route('registrations.reject', registration.id)}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Reject
                                                    </Link>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
