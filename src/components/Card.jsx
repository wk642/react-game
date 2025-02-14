import { useState } from 'react';
import './Card.css';

function Card({updateCards, handleUserClickedCard}) {
  // when user clicks on acard
  const userClickedCard = () => {
    handleUserClickedCard(updateCards);
  }
  
  return (
    <div className="card-holder">
      <div>
        <img 
          className="faceUpCard" 
          src={updateCards.src}
          value={updateCards.value}
        />

        <img 
          className="faceDownCard" 
          src="src/assets/images/graToku.png" 
          onClick={userClickedCard}          
          value={updateCards.value}
        />  
      </div>
    </div>  
  );
};

export default Card;