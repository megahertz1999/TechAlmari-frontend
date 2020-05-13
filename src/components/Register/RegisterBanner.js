import React from 'react';

export default function RegisterBanner() {
  return (
    <>
      <section className='banner_area'>
        <div className='banner_inner d-flex align-items-center'>
          <div className='container'>
            <div className='banner_content text-center'>
              <h2>Login/Register</h2>
              <div className='page_link'>
                <a href='index.html'>Home</a>
                <a href='login.html'>Register</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
