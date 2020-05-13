import React from 'react';

export default function PriceFilter() {
  return (
    <>
      <div class='widgets_inner'>
        <h4>Price</h4>
        <div class='range_item'>
          <div id='slider-range'></div>
          <div class='row m0'>
            <label for='amount'>Price : </label>
            <input type='text' id='amount' readonly />
          </div>
        </div>
      </div>
    </>
  );
}
