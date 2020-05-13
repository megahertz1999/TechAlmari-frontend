import React from 'react';
import Product from './Product';
import fp1 from '../../img/product/feature-product/fp1.jpg';
import fp2 from '../../img/product/feature-product/fp2.jpg';
import fp3 from '../../img/product/feature-product/fp3.jpg';
import fp4 from '../../img/product/feature-product/fp4.jpg';
import fp5 from '../../img/product/feature-product/fp5.jpg';

export default function FeatureProductsList() {
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
  ];

  return (
    <div>
      <section className='feature_product_area'>
        <div className='main_box'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='main_title'>
                <h2>Featured Products</h2>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>

            <div className='row'>
              {data.map((prod, index) => (
                <Product
                  image={prod.image}
                  title={prod.title}
                  price={prod.price}
                  key={prod.id}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
