import { useState } from 'react';
import MovesCounter from './MovesCounter';
import Card from './Card';

function NameInput() {
  const cardsArray = [
    { "matchingImage": "src/assets/images/matching-game-strawberry.png"},
    { "matchingImage": "src/assets/images/matching-game-orange.png"},
    { "matchingImage": "src/assets/images/matching-game-apple.png"}   
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

  // store user choices of cards for matching
  const [userChocieCard1, setUserChoiceCard1] = useState(null);
  const [userChoiceCard2, setUserChoiceCard2] = useState(null);

  // store moves 
  const [numberOfMoves, setNumberOfMoves] = useState(0);

  // sorting the cards
  const sortingCards = () => {
    //sort the images twice to make the pairs
    const sortingCards = [...cardsArray, ...cardsArray]
      // generate a random number to move the cards around
      .sort(() => Math.random() - 0.5)
      .map((updateCards) => ({...updateCards, id: Math.random()}));

      setUpdateCards(sortingCards);
      setNumberOfMoves(0);
  }

  // storing the cards for comparisson for matching
  const handleUserClickedCard = () => {
    if (userChocieCard1 === null)  {
      setUserChoiceCard1(updateCards);
    } 
    if (userChoiceCard2 === null) {
      setUserChoiceCard2(updateCards);
    }
    if (userChoiceCard2 !=  null){
      alert("wait");
    }
    console.log(`Choice 1: ${userChocieCard1} Choice 2: ${userChoiceCard2}`);
  }
  return (
    <>
      <div className="name-input-div">
        <input placeholder="What is your name?" value={userNameInput} onChange={updateName}></input>
        <button onClick={toggleUserInputVisibility} >
          {userNameInputVisibility ? 
            ("Submit") : 
            ( <MovesCounter 
                userNameInput={userNameInput}
              />
            )
          }
        </button>

        {/*can't seem to get both of these things done in one button, so splitting up the buttons*/}
        <button onClick={sortingCards} >
          Start Game
        </button>
      </div>

      <div className="card-div">
        {updateCards.map(updateCards => (
          <Card updateCards={updateCards} key={updateCards.id} handleUserClickedCard={handleUserClickedCard}/>
        ))}
      </div>
    </>
    
  )
}

export default NameInput;