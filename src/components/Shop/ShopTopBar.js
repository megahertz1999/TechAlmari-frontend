import React from 'react';

export default function ShopTopBar() {
  return (
    <>
      <div class='product_top_bar'>
        <div class='left_dorp'>
          <select class='sorting'>
            <option value='1'>Default sorting</option>
            <option value='2'>Default sorting 01</option>
            <option value='4'>Default sorting 02</option>
          </select>
          <select class='show'>
            <option value='1'>Show 12</option>
            <option value='2'>Show 14</option>
            <option value='4'>Show 16</option>
          </select>
        </div>
        <div class='right_page ml-auto'>
          <nav class='cat_page' aria-label='Page navigation example'>
            <ul class='pagination'>
              <li class='page-item'>
                <a class='page-link' href='#'>
                  <i class='fa fa-long-arrow-left' aria-hidden='true'></i>
                </a>
              </li>
              <li class='page-item active'>
                <a class='page-link' href='#'>
                  1
                </a>
              </li>
              <li class='page-item'>
                <a class='page-link' href='#'>
                  2
                </a>
              </li>
              <li class='page-item'>
                <a class='page-link' href='#'>
                  3
                </a>
              </li>
              <li class='page-item blank'>
                <a class='page-link' href='#'>
                  ...
                </a>
              </li>
              <li class='page-item'>
                <a class='page-link' href='#'>
                  6
                </a>
              </li>
              <li class='page-item'>
                <a class='page-link' href='#'>
                  <i class='fa fa-long-arrow-right' aria-hidden='true'></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
