import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
      <footer className="bg-gray-900 w-full">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="md:flex md:items-center md:justify-between">
                  <div className="flex justify-center md:order-2">
                      <Link href="#" className="ml-6 text-gray-400 hover:text-gray-300">
                          <span className="sr-only">GitHub</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fill-rule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.275 3.438 9.732 8.205 11.317.6.111.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.39-1.334-1.76-1.334-1.76-1.09-.746.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.838 2.805 1.305 3.49.998.108-.766.419-1.305.763-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.465-2.992 1.394-2.808.136-.424.6-2.23.103-4.657-.28-.088-.495-.135-.748-.135-.253 0-.468.047-.748.135-1.514 2.427-.469 4.233.114 4.657 1.195.816 2.033 2.135 2.033 3.63 0 2.619-1.594 4.777-3.774 5.572.297.352.56.828.56 1.668 0 1.206-.011 2.181-.011 2.475 0 .319.213.694.828.577C20.565 21.732 24 17.275 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                      </Link>
                      <Link href="#" className="ml-6 text-gray-400 hover:text-gray-300">
                          <span className="sr-only">Twitter</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path
                                  fill-rule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.2 20.4c8.64 0 13.36-7.152 13.36-13.36 0-.204 0-.408-.012-.612.92-.656 1.712-1.46 2.352-2.392-.856.38-1.776.632-2.736.744 1-.6 1.788-1.532 2.16-2.648-.944.556-1.968.96-3.072 1.176-.884-.944-2.136-1.528-3.516-1.528-2.664 0-4.816 2.152-4.816 4.816 0 .376.04.736.112 1.088C5.7 8.596 3.036 7.18 1.44 4.872c-.388.664-.604 1.44-.604 2.264 0 1.568.796 2.948 2.008 3.76-.736 0-1.424-.204-2.024-.48v.056c0 2.184 1.544 4 3.552 4.416-.372.104-.76.16-1.16.16-.284 0-.568-.016-.84-.072.576 1.8 2.256 3.104 4.256 3.136-1.56 1.224-3.52 1.952-5.648 1.952-.364 0-.728-.024-1.08-.08 2.016 1.296 4.392 2.04 6.936 2.04" />
                          </svg>
                      </Link>
                  </div>
                  <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                      © 2023 Kimutai Kiptoo. All rights reserved.
                  </p>
              </div>
          </div>
      </footer>  )
}

export default Footer