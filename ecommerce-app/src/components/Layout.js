import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

/**
 * Layout component to structure the main layout of the application.
 */
const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
    )
}

export default Layout