import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

// ProductCard functional component
const ProductCard = () => {
  return (
    <div className='col-3'>
      {/* Link to product details */}
      <Link className='product-card position-relative'>
        {/* Wishlist icon */}
        <div className='wishlist-icon position-absolute'>
          <Link>
            <img src='images/wish.svg' alt='wishlist'/>
          </Link>
        </div>
        {/* Product images */}
        <div className='product-image'>
          <img src='images/watch.jpg' className='img-fluid' alt='product image' />
          <img src='images/watch-4.jpg' className='img-fluid' alt='product image' />
        </div>
        {/* Product details */}
        <div className='product-details'>
        <h6 className='brand'>Havels</h6>
        <h5 className='product-title'>
          Kids headphones bulk 10 pack multi colored for students.
        </h5>
        {/* Star rating */}
        <ReactStars count={5} size={24} value={4} edit={false}activeColor="#ffd700"/>
        <p className='price'>$100.00</p>
        </div>
      {/* Action bar */}
      <div className='action-bar position-absolute'>
        {/* Action icons */}
        <div className='d-flex flex-column gap-15'>
          <Link>
            <img src='images/prodcompare.svg' alt='compare' />
          </Link>
          <Link>
            <img src='images/view.svg' alt='view' />
          </Link>
          <Link>
            <img src='images/add-cart.svg' alt='addcart' />
          </Link>
          
        </div>
        </div>
      </Link>
    </div>
  )
}

// Export the ProductCard component
export default ProductCard