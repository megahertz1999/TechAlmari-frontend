import React from 'react';

export default function Product(props) {
  return (
    <>
      <div class='col-lg-3 col-md-3 col-sm-6'>
        <div class='f_p_item'>
          <div class='f_p_img'>
            <img class='img-fluid' src={props.image} alt='' />
            <div class='p_icon'>
              <a href='#'>
                <i class='lnr lnr-heart'></i>
              </a>
              <a href='#'>
                <i class='lnr lnr-cart'></i>
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
