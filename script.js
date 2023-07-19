const input = document.getElementById("userinput");
const button = document.getElementById("enter");
const ul = document.querySelector("ul");
const removeBtn = `<i class="fa fa-times" aria-hidden="true"></i>`;

function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.insertAdjacentHTML("beforeend", removeBtn);
  li.children[0].addEventListener("click", () => {
    ul.removeChild(li);
  });
  ul.appendChild(li);
  input.value = "";
}

button.addEventListener("click", () => {
  if (input.value.length > 0) {
    createListElement();
  }
});

input.addEventListener("keypress", (e) => {
  if (input.value.length > 0 && e.which === 13) {
    createListElement();
  }
});
