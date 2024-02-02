import React, { useState } from 'react';

function PeopleCounter() {
  const [totalPeople, setTotalPeople] = useState(2);

  const handleDecrement = () => {
    if (totalPeople > 1) {
      setTotalPeople(totalPeople - 1);
    }
  };

  const handleIncrement = () => {
    setTotalPeople(totalPeople + 1);
  };

  return (
    <div className='total-people d-flex justify-content-between  align-items-center'>
      <button className='btn rounded-circle btn-outline-dark mx-2' onClick={handleDecrement}>
        -
      </button>
      <h6 className='mt-2 mx-3'>{totalPeople}</h6>
      <button className='btn rounded-circle btn-outline-dark mx-2' onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default PeopleCounter;
