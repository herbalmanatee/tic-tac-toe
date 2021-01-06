




//add click event listener to each griditem
let gridItems = document.querySelectorAll('.grid-item');

for (let element of gridItems) {
  element.addEventListener("click", ()=>{
    let classList = element.classList
    if (classList.contains('clicked')) {
      alert('piece already here');
      return;
    }
    //element.innerHTML= 'x';
    element.style.backgroundColor = 'lightblue';
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