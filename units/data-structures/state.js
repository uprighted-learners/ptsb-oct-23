/*
    ? State Machines
    * system with finite and defined states
    * states are just information
    * the info is reliant upon logic in order to transition or be reassigned
*/

let currentState = 'on';

const state = {
  on: ['off'],
  off: ['on'],
};

function changeLighting(newState) {
  if (currentState === newState) {
    console.log('no state change needed');
    return false;
  }

  currentState = newState;
  console.log('changing state');
  console.log(currentState);
}

// changeLighting('on');
changeLighting('off');

// change the state and making sure its not a state you cant change too
