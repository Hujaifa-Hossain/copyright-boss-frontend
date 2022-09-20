import React from 'react';
import Video from './Video';

const Videos = () => {
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 m-6'>
      <Video/>
      <Video/>
      <Video/>
      <Video/>
      <Video/>
      <Video/>
      <Video/>
      <Video/>
      <Video/>
      <Video/>
      <Video/>
    </div>
  );
};

export default Videos;