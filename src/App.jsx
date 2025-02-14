import MovesCounter from './components/MovesCounter';
import { useState } from 'react';
import './App.css';




function Card() {
  function Clicked() {
    // alert("clicked!");
  }
  return (
    <>
      <div className="card">
        <button id="hide" onClick={Clicked()}>Dog</button>
      </div>
    </>
  )
}

function App() {
  return (
    <div className="wrapper">
      <div className="game-content-div">
        <div className="moves-counter-div">
          <MovesCounter />
        </div>

        <div className="cards-div">
          <div className="cards-row-1">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="cards-row-2">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
