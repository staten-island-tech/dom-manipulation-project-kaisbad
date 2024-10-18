const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  card: document.querySelector(".card"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
};

console.log(DOMSelectors.items);
function changeColor() {
  //find element with querySelector
  let button = document.querySelector(".btn");
  //listen for a click even
  console.log(button);
  button.addEventListener("click", function (event) {
    event.preventDefault();
    //logging the click event
    console.log(event.target);
  });
}

const colors = [];
let colorName;
let colorImage;
let colorhex;

function createCard() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    let colorName = document.querySelector("#name");
    let colorImage = document.querySelector("#image");
    let colorhex = document.querySelector("#hex");
    insertCard();
    usertTyped();
  });
}
createCard();
