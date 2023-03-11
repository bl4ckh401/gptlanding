import Footer from '@/components/Footer'
import Header from '@/components/header'
import React from 'react'


function Layout({ children }) {
    return (
        <>
            <Header />
            <div className='min-h-screen'>
                <main className=''>
                    {children}
                </main>
            </div>
            <Footer />
        </>

    )
}

export default Layout