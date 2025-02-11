import { useState } from 'react';

function MovesCounter() {
  const [movesCounter, setCount] = useState(0);

  return (
    <>
      <div className="moves-counter">
        <h3>Moves: {movesCounter}</h3>
      </div>
    </>
  )
}

export default MovesCounter;