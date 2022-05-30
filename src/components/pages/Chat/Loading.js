import React from "react";
import photo from '../../photos/Doctors/dog.png'

const Loading = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={photo}
        width={'150px'}
        height={'200px'}
        style={{
          position: 'fixed',
          top: '50%',
          left: '40%',
          transform: 'translate(-50%, -40%)',
        }}
      />
      <h2
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Loading...
      </h2>
    </div>
  )
};

export default Loading;
