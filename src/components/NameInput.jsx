import { useState, useEffect } from 'react';
import MovesCounter from './MovesCounter';
import Card from './Card';

function NameInput() {
  const cardsArray = [
    { 
      "src": "src/assets/images/matching-game-strawberry.png",
      "value": "strawberry",
      "matched": false
    },
    { 
      "src": "src/assets/images/matching-game-orange.png",
      "value": "orange",
      "matched": false
    },
    { 
      "src": "src/assets/images/matching-game-apple.png",
      "value": "apple",
      "matched": false
    }   
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
  const [userChoiceCard1, setUserChoiceCard1] = useState(null);
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

  // storing the the two cards for comparisson for matching
  const handleUserClickedCard = (updateCards) => {
    if (userChoiceCard1 === null)  {
      setUserChoiceCard1(updateCards);
    } else {
      setUserChoiceCard2(updateCards);
    }
    console.log(updateCards.src);
    console.log(updateCards)
    console.log(`updated: ${userChoiceCard1}`)
  }

  // comparing the two cards
  useEffect(() => {
    if(userChoiceCard1 && userChoiceCard2){
      if(userChoiceCard1.value === userChoiceCard2.value){
        console.log("Match!");
        // change to matched
        setUpdateCards(prevUpdateCards => {
          return prevUpdateCards.map(updateCards => {
            if (updateCards.value === userChoiceCard1.value) {
              return {...updateCards, matched: true}
            } else {
              return updateCards;
            }
          })
        })
        resettingTurn();
      } else {
        console.log("Not a match!");
        setTimeout(() => resettingTurn(), 500);
      }
    }
  }, [userChoiceCard1, userChoiceCard2]);

  // reset the comparisson after every turn
  const resettingTurn = () => {
    setUserChoiceCard1(null);
    setUserChoiceCard2(null);
    setNumberOfMoves(numberOfMoves => numberOfMoves +1);
    console.log(`number of moves = ${numberOfMoves}`);
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
                numberOfMoves={numberOfMoves}
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
          <Card 
            updateCards={updateCards} 
            key={updateCards.id} 
            handleUserClickedCard={handleUserClickedCard}
            flipped={updateCards === userChoiceCard1 || updateCards === userChoiceCard2 || updateCards.matched}
          />
        ))}
      </div>
    </>
    
  )
}

export default NameInput;