const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.addEventListener("click", () => {
    ul.removeChild(li);
  });
  ul.appendChild(li);
  input.value = "";
}

button.addEventListener("click", () => {
  if (inputLength() > 0) {
    createListElement();
  }
});

input.addEventListener("keypress", (e) => {
  if (inputLength() > 0 && e.which === 13) {
    createListElement();
  }
});
