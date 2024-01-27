import React from 'react'
import ReactStars from "react-rating-stars-component";
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

/**
 * 
 * Our Store Component.
 * 
 * @component
 * @return {JSX.Element} The rendered Store component
 */
const OurStore = () => {
  return (
    <>
      {/* Meta component for setting the page title */}
      <Meta title={'Our Store'} />

      {/* BreadCrumb component for displaying navigation breadcrumb */}
      <BreadCrumb title="Our Store" />

      {/* Main content of the OurStore component */}
      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>

            {/* Sidebar with filters */}
            <div className='col-3'>
              {/* Filter by categories */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Shop by categories
                </h3>
                <div>
                  <ul className='ps-0'>
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                  </ul>
                </div>
              </div>

              {/* Filter by availability and price */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Filter By
                </h3>
                <div>
                  <h5 className='sub-title'>Availablity</h5>
                  <div>
                    {/* Checkboxes for In Stock and Out of Stock */}
                    <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlfor="">
                      In Stock (0)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label class="form-check-label" htmlFor="">
                      Out of Stock (1)
                    </label>
                  </div>
                  </div>

                  {/* Price range input */}
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From" />
                        <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder='To' />
                        <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>

                  {/* Color filter */}
                  <h5 className='sub-title'>Color</h5>
                  <div>
                    <div>
                      <ul className='colors'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>

                  {/* Size filter */}
                  <h5 className='sub-title'>Size</h5>
                  <div>
                    {/* Checkboxes for different sizes */}
                    <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlfor="color-1">
                      S (2)
                    </label>
                  </div>
                    <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlfor="color-2">
                      M (2)
                    </label>
                  </div>
                  </div>
                </div>
              </div>

              {/* Filter by product tags */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tags</h3>
                <div>
                  {/* Display product tags as badges */}
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Headphone
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Laptop
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Mobile
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Wire
                    </span>
                  </div>
                </div>
              </div>

              {/* Display random products */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Products</h3>
                <div>
                  <div className='random-products mb-3 d-flex'>
                    {/* Display image and details for a random product */}
                    <div className='w-50'>
                      <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                    </div>
                    <div className='w-50'>
                      <h5>Kids headphones bulk 10 pack multi colored for srudents</h5>
                      {/* Display star rating */}
                      <ReactStars count={5} size={24} value={4} edit={false}activeColor="#ffd700"/>
                      {/* Display product price */}
                      <b>$ 300</b>
                    </div>
                  </div>

                  {/* Repeat for another random product */}
                  <div className='random-products d-flex'>
                    <div className='w-50'>
                      <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                    </div>
                    <div className='w-50'>
                      <h5>Kids headphones bulk 10 pack multi colored for srudents</h5>
                      <ReactStars count={5} size={24} value={4} edit={false}activeColor="#ffd700"/>
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content area (products) */}
            <div className='col-9'>
              {/* Add your main content here */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore