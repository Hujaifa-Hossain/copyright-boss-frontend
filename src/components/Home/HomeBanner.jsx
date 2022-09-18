import React from 'react';
import Hacker from '../../assets/hacker.jpg';

const HomeBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
          <img src={Hacker} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className='flex-1'>
            <h1 className="text-3xl font-bold">Take full care of your Contents</h1>
            <p className="py-6">A convinent way to protect your contents with us at Copyright Boss. Copyright Boss is the first Bangladeshi platform for protecting creative contents.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;