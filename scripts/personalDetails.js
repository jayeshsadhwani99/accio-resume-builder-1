const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("number");
const descriptionInput = document.getElementById("description");

function setDefaultPersonalDetails() {
  nameInput.value = userData.personalData.name ?? "";
  emailInput.value = userData.personalData.email ?? "";
  phoneInput.value = userData.personalData.phoneNumber ?? "";
  descriptionInput.value = userData.personalData.description ?? "";
}

setDefaultPersonalDetails();

function handlePersonalDetails() {
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const description = descriptionInput.value;

  userData.personalData.name = name;
  userData.personalData.email = email;
  userData.personalData.phoneNumber = phone;
  userData.personalData.description = description;

  window.location.href = "/pages/work_ex.html";
}
