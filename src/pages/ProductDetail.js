import React from 'react';
import SingleProductArea from '../components/ProductDetail/SingleProductArea';
import ProductDetailBanner from '../components/ProductDetail/ProductDetailBanner';
import ProductDescription from '../components/ProductDetail/ProductDescription';

export default function ProductDetail() {
  return (
    <>
      <ProductDetailBanner />
      <SingleProductArea />
      <ProductDescription />
    </>
  );
}
