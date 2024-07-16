import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="welcome">
                <header id="main-header" className="fixed top-0 left-0 w-full bg-blue-300 py-4 z-10">
                    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                        <div className="text-white text-xl">My App</div>
                        <nav className="space-x-4">
                            {auth.user ? (
                                <>
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                    {/*<Link*/}
                                    {/*    href={route('home')}*/}
                                    {/*    className=''*/}
                                    {/*>*/}
                                    {/*    Home*/}
                                    {/*</Link>*/}
                                    {/*<Link*/}
                                    {/*    href={route('about')}*/}
                                    {/*    className=''*/}
                                    {/*>*/}
                                    {/*About*/}
                                    {/*</Link>*/}
                                    {/*<Link*/}
                                    {/*    href={route('class')}*/}
                                    {/*    className=''*/}
                                    {/*>*/}
                                    {/*    Classes*/}
                                    {/*</Link>*/}
                                    {/*<Link*/}
                                    {/*    href={route('fee')}*/}
                                    {/*    className=''*/}
                                    {/*>*/}
                                    {/*    Fees*/}
                                    {/*</Link>*/}
                                    {/*<Link*/}
                                    {/*    href={route('venue')}*/}
                                    {/*    className=''*/}
                                    {/*>*/}
                                    {/*    Venues*/}
                                    {/*</Link>*/}
                                    {/*<Link*/}
                                    {/*    href={route('career')}*/}
                                    {/*    className=''*/}
                                    {/*>*/}
                                    {/*    Career*/}
                                    {/*</Link>*/}
                                </>
                            )}
                        </nav>
                    </div>
                </header>
                <div className="relative min-h-screen flex flex-col items-center justify-center bg-white selection:bg-[#FF2D20] selection:text-white pt-16">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                {/* Main content goes here */}
                            </div>
                        </main>
                        {/* <footer className="py-16 text-center text-sm text-white dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer> */}
                    </div>
                </div>
            </div>
        </>
    );
}
