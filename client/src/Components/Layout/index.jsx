import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Toaster } from 'react-hot-toast'

function Layout({children}) {
  return (
    <main className='container mx-auto'>
      <Toaster position='bottom center' />
      <Header />
        {children}
      <Footer />
    </main>
  )
}

export default Layout