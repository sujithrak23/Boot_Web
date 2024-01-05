import React, { useState } from 'react';
import {Col , Row } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';


function Largeimg() {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleImageClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
  
      <img
        src='https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=400'
        alt="Image Alt Text"
        style={{
          width: isEnlarged ? '30px' : '160px', 
          height: 'auto',
          cursor: 'pointer',
          transition: 'width 0.5s ease-in-out', 
        }}
        onClick={handleImageClick}
      />

    

  );
}

export default Largeimg;
