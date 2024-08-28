import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';

export default function AdminDashboard({ auth }) {
    const { coaches = [] } = usePage().props;

    const { data, setData, post, delete: destroy, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        area: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('coaches.store'), {
            onSuccess: () => {
                setData({ ...data, showAddForm: false });
            }
        });
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this coach?')) {
            destroy(route('coaches.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-medium">Coaches List</h3>
                            <button
                                onClick={() => setData({ ...data, showAddForm: !data.showAddForm })}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                {data.showAddForm ? 'Cancel' : 'Add Coach'}
                            </button>
                        </div>

                        {data.showAddForm && (
                            <form onSubmit={handleSubmit} className="mb-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-gray-700">Name</label>
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="mt-1 block w-full"
                                        />
                                        {errors.name && <div className="text-red-600 mt-2">{errors.name}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="mt-1 block w-full"
                                        />
                                        {errors.email && <div className="text-red-600 mt-2">{errors.email}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Phone</label>
                                        <input
                                            type="text"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="mt-1 block w-full"
                                        />
                                        {errors.phone && <div className="text-red-600 mt-2">{errors.phone}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Area</label>
                                        <input
                                            type="text"
                                            value={data.area}
                                            onChange={(e) => setData('area', e.target.value)}
                                            className="mt-1 block w-full"
                                        />
                                        {errors.area && <div className="text-red-600 mt-2">{errors.area}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Password</label>
                                        <input
                                            type="password"
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            className="mt-1 block w-full"
                                        />
                                        {errors.password && <div className="text-red-600 mt-2">{errors.password}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Confirm Password</label>
                                        <input
                                            type="password"
                                            value={data.password_confirmation}
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            className="mt-1 block w-full"
                                        />
                                        {errors.password_confirmation && <div className="text-red-600 mt-2">{errors.password_confirmation}</div>}
                                    </div>
                                </div>
                                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                                    Save
                                </button>
                            </form>
                        )}

                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">
                                        Phone
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">
                                        Area
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {coaches.length > 0 ? (
                                    coaches.map((coach) => (
                                        <tr key={coach.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                                {coach.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                                {coach.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                                {coach.phone || '-'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                                                {coach.area || '-'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-right">
                                                <button
                                                    onClick={() => handleDelete(coach.id)}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-4">
                                            No coaches found.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
