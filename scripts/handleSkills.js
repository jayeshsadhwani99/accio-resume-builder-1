const skills = [];

const skillInput = document.getElementById("skill");
const addBtn = document.getElementById("skill-add");
const list = document.getElementById("skill-list");

function setDefaultSkills() {
  skills.push(...userData.skills);
}

setDefaultSkills();

function handleSkills() {
  userData.skills = skills;

  window.location.href = "/pages/languages.html";
}

function checkInput() {
  const skill = skillInput.value.trim();
  if (skill) {
    return true;
  }

  return false;
}

function addSkill() {
  const skill = skillInput.value.trim();
  if (!checkInput()) return;
  skills.push(skill);
  skillInput.value = "";

  render();
}

function deleteSkill(index) {
  skills.splice(index, 1);

  render();
}

function render() {
  list.innerHTML = "";
  if (skills.length === 0) {
    list.innerHTML = `
        <p>No skills added</p>
    `;
  }

  skills.forEach((skill, index) => {
    list.innerHTML += `
        <div class="skill">
            ${skill}
            <span onclick="deleteSkill(${index})">${feather.icons.x.toSvg()}</span>
        </div>
   `;
  });
}

render();

addBtn.addEventListener("click", addSkill);
