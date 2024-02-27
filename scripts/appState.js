const userData = {
  personalData: {
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
  },
  workExperience: {},
  projects: {},
  education: {},
  skills: [],
  languages: [],

  init: function () {
    const savedDataString = localStorage.getItem("userData");
    const savedData = JSON.parse(savedDataString);

    this.personalData = savedData.personalData;
    this.workExperience = savedData.workExperience;
    this.projects = savedData.projects;
    this.education = savedData.education;
    this.skills = savedData.skills;
    this.languages = savedData.languages;
  },

  save: function () {
    localStorage.setItem("userData", JSON.stringify(this));
  },
};

userData.init();
