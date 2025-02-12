import { useState } from 'react';
import MovesCounter from './MovesCounter';

function NameInput() {
  return (
    <div class="name-input-div">
      <label for="nameLabel">What is your name?</label>
      <input name="nameLabel" placeholder="What is your name?"></input>
    </div>
  )
}

export default NameInput;