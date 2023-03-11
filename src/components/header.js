import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const routes = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'Pricing',
            href: '/pricing',
        },
        {
            name: 'Contact',
            href: '/contact',
        },
    ];

    const [showMenu, setShowMenu]=useState(false)

    return (
        <nav className="bg-white w-screen fixed z-20">
            <div className="px-4 py-3 md:flex justify-between items-center hidden mx-auto">
                <div className='flex flex-row justify-center items-center'>
                    <Image src='/gptletters-removebg-preview.png' width={70} height={70} alt='Logo'/>
                    <div className="px-4 py-3 flex items-center">
                        <div className="flex items-center space-x-4">
                            <ul className="hidden lg:flex space-x-4">
                                {routes.map((route) => (
                                    <li key={route.name}>
                                        <Link
                                            href={route.href}
                                            className="text-black font-medium hover:text-yellow-500"
                                        >
                                            {route.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="https://newgptletters-6vpv.vercel.app/sign-in" className="text-black hover:text-yellow-500">
                        Login
                    </Link>
                    <Link
                        href="https://newgptletters-6vpv.vercel.app/sign-up"
                        className="bg-blue-500 text-white rounded-full py-2 px-4 font-bold hover:bg-blue-400"
                    >
                        Sign Up
                    </Link>
                </div>
                {/* <svg
                    className="h-6 w-6 text-black lg:hidden cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => {
                        setShowMenu(!showMenu)
                        console.log(showMenu)
                    
                    }}
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z"
                        clipRule="evenodd"
                    />
                </svg> */}
            </div>

            {/* Responsive menu */}
            <div className="lg:hidden flex md:bg-white md:relative md:z-10 md:px-4 flex-col">
                <div className="md:absolute md:top-0 md:right-0 md:px-4 py-3  ml-4">
                    <svg
                        className="h-10 w-10 text-black md:hidden cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        {showMenu ? (
                            <path
                                fillRule="evenodd"
                                d="M4.05 4.95a1 1 0 011.414 0L10 8.586l4.536-4.536a1 1 0 011.414 1.414L11.414 10l4.536 4.536a1 1 0 01-1.414 1.414L10 11.414l-4.536 4.536a1 1 0 01-1.414-1.414L8.586 10 4.05 5.464a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />


                        ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z"
                                    clipRule="evenodd"
                                />

                        )}
                    </svg>
                </div>
                {showMenu && (
                    <div className="bg-white">
                        <ul className="px-4 py-2 space-y-2">
                            {routes.map((route) => (
                                <li key={route.name} onClick={() => setShowMenu(!showMenu)}>
                                    <Link
                                        href={route.href}
                                        className="block py-2 px-4 text-sm font-medium text-black hover:text-yellow-500"
                                    >
                                        {route.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="https://newgptletters-6vpv.vercel.app/sign-in"
                                    className="block py-2 px-4 text-sm font-medium text-black hover:text-yellow-500"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://newgptletters-6vpv.vercel.app/sign-up"
                                    className="block py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-400"
                                >
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                )} 
            </div>
        </nav>
    );
};

export default Header;
