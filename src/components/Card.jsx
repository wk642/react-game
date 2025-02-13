import { useState } from 'react';

function Card() {
  // hardwiring cards in for now
  const startingCards = [
    {
      id: 1,
      value: "Card 1",
      matched: false
    }
    {
      id: 2,
      value: "Card 2",
      matched: false
    }
    {
      id: 3
      value: "Card 3",
      matched: false
    }
    {
      id: 4,
      value: "Card 4",
      matched: false
    }
    {
      id: 5,
      value: "Card 5",
      matched: false
    }
    {
      id: 6,
      value: "Card 6",
      matched: false
    }
  ]
  const [faceDownCardVisibility, setFaceDownCardVisibility] = useState(true);

  let clicked = () => {
    console.log("button clicked!");
    setFaceDownCardVisibility = false;
  }

  const faceUpCard = (
    <div className="card" onClick={clicked}>
      {/* <button>{cardArray[i]}</button> */}
    </div>
  )

  const faceDownCard = (
    <div className="card" onClick={clicked}>
    </div>
  )
  
  const createRows = () => {

  }
  return (
    <div className="cards-row-1">
      
    </div>
    // <button onClick={clicked}>
    //   {faceDownCardVisibility ? "True" : "FALSE"};
    // </button>
    </div>
  )
}

export default Card;