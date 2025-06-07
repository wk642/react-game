import NameInput from './components/NameInput';
import MovesCounter from './components/MovesCounter';
import Card from './components/Card';

import { useState } from 'react';
import './App.css';
import { FaPlayCircle } from "react-icons/fa";


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
        <div className="start-game-div" onClick={toggleStartGameVisibility}>
            {startGameVisibility ? <FaPlayCircle /> : <NameInput />}
        </div>
      </div>
    </div>
  )
}

export default App;
