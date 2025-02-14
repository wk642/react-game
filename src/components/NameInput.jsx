import { useState } from 'react';
import MovesCounter from './MovesCounter';
import Card from './Card';

function NameInput() {


const cardsArray = [
  { "src": "./src/assets/images/matching-game-strawberry"},
  { "src": "./src/assets/images/matching-game-orange"},
  { "src": "./src/assets/images/matching-game-apple"}
]

  // update name
  const [userNameInput, setUserNameInput] = useState();
  const updateName = (nameInput) => {
    setUserNameInput(nameInput.target.value);
  };

  // user name input visibility
  const [userNameInputVisibility, setUserInputVisibilty] = useState(true);
  const toggleUserInputVisibility = () => {
    setUserInputVisibilty(false);
  }

  // storing the sorted cards
  const [updateCards, setUpdateCards] = useState([]);
  // store moves 
  const [numberOfMoves, setNumberOfMoves] = useState(0);

  // sorting the cards
  const sortingCards = () => {
    //sort the images twice
    const sortingCards = [...cardsArray, ...cardsArray]
      // generate a random number to move the cards around
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}));

      setUpdateCards(sortingCards);
      setNumberOfMoves(0);
  }
  console.log(updateCards, numberOfMoves);

  return (
    <div className="name-input-div">
      <input placeholder="What is your name?" value={userNameInput} onChange={updateName}></input>
      <button onClick={toggleUserInputVisibility} >
        {userNameInputVisibility ? 
          ("Submit") : 
          ( <MovesCounter 
              userNameInput={userNameInput}
            />)}
      </button>

      {/*can't seem to get both of these things done in one button, so splitting up the buttons*/}
      <button onClick={sortingCards} >
        Start Game
      </button>
    </div>
  )
}

export default NameInput;