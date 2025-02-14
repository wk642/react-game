import { useState } from 'react';
// import Card from './Card';
import NameInput from './NameInput'

function MovesCounter(userNameInput) {
  const [movesCounter, setCount] = useState(0);
  const updateMovesCounter = () => {
    setCount = movesCounter + 1;
  }

  return (
    <>
      <div className="counter">{userNameInput.userNameInput} made {userNameInput.numberOfMoves} Moves </div>
    </>
  )
}

export default MovesCounter;