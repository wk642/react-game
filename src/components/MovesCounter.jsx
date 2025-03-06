import { useState } from 'react';
// import Card from './Card';
import NameInput from './NameInput'

function MovesCounter(userNameInput) {
  return (
    <>
      <div className="counter">{userNameInput.userNameInput} made {userNameInput.numberOfMoves} Moves </div>
    </>
  )
}

export default MovesCounter;