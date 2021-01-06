
// ********** EVENT LISTENERS ********** //

//onSubmit forms for userNames - create a player instance and also initialize the starting user by adding a class name to grid-container class list
let usersForm = document.getElementById('users');

usersForm.addEventListener("submit", (event) =>{
  event.preventDefault();

  playerName1 = document.getElementById('player1').value.split(' ').join('');
  playerName2 = document.getElementById('player2').value.split(' ').join('');
  if ((playerName1.length || playerName2.length) === 0) {
    alert("player name cannot be blank");
  }

  //createPlayer(player1, player2); <------- *******
  window.player1 = new Player(playerName1);
  window.player2 = new Player(playerName2);
  console.log([player1, player2]);
  document.getElementsByClassName('grid-container')[0].classList.add('player1');
})

//add click event listener to each griditem
let gridItems = document.querySelectorAll('.grid-item');

for (let element of gridItems) {
  element.addEventListener("click", ()=>{
    let classList = element.classList
    if (classList.contains('clicked')) {
      alert('piece already in this position, pick an open position');
      return;
    }
    //element.innerHTML= 'x';
    if (document.getElementsByClassName('grid-container')[0].classList.contains('player1')) {
      element.style.backgroundColor = 'lightgreen'
    } else {
      element.style.backgroundColor = 'lightblue';
    }
    element.classList.add('clicked');
    clickedItems.push(processClassName(element.classList[0]));
    console.log(clickedItems);
  });
}


//function to process class name into coords
let clickedItems = [];

let processClassName = (className) => {
  let length = className.length
  return className.slice(length-2);
}

/*
storing coordinates <--- this is a naive solution .. mvp
 •store an array of [x,y] <--- not necessary
 •store an x obj and y obj
 •when a new coord is stored check for a 'solution' i.e. three in a row
    - solution can be defined as:
      •three x's in the same row i.e. (0,0 ; 1,0 ; 2,0)
      •three y's in the same column i.e (0,0; 0,1; 0,2)
      •diagonal solution ()
 */
let yCoords = {
  0: null,
  1: null,
  2: null
}

let xCoords = {
  0: null,
  1: null,
  2: null
}

let diagonals = {
  major: null,
  minor: null
}

//a Player class for each player
class Player {
  constructor(name) {
    this.name = name;
    this.xCoords = xCoords;
    this.yCoords = yCoords;
    this.diagonals = diagonals;
  }
}

