// DOM - Document Object Model
// DOM manipulation - elements, nodes

const form = document.getElementsByTagName("form")[0];
// How to get access to details?
// 1. Connect to HTML - done
// 2. Get the input
// 3. Get data from my input

// const name = document.querySelector("#name");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("number");
const descriptionInput = document.getElementById("description");

let formData = null;

// function -> code you write to repeat again and again or to organize
function handleSubmit() {
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const description = descriptionInput.value;

  formData = {
    name,
    email,
    phone,
    description,
  };

  window.location.href = "/pages/work_ex.html";
}

// Browser will emit events-> mouse move, mouse click, form submit, scroll page

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // run, call
  handleSubmit();
});
