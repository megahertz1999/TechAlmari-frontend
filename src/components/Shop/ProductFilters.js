import React from 'react';
import BrandFilter from './BrandFilter';
import ColorFilter from './ColorFilter';
import PriceFilter from './PriceFilter';

export default function ProductFilters() {
  return (
    <>
      <aside class='left_widgets p_filter_widgets'>
        <div class='l_w_title'>
          <h3>Product Filters</h3>
        </div>
        <BrandFilter />
        <ColorFilter />
        <PriceFilter />
      </aside>
    </>
  );
}
