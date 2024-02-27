const step = document
  .getElementsByTagName("main")[0]
  ?.getAttribute("data-step");
const form = document.getElementsByTagName("form")[0];
const backBtn = document.getElementById("back");

function handleBack() {
  history.back();
}

function handleSubmit(e) {
  e.preventDefault();

  switch (step) {
    case steps.PERSONAL_DETAILS:
      handlePersonalDetails();
      break;

    case steps.WORK_EX:
      handleWorkExperience();
      break;

    case steps.EDUCATION:
      handleEducation();
      break;

    case steps.LANGUAGES:
      handleLanguages();
      break;

    case steps.SKILLS:
      handleSkills();
      break;

    case steps.PROJECTS:
      handleProjects();
      break;

    default:
      break;
  }

  userData.save();
}

form.addEventListener("submit", handleSubmit);
backBtn.addEventListener("click", handleBack);
