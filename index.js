const DOMSelectors = {
  text: document.getElementById("title"),
  image: document.querySelector("#image"),
  container: document.querySelector(".container"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".formclass"),
};

function createCard() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = DOMSelectors.text.value;
    const imageInput = DOMSelectors.image.value;

    if (nameInput && imageInput) {
      insertCard(nameInput, imageInput);
      clearInputs();
    } else {
      alert("fill in both forms");
    }
  });
  removeCard();
}

function insertCard(card, img) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="header">${card}</h2><img src="${img}" class="card-img"><button class="deletebtn" type="button">delete</button></div>`
  );
}

function clearInputs() {
  DOMSelectors.form.reset();
}

function removeCard() {}
DOMSelectors.container.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("deletebtn")) {
    event.target.closest(".card").remove();
  }
});

createCard();
