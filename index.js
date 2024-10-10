const DOMSelectors = {
  header: document.querySelector("h1"),
  descriptiom: document.querySelector(".card-desc"),
  items: document.querySelector("li"),
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
    button.style.backgroundColor = "blue";
  });
}

const item = document.querySelectorAll("h1");
//turn the nodelist into an array
const items = Array.from(item);
//iterate/loop over array and for each element make the color red
items.forEach((el) => (el.style.color = "red"));

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    console.log(event.targer.textContent);
  })
);
//call functions
changeColor();
