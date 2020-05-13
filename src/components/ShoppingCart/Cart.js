import React from 'react';
import cart1 from '../../img/product/single-product/cart1.jpg';
import CartItem from './CartItem';

const data = [
  {
    id: 1,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: cart1,
  },

  {
    id: 2,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: cart1,
  },

  {
    id: 3,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: cart1,
  },

  {
    id: 4,
    title: 'Long Sleeve T-Shirt',
    price: 150,
    image: cart1,
  },
];

export default function Cart() {
  return (
    <section class='cart_area'>
      <div class='container'>
        <div class='cart_inner'>
          <div class='table-responsive'>
            <table class='table'>
              <thead>
                <tr>
                  <th scope='col'>Product</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Total</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <CartItem
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price.toFixed(2)}
                  />
                ))}

                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td>
                    <h5>$2160.00</h5>
                  </td>
                </tr>

                <tr class='out_button_area'>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div class='checkout_btn_inner'>
                      <a class='gray_btn' href='#'>
                        Continue Shopping
                      </a>
                      <a class='main_btn' href='#'>
                        Proceed to checkout
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
