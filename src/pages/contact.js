import Head from 'next/head'
import Link from 'next/link'
import { FiFacebook, FiGithub, FiTwitter } from 'react-icons/fi'

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
                            <FiFacebook size={48} color='gray'/>
                        </Link>

                        <Link href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <FiTwitter color='gray' size={48} />
                        </Link>

                        <Link href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                                <FiGithub color='gray' size={48} />
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



