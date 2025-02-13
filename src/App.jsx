import NameInput from './components/NameInput.jsx';
import MovesCounter from './components/MovesCounter.jsx';
import Card from './components/Card.jsx';

import { useState } from 'react';
import './App.css';
import { FaPlayCircle } from "react-icons/fa";

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

// function GetumberOfCards() {
//   const [numberOfCardsInput, setNumberOfCardsInput] = useState(0);
//   return (
//     <form method="post" onSubmit={submitUserNumberOfCards}>
//       <label>Pick an even number of cards</label>
//       <input value={numberOfCardsInput} onChange={ numberOfCards => setNumberOfCardsInput(numberOfCards.target.value)} />
//     </form>
//   );
// }

function App() {
  // states
  const [movesCount, setMovesCount] = useState(0);
  const [cardSide, setCardSide] = useState("face-down");
  const [matched, setMatched] = useState("not-matched");

  // start game visibility
  const [startGameVisibility, setStartGameVisibility] = useState(true);
  const toggleStartGameVisibility = () => {
    setStartGameVisibility(false);
  }

  return (
    <div className="wrapper">
      <div className="game-content-div">
        {/* I was going to do a cards counter, but instead I will do user input on name for now, and will come back to this*/}
        {/* <div className="ask-number-of-cards">
          <GetumberOfCards />
        </div> */}
        <div className="start-game-div" onClick={toggleStartGameVisibility}>
            {startGameVisibility ? <FaPlayCircle /> : <NameInput />}
        </div>
      </div>
    </div>
  )
}

export default App;
