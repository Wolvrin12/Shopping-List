const input = document.getElementById("userinput");
const button = document.getElementById("enter");
const ul = document.querySelector("ul");
const removeBtn = `<i class="fa fa-times" aria-hidden="true"></i>`;

const createListElement = () => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.insertAdjacentHTML("beforeend", removeBtn);
  li.children[0].addEventListener("click", () => {
    ul.removeChild(li);
  });
  ul.appendChild(li);
  input.value = "";
};

const removeSpaces = (spacedValue) => {
  const removedSpacesValue = spacedValue.split(" ").join("");
  if ((removedSpacesValue.length = "")) {
    return removedSpacesValue;
  } else {
    return input.value;
  }
};

button.addEventListener("click", () => {
  if (removeSpaces(input.value).length > 0) {
    createListElement();
  }
});

input.addEventListener("keypress", (e) => {
  if (e.which === 13 && removeSpaces(input.value).length > 0) {
    createListElement();
  }
});
