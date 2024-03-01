const url = "http://localhost:3001";

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

  if (step === steps.LANGUAGES) {
    sendDataToServer();
  }
}

async function sendDataToServer() {
  try {
    const res = await fetch(url + "/resume", {
      method: "POST",
      body: localStorage.getItem("userData"),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log("Successfully sent data to server", data);
  } catch (e) {
    console.log("Error sending data to server", e);
  }
}

form.addEventListener("submit", handleSubmit);
backBtn.addEventListener("click", handleBack);
