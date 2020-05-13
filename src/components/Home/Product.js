import React from 'react';

export default function Product(props) {
  return (
    <>
      <div className={`col col${props.col}`}>
        <div className='f_p_item'>
          <div className='f_p_img'>
            <img className='img-fluid' src={props.image} alt='' />
            <div className='p_icon'>
              <a href='#'>
                <i className='lnr lnr-heart'></i>
              </a>
              <a href='#'>
                <i className='lnr lnr-cart'></i>
              </a>
            </div>
          </div>
          <a href='#'>
            <h4>{props.title}</h4>
          </a>
          <h5>{props.price}</h5>
        </div>
      </div>
    </>
  );
}
