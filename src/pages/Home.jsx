import React from 'react';
import { Link } from 'react-router-dom';
import HomeBanner from '../components/Home/HomeBanner';
import HomeFeatures from '../components/Home/HomeFeatures';

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <HomeFeatures/>
    </div>
  );
};

export default Home;