import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
//import Footer from '../Footer'

function Layout({children}) {
  return (
    <main className='container mx-auto'>
      <Header />
        {children}
      <Footer />
    </main>
  )
}

export default Layout