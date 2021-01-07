
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
    let gridContainerClassList = document.getElementsByClassName('grid-container')[0].classList
    if (classList.contains('clicked')) {
      alert('piece already in this position, pick an open position');
      return;
    }
    //coords!!
    let coords = processClassName(element.classList[0]);

    //following conditional operates on the user whose turn it is
    if (gridContainerClassList.contains('player1')) {
      element.style.backgroundColor = 'lightgreen';
      element.innerHTML =`X ${player1.name}`;
      gridContainerClassList.remove('player1');
      gridContainerClassList.add('player2');
      player1.addCoords(coords)
    } else {
      element.style.backgroundColor = 'lightblue';
      element.innerHTML =`O ${player2.name}`;
      gridContainerClassList.remove('player2');
      gridContainerClassList.add('player1')
      player2.addCoords(coords)
    }
    element.classList.add('clicked');
    //console.log(clickedItems);
  });
}


//function to process class name into coords
//et clickedItems = [];

let processClassName = (className) => {
  let length = className.length
  console.log(typeof className.slice(length-2))
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

let majorDiagonalCoords = [03, 11, 30];
let minorDiagonalCoords = [00, 11, 33];


//a Player class for each player
class Player {
  constructor(name) {
    this.name = name;
    this.xCoords = xCoords;
    this.yCoords = yCoords;
    this.diagonals = diagonals;
    this.wins = 0;
  }
  addCoords (coords) {
    console.log('coords: ', coords)
    let xCoord = coords[0]
    console.log(xCoord *1);
    let yCoord = coords[1]

    if (majorDiagonalCoords.includes(coords)) {
      this.diagonals.major +=1
    }

    if (minorDiagonalCoords.includes(coords)) {
      this.diagonals.minor +=1
    }

    this.xCoords[xCoord*1] +=1
    this.yCoords[yCoord*1] +=1
    console.log(this.name);
    console.log('xCoords: ', this.xCoords);
    console.log('yCoords: ', this.yCoords);
    console.log('diagonals: ', this.diagonals);
  }
}

