import { useState } from 'react';
import './Card.css';

function Card({updateCards}) {
  return (
    <div className="card-holder">
      <div>
        <img className="faceUpCard" src={updateCards.matchingImage} />
        <img className="faceDownCard" src="src/assets/images/graToku.png" />  
      </div>
    </div>  
  );
};

export default Card;