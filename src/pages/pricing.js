import Head from 'next/head'
import Link from 'next/link'

export default function pricing() {
  return (
    <div>
      <Head>
        <title>GPT-Letters Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex w-screen justify-center items-center flex-col'>
        <section className="bg-white w-full">
          <div className="w-full py-12 px-4 flex flex-col justify-center items-center sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Affordable Pricing</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yellow-500 sm:text-4xl">
                The Right Plan for You
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Choose from our flexible pricing plans to get started with GPT-Letters today.
              </p>
            </div>

          <div className="mt-10 w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-blue-500">Free</h3>
                    <li className='mt-2 text-sm text-gray-500'>Save 15 letters</li>
                      <li className='mt-2 text-sm text-gray-500'>1 collaborator</li>
                        <li className='mt-2 text-sm text-gray-500'>Generate 800 documents/month</li>
                        <li className='mt-2 text-sm text-gray-500'>Unlimited writing tips</li>
                          <li className='mt-2 text-sm text-gray-500'>Download 1000 letters lifetime</li>
                <p className="mt-4 text-lg font-bold text-green-600">No cost</p>
                <div className="mt-6">
                  <Link href="#" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg block w-full text-center">Get started</Link>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-blue-500">Personal</h3>
                    <li className='mt-2 text-sm text-gray-500'>Save 100 letters</li>
                      <li className='mt-2 text-sm text-gray-500'>Unlimited collaborators</li>
                        <li className='mt-2 text-sm text-gray-500'>Generate 5000 documents/month</li>
                          <li className='mt-2 text-sm text-gray-500'>Unlimited writing tips</li>
                            <li className='mt-2 text-sm text-gray-500'>Download 5000 letters</li>
                <p className="mt-4 text-lg font-bold text-green-600"><span className="line-through">$4/mo</span> $2/mo</p>
                <p className="mt-1 text-xs text-red-500">50% off for first month</p>
                <div className="mt-6">
                  <Link href="#" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg block w-full text-center">Get started</Link>
                </div>
              </div>
            </div>
                <div className="bg-white shadow-lg rounded-lg border-4 border-green-600">
                  <div className="p-6">
                    <h3 className="text-lg leading-6 font-medium text-blue-500 text-center">Pro</h3>
                    <ul className="list-disc list-inside mt-6 text-sm text-gray-500">
                      <li>Unlimited letters</li>
                      <li>Unlimited collaborators</li>
                      <li>Unlimited writing tips</li>
                      <li>Download unlimited letters</li>
                    </ul>
                    <p className="mt-4 text-lg font-bold text-green-600"><span className="line-through">$20/mo</span> $10/mo</p>
                    <p className="mt-1 text-xs text-red-500">50% off for first 3 months</p>
                    <div className="mt-6">
                      <a href="#" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg block w-full text-center">Get started</a>
                    </div>
                  </div>
                </div>
            <div className="bg-white shadow-lg rounded-lg">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-blue-500">Enterprise</h3>
                  <li className="mt-2 text-sm text-gray-500">Customizable plan for large teams and organizations</li>
                    <li className="mt-2 text-sm text-gray-500">includes dedicated support</li>
                      <li className="mt-2 text-sm text-gray-500">advanced analytics, and more</li>
                <p className="mt-4 text-lg font-bold text-green-600">Contact us</p>
                <div className="mt-6">
                  <Link href="#" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg block w-full text-center">Contact us</Link>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
        </section>

        <section className="bg-green-600 w-full">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-gray-200 font-semibold tracking-wide uppercase">Why Choose GPT-Letters?</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                Our Features
              </p>
            </div>

            <div className="mt-10">
              <ul className="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                <li className="mt-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-50">AI-Powered Letter Generation</h4>
                      <p className="mt-2 text-base text-gray-200">Our AI technology generates unique and engaging letters tailored to your needs.</p>
                    </div>
                  </div>
                </li>

                <li className="mt-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M16.25 7.76a4 4 0 0 1 0 5.48"></path>
                        <path d="M7.75 7.76a4 4 0 0 1 0 5.48"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-50">Easy to Use</h4>
                      <p className="mt-2 text-base text-gray-200">Our user-friendly interface allows you to create and send letters with just a few clicks.</p>
                    </div>
                  </div>
                </li>

                <li className="mt-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 20h9"></path>
                        <path d="M12 4h9"></path>
                        <path d="M5 20h4"></path>
                        <path d="M5 4h4"></path>
                        <path d="M4 12h5"></path>
                        <path d="M15 12h5"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-50">Customizable Templates</h4>
                      <p className="mt-2 text-base text-gray-200">Our platform provides a variety of templates that you can customize to fit your specific needs.</p>
                    </div>
                  </div>
                </li>

                <li className="mt-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 3v18l10-10L5 3z"></path>
                        <path d="M16 3v18h2V3z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-50">Flexible Delivery Options</h4>
                      <p className="mt-2 text-base text-gray-200">Choose to send your letter via email or traditional mail for added convenience.</p>
                    </div>
                  </div>
                </li>

                <li className="mt-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                        <line x1="15" y1="3" x2="15" y2="21"></line>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="3" y1="15" x2="21" y2="15"></line>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-50">Secure and Private</h4>
                      <p className="mt-2 text-base text-gray-200">We take your privacy and security seriously, ensuring that your information is always safe and secure.</p>
                    </div>
                  </div>
                </li>

                <li className="mt-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 3h18v18H3z"></path>
                        <path d="M21 12H3"></path>
                        <path d="M12 21V3"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-50">Accessible Anywhere</h4>
                      <p className="mt-2 text-base text-gray-200">Our platform is accessible from anywhere with an internet connection, allowing you to write and send letters from wherever you are.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-gray-800 w-full">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Start Writing Today
              </h2>
              <p className="mt-3 text-xl text-gray-300 sm:mt-4">
                Join our platform and start writing letters today! Whether you want to send a letter to a loved one or a formal business correspondence, we've got you covered.
              </p>
              <div className="mt-10 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <Link href="https://newgptletters-6vpv.vercel.app/sign-up" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    Sign up for free
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-50 bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>
      </div>
  )}

