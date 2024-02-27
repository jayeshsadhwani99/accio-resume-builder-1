const languages = [];

const languageInput = document.getElementById("language");
const addLangBtn = document.getElementById("language-add");
const list = document.getElementById("language-list");

function setDefaultLanguages() {
  languages.push(...userData.languages);
}

setDefaultLanguages();

function handleLanguages() {
  userData.languages = languages;
}

function checkLangInput() {
  const language = languageInput.value.trim();
  if (language) {
    return true;
  }

  return false;
}

function addLanguage() {
  const language = languageInput.value.trim();
  if (!checkLangInput()) return;
  languages.push(language);
  languageInput.value = "";

  renderLanguages();
}

function deleteLanguage(index) {
  languages.splice(index, 1);

  renderLanguages();
}

function renderLanguages() {
  list.innerHTML = "";
  if (languages.length === 0) {
    list.innerHTML = `
          <p>No languages added</p>
      `;
  }

  languages.forEach((language, index) => {
    list.innerHTML += `
          <div class="language">
              ${language}
              <span onclick="deleteLanguage(${index})">${feather.icons.x.toSvg()}</span>
          </div>
     `;
  });
}

renderLanguages();

addLangBtn.addEventListener("click", addLanguage);
