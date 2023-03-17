import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className="bg-gray-100 min-h-screen flex w-screen justify-center items-center flex-col">
            <Head>
                <title>Contact Us | GPT Letters</title>
                    <meta name="description" content="Create unique and customized letters for any situation with GPTLetters. Our AI-powered platform generates high-quality letters in seconds. Choose from a variety of letter types, including love letters, business letters, cover letters, and more." />
                    <meta name="description" content="How to write a cover letter" />
                    <meta name="description" content="How to write an NDA" />
                    <meta name="description" content="Love letters
                        Business letters
                        Cover letters
                        Thank-you letters
                        Recommendation letters
                        Apology letters
                        Resignation letters." />
                    <meta name="description" content="Create unique and customized letters for any situation with GPTLetters. Our AI-powered platform generates high-quality letters in seconds. Choose from a variety of letter types, including love letters, business letters, cover letters, and more." />
                    <meta name="description" content="Create unique and customized letters for any situation with GPTLetters. Our AI-powered platform generates high-quality letters in seconds. Choose from a variety of letter types, including love letters, business letters, cover letters, and more." />
                    <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Hero section */}
            <div className="bg-green-600 w-full flex flex-col justify-center items-center">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-center text-white sm:text-5xl lg:text-6xl">
                        <span className="block">Get in touch with</span>
                        <span className="block text-yellow-500">GPT Letters</span>
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl text-center text-gray-200">
                        We are always happy to hear from you! Fill out the form below or reach out to us via email or social media.
                    </p>
                </div>
            </div>

            {/* Contact form */}
            <div className="py-16 w-full bg-white overflow-hidden flex flex-col justify-center items-center lg:py-24">
                <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl flex flex-col justify-center items-center">
                    <div className="relative text-center">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Send us a message
                        </h2>
                        <p className="mt-3 text-lg text-gray-500">
                            Fill out the form below and we will get back to you as soon as possible.
                        </p>
                    </div>
                    <div className="mt-12 w-4/5 md:w-full justify-center items-center flex flex-col">
                        <div className="mt-12 justify-between w-full items-center flex flex-col md:flex-row">
                            <div className='w-full'>
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm border-b-2 focus:ring-green-600 focus:border-green-600 border-gray-500 rounded-md"
                                    />
                                </div> 
                            </div>
                            <div className='w-full'>
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        autoComplete="family-name"
                                        className="py-3 px-4 block w-full shadow-sm border-b-2 focus:ring-green-600 focus:border-green-600 border-gray-500 rounded-md"
                                    />
                                </div>    
                            </div>
                            
                        </div>
                        <div className="sm:col-span-2 w-full mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="py-3 px-4 block w-full shadow-sm border-b-2 focus:ring-green-600 focus:border-green-600 border-gray-500 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 w-full mt-4">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    className="py-3 px-4 block w-full shadow-sm border-b-2 focus:ring-green-600 focus:border-green-600 border-gray-500 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 w-full mt-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="py-3 px-4 block w-full shadow-sm border-b-2 focus:ring-green-600 focus:border-green-600 border-gray-500 rounded-md"
                                ></textarea>
                            </div>
                        </div>
                        <div className="sm:col-span-2 mt-6 w-3/4">
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm border-b-2 text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Social media section */}
            <div className="bg-gray-100 w-full text-center">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Follow us on social media</h2>
                    <div className="mt-8 flex justify-center space-x-6">
                        <Link href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M20.59 3.5a.4.4 0 01.41.4v16.2a.4.4 0 01-.41.4H15.5v-7.29h2.08l.31-2.41H15.5v-1.54c0-.7.19-1.18 1.2-1.18l1.28-.01V7.8a17.22 17.22 0 00-1.47-.07c-1.45 0-2.45.89-2.45 2.52v1.42H11v2.41h2.08V21H3.41a.4.4 0 01-.4-.4V3.9c0-.22.18-.4.4-.4h17.18z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>

                        <Link href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M23.64 4.83a9.67 9.67 0 01-2.8.775A4.87 4.87 0 0023.15 3.1a9.77 9.77 0 01-3.1 1.18A4.87 4.87 0 0014.66 0c-2.68 0-4.85 2.16-4.85 4.84 0 .38.04.75.12 1.1C8.62 5.97 4.58 3.97 1.87.98a4.82 4.82 0 00-.66 2.42c0 1.67.87 3.14 2.19 4.01a4.85 4.85 0 01-2.21-.61v.06c0 2.34 1.65 4.28 3.85 4.72a4.88 4.88 0 01-2.19.08c.62 1.94 2.42 3.35 4.56 3.39a9.8 9.8 0 01-6.07 2.09c-.39 0-.78-.02-1.16-.08a13.86 13.86 0 007.5 2.2c9.02 0 13.97-7.47 13.97-13.96 0-.21 0-.43-.02-.64a9.94 9.94 0 002.45-2.54z"
                                />
                            </svg>
                        </Link>

                        <Link href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 .3C5.87.3.3 5.87.3 12A11.7 11.7 0 0012 23.7a11.7 11.7 0 0011.7-11.7A11.7 11.7 0 0012 .3zm6.06 10.53c.22.5.15 1.09-.25 1.49-.83.88-1.98 1.42-3.25 1.42-1.27 0-2.42-.54-3.25-1.42-.4-.4-.47-.99-.25-1.49l.94-2.19a1.07 1.07 0 01.99-.64h2.36c.5 0 .91.37.99.85l.94 2.18zm-5.05 2.79c-.06.15-.16.28-.28.38-.23.18-.52.29-.84.29-.32 0-.61-.11-.84-.29a.65.65 0 01-.28-.38l-.6-2.15a1.04 1.04 0 01.4-.99l1.8-1.31c.15-.11.34-.14.51-.07.17.06.29.21.31.39l.22 1.99a.6.6 0 00.6.54h1.69a1.07 1.07 0 01.99.64l.94 2.19z"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Newsletter section */}
            <div className="bg-gray-900 w-full text-center">
                <div className="max-w-7xl mx-auto py-12 flex justify-center items-center px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        <div className='w-full lg:col-span-1'>
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                Sign up for our newsletter
                            </h2>
                            <p className="mt-3 max-w-2xl text-lg leading-6 text-indigo-200">
                                Subscribe to our newsletter.
                            </p>
                        </div>
                        <form className="mt-8 lg:mt-0 w-full lg:col-span-1" action="#" method="POST">
                            <div className="sm:flex">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent sm:max-w-xs rounded-md"
                                    placeholder="Enter your email"
                                />
                                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <button
                                        type="submit"
                                        className="w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent sm:w-auto sm:inline-flex"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
)}



