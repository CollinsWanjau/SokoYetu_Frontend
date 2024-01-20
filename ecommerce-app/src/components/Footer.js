// Importing necessary modules from the 'react' and 'react-icons' packages.
import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa"

// Defining the Footer functional component.
const Footer = () => {
  return (
    <>
      {/* First Footer Section */}
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-date d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input type="text"
                className="form-control py-1"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Second Footer Section */}
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Nairobi : 9001 Westlands, <br /> UpperHill, Fourth Street <br />
                  PinCode: 340001
                </address>
                <a 
                  href='tel:+254 78654321' 
                  className='mt-3 d-block mb-1 text-white'>
                  +254 78654321
                </a>
                <a 
                  href='mailto:collinswanjau3@gmail.com' 
                  className='mt-2 d-block mb-3 text-white'>
                  collinswanjau3@gmail.com
                </a>
                <div className='social icons d_flex align-items-center gap-30'>
                  <a className='text-white' href='#'>
                    <FaLinkedin className='text-white fs-5'/>
                  </a>
                  <a className='text-white' href='#'>
                    <FaYoutube className='text-white fs-5'/>
                  </a>
                  <a className='text-white' href='#'>
                    <FaInstagram className='text-white fs-5'/>
                  </a>
                  <a className='text-white' href='#'>
                    <FaGithub className='text-white fs-5'/>
                  </a>
                </div>
                
              </div>
            </div>

            {/* Third Footer Section */}            
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>

            {/* Fourth Footer Section */}
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>

            {/* Fifth Footer Section */}
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>HeadPhones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sixth Footer Section */}
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; { new Date().getFullYear()}; Powered by Delopers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

// Exporting the Footer component
export default Footer