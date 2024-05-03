import React from 'react';

const Card = ({ imageUrl, children }) => {
  console.log(children);
  return (
    <div class='card' style={{ width: '18rem' }}>
      {imageUrl && <img src={imageUrl} class='card-img-top' alt='...'></img>}
      {children}
    </div>
  );
};

export default Card;
