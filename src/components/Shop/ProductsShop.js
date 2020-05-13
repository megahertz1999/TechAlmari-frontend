import React from 'react';
import Product from './Product';
import fp1 from '../../img/product/feature-product/fp1.jpg';
import fp2 from '../../img/product/feature-product/fp2.jpg';
import fp3 from '../../img/product/feature-product/fp3.jpg';
import fp4 from '../../img/product/feature-product/fp4.jpg';
import fp5 from '../../img/product/feature-product/fp5.jpg';
import ShopTopBar from './ShopTopBar';
import ProductFilters from './ProductFilters';
import Categories from './Categories';
const data = [
  {
    id: 1,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: fp1,
  },

  {
    id: 2,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: fp2,
  },

  {
    id: 3,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: fp3,
  },

  {
    id: 4,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: fp4,
  },

  {
    id: 5,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: fp5,
  },

  {
    id: 6,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: fp4,
  },

  {
    id: 7,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: fp3,
  },

  {
    id: 8,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: fp2,
  },

  {
    id: 9,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: fp5,
  },

  {
    id: 10,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: fp1,
  },
  {
    id: 11,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: fp2,
  },

  {
    id: 12,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: fp3,
  },
];

export default function ProductsShop() {
  return (
    <>
      <section class='cat_product_area section_gap'>
        <div class='container-fluid'>
          <div class='row flex-row-reverse'>
            <div class='col-lg-9'>
              <ShopTopBar />
              <div class='latest_product_inner row'>
                {data.map((item) => (
                  <Product
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
            <div class='col-lg-3'>
              <div class='left_sidebar_area'>
                <Categories />
                <ProductFilters />
              </div>
            </div>
          </div>
          <div class='row'>
            <nav class='cat_page mx-auto' aria-label='Page navigation example'>
              <ul class='pagination'>
                <li class='page-item'>
                  <a class='page-link' href='#'>
                    <i class='fa fa-chevron-left' aria-hidden='true'></i>
                  </a>
                </li>
                <li class='page-item active'>
                  <a class='page-link' href='#'>
                    01
                  </a>
                </li>
                <li class='page-item'>
                  <a class='page-link' href='#'>
                    02
                  </a>
                </li>
                <li class='page-item'>
                  <a class='page-link' href='#'>
                    03
                  </a>
                </li>
                <li class='page-item blank'>
                  <a class='page-link' href='#'>
                    ...
                  </a>
                </li>
                <li class='page-item'>
                  <a class='page-link' href='#'>
                    09
                  </a>
                </li>
                <li class='page-item'>
                  <a class='page-link' href='#'>
                    <i class='fa fa-chevron-right' aria-hidden='true'></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
