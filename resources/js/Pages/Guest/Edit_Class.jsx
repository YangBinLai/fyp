import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Edit({ auth, registration, availableClasses, availableTimes, availableAreas }) {
    const { data, setData, put, errors } = useForm({
        date: registration.date,
        class: registration.class,
        time: registration.time,
        area: registration.area,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('registrations.update', registration.id));
    };

    const isEditable = !['accepted', 'rejected'].includes(registration.status);

    return (
        <Layout auth={auth}>
            <Head title="Edit Class" />

            <div className="min-h-screen py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-6">Edit Class</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                                <input
                                    type="date"
                                    value={data.date}
                                    onChange={(e) => setData('date', e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md"
                                    disabled={!isEditable}
                                />
                                {errors.date && <div className="text-red-500 mt-2">{errors.date}</div>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Class</label>
                                <select
                                    value={data.class}
                                    onChange={(e) => setData('class', e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md"
                                    disabled={!isEditable}
                                >
                                    {availableClasses.map((className) => (
                                        <option key={className} value={className}>
                                            {className}
                                        </option>
                                    ))}
                                </select>
                                {errors.class && <div className="text-red-500 mt-2">{errors.class}</div>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Time</label>
                                <select
                                    value={data.time}
                                    onChange={(e) => setData('time', e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md"
                                    disabled={!isEditable}
                                >
                                    {availableTimes.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                                {errors.time && <div className="text-red-500 mt-2">{errors.time}</div>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Area</label>
                                <select
                                    value={data.area}
                                    onChange={(e) => setData('area', e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md"
                                    disabled={!isEditable}
                                >
                                    {availableAreas.map((area) => (
                                        <option key={area} value={area}>
                                            {area}
                                        </option>
                                    ))}
                                </select>
                                {errors.area && <div className="text-red-500 mt-2">{errors.area}</div>}
                            </div>

                            {isEditable && (
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Update Class
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
