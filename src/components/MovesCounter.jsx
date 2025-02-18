import React from 'react';
// import Card from './Card';
import NameInput from './NameInput'

function MovesCounter({ userNameInput, numberOfMoves }) {
  if (userNameInput === null || numberOfMoves === null) {
    throw new Error('userNameInput and numberOfMoves must not be null');
  }

  return (
    <>
    <NameInput /> 
      <div className="counter">{userNameInput} made {numberOfMoves} Moves </div>
    </>
  )
}

export default MovesCounter;