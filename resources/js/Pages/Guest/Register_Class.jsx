import React, {useEffect, useState} from 'react';
import Layout from '@/Layouts/Layout';
import { Head, useForm } from '@inertiajs/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Register({ auth }) {
    const { data, setData, post, errors } = useForm({
        selectedDate: null,
        selectedClass: '',
        selectedTime: '',
        selectedArea: '',
        price: 0,
    });

    const classPrices = {
        'Baby Class': 20,
        'Kid Class': 25,
        'Adult Class': 30,
        'Private Class': 50,
    };

    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2);

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 2);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('register_class.submit'), {
            onSuccess: () => {
                alert('Registration successful! Please for the coach email ');
            },
            onError: () => {
                alert('Registration failed, please check your entry.');
            },
        });
    };

    useEffect(() => {
        if (data.selectedClass) {
            setData('price', classPrices[data.selectedClass] || 0);
        }
    }, [data.selectedClass]);

    return (
        <Layout auth={auth}>
            <Head title="Register for Baby Swimming Classes" />

            <div className="container mx-auto py-12 px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Register for Swimming Classes</h2>
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Select Date</label>
                        <DatePicker
                            selected={data.selectedDate}
                            onChange={(date) => setData('selectedDate', date)}
                            dateFormat="yyyy/MM/dd"
                            className="mt-1 block w-full border rounded py-2 px-3"
                            minDate={minDate}
                            maxDate={maxDate}
                        />
                        {errors.selectedDate && <div className="text-red-600 mt-2">{errors.selectedDate}</div>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Select Class</label>
                        <select
                            value={data.selectedClass}
                            onChange={(e) => setData('selectedClass', e.target.value)}
                            className="mt-1 block w-full border rounded py-2 px-3"
                        >
                            <option value="">Select a class</option>
                            <option value="Baby Class">Baby Class</option>
                            <option value="Kid Class">Kid Class</option>
                            <option value="Adult Class">Adult Class</option>
                            <option value="Private Class">Private Class</option>
                        </select>
                        {errors.selectedClass && <div className="text-red-600 mt-2">{errors.selectedClass}</div>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Class Price</label>
                        <div className="mt-1 block w-full border rounded py-2 px-3 bg-gray-100">
                            <p className="text-lg text-gray-900">RM {data.price}</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Select Time</label>
                        <select
                            value={data.selectedTime}
                            onChange={(e) => setData('selectedTime', e.target.value)}
                            className="mt-1 block w-full border rounded py-2 px-3"
                        >
                            <option value="">Select a time</option>
                            <option value="09:00 AM">09:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="01:00 PM">01:00 PM</option>
                            <option value="02:00 PM">02:00 PM</option>
                            <option value="03:00 PM">03:00 PM</option>
                            <option value="04:00 PM">04:00 PM</option>
                            <option value="05:00 PM">05:00 PM</option>
                            <option value="06:00 PM">06:00 PM</option>
                            <option value="07:00 PM">07:00 PM</option>
                            <option value="08:00 PM">08:00 PM</option>
                            <option value="09:00 PM">09:00 PM</option>
                        </select>
                        {errors.selectedTime && <div className="text-red-600 mt-2">{errors.selectedTime}</div>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Select Area</label>
                        <select
                            value={data.selectedArea}
                            onChange={(e) => setData('selectedArea', e.target.value)}
                            className="mt-1 block w-full border rounded py-2 px-3"
                        >
                            <option value="">Select an area</option>
                            <option value="Cheras">Cheras</option>
                            <option value="Bukit Jalil">Bukit Jalil</option>
                            <option value="Sunway">Sunway</option>
                        </select>
                        {errors.selectedArea && <div className="text-red-600 mt-2">{errors.selectedArea}</div>}
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                        Register
                    </button>
                </form>
            </div>
        </Layout>
    );
}
