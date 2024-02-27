const positionInput = document.getElementById("position");
const companyNameInput = document.getElementById("company-name");
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const isWorkingInput = document.getElementById("is-working");

function setDefaultWork() {
  positionInput.value = userData.workExperience.position ?? "";
  companyNameInput.value = userData.workExperience.companyName ?? "";
  startDateInput.value = userData.workExperience.startDate ?? "";
  endDateInput.value = userData.workExperience.endDate ?? "";
  isWorkingInput.checked = userData.workExperience.isWorking ?? false;
}

setDefaultWork();

function handleWorkExperience() {
  const position = positionInput.value;
  const companyName = companyNameInput.value;
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  const isWorking = isWorkingInput.checked;

  userData.workExperience = {
    position,
    companyName,
    startDate,
    endDate,
    isWorking,
  };

  window.location.href = "/pages/education.html";
}
