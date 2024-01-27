import React from 'react'
import { Link } from 'react-router-dom'

/**
 * BreadCrumb component displays breadcrumb navigation with a link to the home page and the current title.
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title to be displayed in the breadcrumb.
 * @returns {JSX.Element} React component.
 */

const BreadCrumb = (props) => {
  // Destructuring the title from the props
  const { title } = props
  return (
    <div className='breadcrumb mb-0 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0'>
              <Link to='/' className='text-dark'>
                Home &nbsp;
              </Link> / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb