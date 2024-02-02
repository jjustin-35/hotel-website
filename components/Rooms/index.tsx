import React from 'react';
import RoomCarousel from './RoomCarousel';

const Rooms = () => {
  return (
    <div className='row justify-content-lg-center align-items-center'>
      <div className='col-lg-7'>
        <RoomCarousel />
      </div>
      <div className='col-lg-5'></div>
    </div>
  );
};

export default Rooms;
