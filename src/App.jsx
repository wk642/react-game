import { useState } from 'react'
import './App.css'

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
function CreateCounter() {
  return (
    <>
      <div className="moves-counter">
        <h3>Moves: <span className="number-of-moves"></span></h3>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <CreateCounter />
    </>
  )
}

export default App
