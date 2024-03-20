import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
        <div className=' py-10 flex-1'>
        {children}
        </div>
        <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
