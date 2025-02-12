import { useState } from 'react';

function Card() {
  const [visibility, setVisibility] = useState(true);

  const clicked = () => {
    console.log("button clicked!" + visibility);

  }

  const faceUpCard = (
    <div className="card" onClick={() => setVisibility(visibility)}>
      {/* <button>{cardArray[i]}</button> */}
    </div>
  )

  const faceDownCard = (
    <div className="card" onClick={clicked}>
    </div>
  )
  
  return (
    visibility ? faceUpCard : faceDownCard 
  )
}

export default Card;