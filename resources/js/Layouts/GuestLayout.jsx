import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center bg-white items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <img src="/images/logo.PNG" alt='logo' style={{ width: '200px', height: 'auto' }}/>
                </Link>
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
