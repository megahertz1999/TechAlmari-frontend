import React from 'react';

export default function CartItem(props) {
  return (
    <>
      <tr>
        <td>
          <div class='media'>
            <div class='d-flex'>
              <img src={props.image} alt='' />
            </div>
            <div class='media-body'>
              <p>{props.title}</p>
            </div>
          </div>
        </td>
        <td>
          <h5>${props.price}</h5>
        </td>
        <td>
          <div class='product_count'>
            <input
              type='text'
              name='qty'
              id='sst'
              maxlength='12'
              value='1'
              title='Quantity:'
              class='input-text qty'
            />
            <button class='increase items-count' type='button'>
              <i class='lnr lnr-chevron-up'></i>
            </button>
            <button class='reduced items-count' type='button'>
              <i class='lnr lnr-chevron-down'></i>
            </button>
          </div>
        </td>
        <td>
          <h5>$720.00</h5>
        </td>
      </tr>
    </>
  );
}
