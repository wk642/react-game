import { useState } from 'react';

function MovesCounter() {
  const [movesCounter, setCount] = useState(0);

  return (
    <div className="counter">Moves: {movesCounter}</div>
  )
}

export default MovesCounter;