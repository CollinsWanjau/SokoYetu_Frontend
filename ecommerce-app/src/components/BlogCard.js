import React from 'react'
import { Link } from 'react-router-dom'

/**
 * BlogCard component represents a card displaying information about a blog post.
 * @returns {JSX.Element} JSX Element representing the BlogCard.
 */
const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>8 Jan, 2024</p>
                <h5 className='title'>Exploring the Future of Technology</h5>
                <p className='desc'>
                    From AI shaping our lives to IoT creating smart cities, the future of tech is exciting. VR, blockchain, and quantum computing are also on the horizon. Stay tuned as we delve into these topics!
                </p>
                <Link to='/' className='button'>
                    Read More
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard