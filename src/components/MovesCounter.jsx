import { useState } from 'react';
import Card from './Card';
import NameInput from './NameInput'


function MovesCounter(userNameInput) {
  const [movesCounter, setCount] = useState(0);
  const updateMovesCounter = () => {
    setCount = movesCounter + 1;
  }

  return (
    <>
      <div>
        <p>Hi: {userNameInput.userNameInput}!</p>
      </div>

      <div className="counter">{userNameInput.userNameInput} made {movesCounter} Moves </div>
      <div className="cards-div">
          <div className="cards-row-1">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="cards-row-2">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
    </>
  )
}

export default MovesCounter;