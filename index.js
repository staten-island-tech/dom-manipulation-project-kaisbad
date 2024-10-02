const DOMSelectors = {
  header: document.querySelector("h1"),
  descriptiom: document.querySelector(".card-desc"),
  items: document.querySelector("li"),
};

console.log(DOMSelectors.items);
function changeColor() {
  //find element with querySelector
  let button = document.querySelector("button");
  //listen for a click even
  console.log(button);
  button.addEventListener("click", function (event) {
    event.preventDefault();
    //logging the click event
    console.log(event.target);
    button.style.backgroundColor = "blue";
  });
}
//call functions
changeColor();
