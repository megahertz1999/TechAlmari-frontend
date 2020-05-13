import React from 'react';

export default function CartBanner() {
  return (
    <>
      <section className='banner_area'>
        <div className='banner_inner d-flex align-items-center'>
          <div className='container'>
            <div className='banner_content text-center'>
              <h2>Shopping Cart</h2>
              <div className='page_link'>
                <a href='index.html'>Home</a>
                <a href='login.html'>Cart</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
