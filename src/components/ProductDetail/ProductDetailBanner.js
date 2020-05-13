import React from 'react';

export default function ProductDetailBanner() {
  return (
    <>
      <section className='banner_area'>
        <div className='banner_inner d-flex align-items-center'>
          <div className='container'>
            <div className='banner_content text-center'>
              <h2>Product Details</h2>
              <div className='page_link'>
                <a href='index.html'>Home</a>
                <a href='category.html'>Category</a>
                <a href='detail.html'>Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
