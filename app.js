//add a click event listener to each grid-item
let gridItems = document.querySelectorAll('.grid-item');
for (let element of gridItems) {
  element.addEventListener("click", ()=>{element.innerHTML=('x')});
}
