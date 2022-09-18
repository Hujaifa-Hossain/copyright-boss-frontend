import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <ReactLoading type='bars' color="#000" delay={5} />
    </div>
  );
};

export default Loading;