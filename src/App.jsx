import MovesCounter from './components/MovesCounter';
import { useState } from 'react';
import './App.css';
/* TODO:
- User story 1:
- Create a counter
  - display a number to track moves
  - starts at 0 with the option to increase later

- Create a card
  - back of card 
    - same image
  - front of card
    - different images
*/ 

// function MovesCounter() {
//   const [movesCounter, setCount] = useState(0);

//   return (
//     <>
//       <div className="moves-counter">
//         <h3>Moves: <span className="number-of-moves">{movesCounter}</span></h3>
//       </div>
//     </>
//   )
// }

function App() {
  return (
    <>
      <MovesCounter />
    </>
  )
}

export default App
