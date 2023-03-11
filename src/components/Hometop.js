import Image from 'next/image'
import React from 'react'
import { BsRobot, BsTranslate } from 'react-icons/bs'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { MdOutlineTipsAndUpdates } from 'react-icons/md'
import { SlEnvolopeLetter } from 'react-icons/sl'
import Link from 'next/link'
function Hometop() {

    const features = [
        {
            title:'AI-powered Letter generation',
            description:'Easily generate high-quality letters with just a few clicks using our AI-powered letter generation tool. No more struggling to find the right words or phrasing. With our tool, you can quickly and easily create letters that are accurate, professional, and tailored to your needs.',
            icon: <BsRobot size={48} color='#48BB78' />,

        },
        {
            title: 'Multilingual support',
            description: 'Communicate with your customers in their own language with our multilingual support. Our platform supports over 50 languages, allowing you to easily create letters that speak directly to your customers, no matter where they are in the world.',
            icon: <BsTranslate size={48} color='#48BB78' />,
        },
        {
            title: 'Collaborative writing tools',
            description: 'Work together seamlessly with your team on document writing with our collaborative writing tools. Share documents, make comments, and collaborate in real-time, all within our platform. Say goodbye to endless email chains and lost files.',
            icon: <AiOutlineUsergroupAdd size={48} color='#48BB78' />,
        },
        {
            title: 'Writing Tips',
            description: 'Get expert writing tips and advice right within our platform. Our writing tips feature offers suggestions and best practices to help you improve your writing and create effective, impactful letters every time.',
            icon: <MdOutlineTipsAndUpdates size={48} color='#48BB78'/>,
        },
        {
            title: 'Up to 10 Letter types with new ones will be released',
            description: 'Choose from a range of letter types, from business letters to personal letters, with up to 10 letter types available. And as our platform evolves, we are always adding new letter types to help you stay ahead of the game.',
            icon: <SlEnvolopeLetter size={48} color='#48BB78' />,
        },

    ]

    const workflow = [
        {
        step:1,
        process: 'Jessica, a lawyer, needs to create a non-disclosure agreement (NDA) for a client. To create an automated workflow for this process, she uses GPT-Letters and defines the content with the help of a simple text input interface.'
        },
        {
            step: 2,
            process: 'She wants the NDA to be collaboratively edited with her client. Jessica connects GPT-Letters with her email service provider and adds the clients email address as a collaborator.The client can then make comments and edits to the NDA within the platform and can easily communicate with Jessica via the Message center.'
        },
        {
            step: 3,
            process: 'Once the NDA is finalized, it can be downloaded or sent directly to both Jessica and the client via email.'
        },
        {
            step: 4,
            process: 'Jessica now has a seamless process for creating, editing, and finalizing NDAs that simplifies her work and improves collaboration with her clients.'
        },
    ]

  return (
    <div className='flex w-screen justify-center items-center flex-col'>
        <div className='flex flex-col md:flex-row lg:w-3/4 justify-center items-center w-full p-10 min-h-screen'>
              <div className='text-center p-4 w-full md:w-1/2 '>
                  <h1 className='text-4xl text-left py-2 px-1'><span className='text-yellow-500'>GPT</span>Letters</h1>
                  <h2 className='text-3xl text-left py-2 px-1'>Say more <span className='text-blue-500'>with</span><br/>Less effort</h2>
                  <p className='text-lg text-left py-2 px-1'>Say goodbye to tedious document preparation and hello to efficient and personalized letter generation with GPT-Letters. Our state-of-the-art platform automates the entire process, allowing you to spend more time supporting your customers and less time worrying about formatting and language.</p>
                  <div className='flex flex-col justify-center items-center md:flex-row w-full mt-10'>

                <Link href='https://newgptletters-6vpv.vercel.app/sign-up'>
                    <button className='w-48 rounded-lg bg-green-500 text-white font-bold px-1 py-3 my-2 shadow-xl'>Start your Free Trial</button>
                </Link>
                <Link href='/contact'>
                    <button className='w-48 rounded-lg bg-white text-green-500 font-bold px-1 py-3 my-2'>Get in Touch</button>
                </Link>
                  </div>
            </div>
              <div className='w-full flex flex-col justify-center items-center relative mt-6 h-96  md:w-1/2'>
                <div className='absolute bg-gray-100 bottom-0 md:w-7/12 w-9/12 h-96 -z-10'/>
                  <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.7ki1agqVAwde5s2LggYvwgHaE8%26pid%3DApi&f=1&ipt=18e931e0954c9689f69a1117152f2cf4e03a5c3e9b00813ce20abb95297069cd&ipo=images' width={300} height={300} alt='Woman typing' className='w-11/12 lg:w-4/6'/>
              </div>
        </div>
          <div className='bg-gray-100 w-full flex-col md:flex-row flex justify-center items-center mt-6 py-4 mb-6 md:h-96'>
              <div className='md:w-1/2 w-full flex justify-center items-center'>
                  <h1 className='text-2xl text-left py-6 px-3 font-bold'>Generate Letters Instantly</h1>
              </div>
              <div className='md:w-1/2 w-full flex justify-center items-center'>
                  <p className='text-base text-left py-6 px-3'>
                      Tired of manually entering data into Microsoft Word when you need to generate letters? It's time for an upgrade. With Formstack Documents, you can create an automated letter generation process. Shave hours off your document prep time and meet customer needs faster.
                  </p>
              </div>
          </div>
          <div className='bg-white w-full lg:w-3/4 flex-col flex-wrap flex justify-center items-start mt-6 py-4 mb-6  p-10'>
            <div className='md:w-1/2 w-full flex flex-col text-center justify-center items-center mb-2'>
              <h1 className='text-2xl text-left py-6 px-3 font-bold w-full text-blue-500'>Simplify the Document generation process</h1>
                  <p className='text-base text-left py-6 px-3'>Say goodbye to tedious document preparation and hello to efficient and personalized letter generation with GPT-Letters. Our state-of-the-art platform automates the entire process, allowing you to spend more time supporting your customers and less time worrying about formatting and language.</p>
            </div>
              <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6'>
                  {features.map((feature) => {
                      return (
                          <div className='md:w-full flex justify-start items-start flex-col h-full'>
                              <div className='text-left py-6 px-3'>{feature.icon}</div>
                              <h2 className='text-xl text-left py-6 px-3 font-bold text-yellow-500'>{feature.title}</h2>
                              <p className='text-base text-left py-6 px-3'>
                                  {feature.description}
                              </p>
                          </div>
                      )
                  })}
              </div>

          </div>
          <div className='bg-white w-full lg:w-3/4 flex-col flex-wrap flex justify-center items-start mt-6 py-4 mb-6  p-10'>
            <div className='md:w-1/2 w-full flex flex-col text-center justify-center items-center mb-2'>
                <h1 className='text-2xl text-left py-6 px-3 font-bold w-full text-blue-500'>Automate your document generation process</h1>
                  <p className='text-base text-left py-6 px-3'>Creating seamless workflows is easy with GPT-Letters. Here's an example of a workflow that can help you simplify your document generation process.</p>
            </div>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4'>
              {workflow.map((work) => {
                  return (
                      <div className='md:w-full flex justify-start items-start flex-col h-full'>
                        <div className='bg-green-500 rounded-full text-white w-16 h-16 flex justify-center items-center'>
                              <h2 className='text-xl text-left py-6 px-3 font-bold'>{work.step}</h2>
                        </div>
                          <p className='text-base text-left py-6 px-3'>
                              {work.process}
                          </p>
                      </div>
                  )
              })}
          </div>
          </div>
          {/* <div className="bg-gradient-to-tr from-green-500 to-green-100 rounded-lg p-8 w-full flex-col flex justify-center items-center mt-6 py-4 h-96 md:h-96">
              <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-lg mb-4">Learn how GPT-Letters, our no-code suite of products, can help you automate the processes that matter and boost productivity.</p>
              <a href="#" className="bg-green-600 hover:bg-green-600 text-white py-2 px-4 rounded-lg">Request a Demo</a>
          </div> */}
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
                              <Link href="/pricing" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-50 bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10">
                                  Learn more
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Hometop