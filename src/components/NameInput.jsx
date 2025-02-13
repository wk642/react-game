import { useState } from 'react';
import MovesCounter from './MovesCounter';
import Card from './Card';

function NameInput() {
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

  // const [submitButtonVisibility, setsubmitButtonVisibility] = useState(true)

  return (
    <div className="name-input-div">
      <input placeholder="What is your name?" value={userNameInput} onChange={updateName}></input>
      <p>Hi:  {userNameInput}!</p>
      <button onClick={toggleUserInputVisibility} >
      {userNameInputVisibility ? "Submit": <MovesCounter />}
      </button>
    </div>
  )
}

export default NameInput;