const loadData = (lang = "persian") => {
  const aboutP = document.querySelector(".info-container p");
  const infoBoxesContainer = document.querySelector(".sub-info-container");

  readTextFile("../data/data.json", (data) => {
    let dataJson = JSON.parse(data);
    dataJson = dataJson[lang];

    aboutP.textContent = dataJson.about;

    dataJson.subInfo.forEach((data) => {
      let child = generateInfoBox(data.title, data.info);
      infoBoxesContainer.appendChild(child);
    });
    const skillsContainer = document.querySelector("#skills-container");
    let skills = dataJson.skills;

    skills.forEach((item) => {
      const skillsTitle = document.createElement("h3");
      skillsTitle.textContent = item.title;
      console.log(skillsTitle);
      skillsContainer.appendChild(skillsTitle);
      console.log(item.skill);
      item.skill.forEach((skill) => {
        let skillBox = generateSkillBox(skill.name, skill.knowledgeLevel);
        console.log(skillBox);
        skillsContainer.appendChild(skillBox);
      });
    });

    const slideContainer = document.querySelector(".slide-container");
    let projects = dataJson.projects;
    projects.forEach((project) => {
      const sliderItem = generatePorjectBox(project);
      slideContainer.appendChild(sliderItem);
    });
  });
};
loadData();
const generateInfoBox = (title, text) => {
  const infoBoxElement = document.createElement("div");
  infoBoxElement.classList.add("info-box", "hvr-sink");
  const titleSpan = document.createElement("span");
  const infoSpan = document.querySelector("span");
  titleSpan.textContent = title;
  infoSpan.textContent = text;
  titleSpan.classList.add("box-title");
  infoSpan.classList.add("box-info");
  infoBoxElement.appendChild(titleSpan);
  infoBoxElement.appendChild(infoSpan);
  console.log(title, text);

  return infoBoxElement;
};

const generateSkillBox = (skillName, level) => {
  const skillBox = document.createElement("div");
  skillBox.classList.add("skill-box");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = skillName;

  const skillProgressContainer = document.createElement("div");
  skillProgressContainer.classList.add("skill-level");
  const skillProgress = document.createElement("div");
  skillProgress.style.width = level + "%";
  console.log(skillProgress.style);
  skillProgressContainer.appendChild(skillProgress);

  skillBox.appendChild(nameSpan);
  skillBox.appendChild(skillProgressContainer);

  return skillBox;
};
const generatePorjectBox = (porjectObj) => {
  const sliderItem = document.createElement("div");
  sliderItem.classList.add("slider-item");

  const projectImg = document.createElement("img");
  projectImg.src = porjectObj.img;
  sliderItem.appendChild(projectImg);

  const projectInfoContainer = document.createElement("div");
  projectInfoContainer.classList.add("pre-info");
  const nameSpan = document.createElement("span");
  nameSpan.classList.add("name");
  const toolsSpan = document.createElement("span");
  toolsSpan.classList.add("tools");
  nameSpan.textContent = porjectObj.name;
  toolsSpan.textContent = porjectObj.technologies;
  projectInfoContainer.appendChild(nameSpan);
  projectInfoContainer.appendChild(toolsSpan);
  sliderItem.appendChild(projectInfoContainer);

  const projectDetailsContainer = document.createElement("div");
  projectDetailsContainer.classList.add("details");
  const projectDescription = document.createElement("p");
  projectDescription.textContent = porjectObj.description;
  projectDetailsContainer.appendChild(projectDescription);
  const actionsContainer = document.createElement("div");
  actionsContainer.classList.add("actions");
  const projectHref = document.createElement("a");
  projectHref.textContent = "Source";
  projectHref.setAttribute("href", porjectObj.srcLink);
  actionsContainer.appendChild(projectHref);
  projectDetailsContainer.appendChild(actionsContainer);

  sliderItem.appendChild(projectDetailsContainer);

  return sliderItem;
};
