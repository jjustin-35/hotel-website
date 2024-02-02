import React from 'react';
import Rooms from '../Rooms';

const RoomsContent = () => {
  return (
    <div className='container'>
      <div className='py-5'>
        <h6>房型選擇</h6>
        <h1 className='text-primary'>各種房型，任您挑選</h1>
      </div>
      <Rooms />
    </div>
  );
};

export default RoomsContent;
