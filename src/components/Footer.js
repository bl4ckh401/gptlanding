import Link from 'next/link'
import React from 'react'
import { FiGithub, FiTwitter } from 'react-icons/fi'

function Footer() {
  return (
      <footer className="bg-gray-900 w-full">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="md:flex md:items-center md:justify-between">
                  <div className="flex justify-center md:order-2">
                      <Link href="#" className="ml-6 text-gray-400 hover:text-gray-300">
                          <span className="sr-only">GitHub</span>
                          <FiGithub color='gray' size={48} />
                      </Link>
                      <Link href="#" className="ml-6 text-gray-400 hover:text-gray-300">
                          <span className="sr-only">Twitter</span>
                          <FiTwitter color='gray' size={48}/>
                      </Link>
                  </div>
                  <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                      © 2023 <Link href='https://pavsportfolio.vercel.app/' className='text-yellow-500'>Kimutai Kiptoo</Link>. All rights reserved.
                  </p>
              </div>
          </div>
      </footer>  )
}

export default Footer