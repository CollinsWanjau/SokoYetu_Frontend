import { Helmet } from 'react-helmet'
import React from 'react'

/**
 * Meta component manages changes to the document head, providing a reusable solution.
 * This reusable React component manages all your changes 
 * to the document head
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title to be displayed in the document head.
 * @returns {JSX.Element} React component.
 */
const Meta = (props) => {
  return (
    <Helmet>
        <meta charSet='utf-8' />
        <title>{props.title}</title>
    </Helmet>
  )
}

export default Meta