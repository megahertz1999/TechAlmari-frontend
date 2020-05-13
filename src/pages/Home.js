import React from 'react';
import HomeBanner from '../components/Home/HomeBanner';
import HotDeals from '../components/Home/HotDeals';
import FeatureProductsList from '../components/Home/FeatureProductsList';
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HotDeals />
      <FeatureProductsList />
    </div>
  );
}
