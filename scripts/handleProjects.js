const projectNameInput = document.getElementById("project-name");
const projectLinkInput = document.getElementById("project-link");
const projectDateInput = document.getElementById("project-date");
const projectDescriptionInput = document.getElementById("project-description");

function setDefaultProjects() {
  projectNameInput.value = userData.projects.projectName ?? "";
  projectLinkInput.value = userData.projects.projectLink ?? "";
  projectDateInput.value = userData.projects.projectDate ?? "";
  projectDescriptionInput.value = userData.projects.projectDescription ?? "";
}

setDefaultProjects();

function handleProjects() {
  const projectName = projectNameInput.value;
  const projectLink = projectLinkInput.value;
  const projectDate = projectDateInput.value;
  const projectDescription = projectDescriptionInput.value;

  userData.projects.projectName = projectName;
  userData.projects.projectLink = projectLink;
  userData.projects.projectDate = projectDate;
  userData.projects.projectDescription = projectDescription;

  window.location.href = "/pages/skills.html";
}
