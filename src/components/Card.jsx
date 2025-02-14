import { useState } from 'react';
import './Card.css';

function Card({updateCards, handleUserClickedCard, flipped}) {
  // when user clicks on acard
  const userClickedCard = () => {
    handleUserClickedCard(updateCards);
  }
  
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img 
          className="front" 
          src={updateCards.src}
        />

        <img 
          className="back" 
          src="src/assets/images/graToku.png" 
          onClick={userClickedCard}          
        />  
      </div>
    </div>  
  );
};

export default Card;