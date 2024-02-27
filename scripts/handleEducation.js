const institueInput = document.getElementById("institue");
const majorInput = document.getElementById("major");
const graduationInput = document.getElementById("graduation");

function setDefaultEducation() {
  institueInput.value = userData.education.institue ?? "";
  majorInput.value = userData.education.major ?? "";
  graduationInput.value = userData.education.graduation ?? "";
}

setDefaultEducation();

function handleEducation() {
  const institue = institueInput.value;
  const major = majorInput.value;
  const graduation = graduationInput.value;

  userData.education.institue = institue;
  userData.education.major = major;
  userData.education.graduation = graduation;

  window.location.href = "/pages/project.html";
}
