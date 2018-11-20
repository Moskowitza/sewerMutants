data = {
  proj1: {
    desc: "game",
    url: "game.github.io",
    tech: ["cats", "dogs"]
  },
  proj2: {
    desc: "portfolio",
    url: "portfolio.github.io",
    tech: ["forks", "spoons", "knives"]
  }
};
var projects = document.querySelector(".projects");

for (const proj in data) {
  if (data.hasOwnProperty(proj)) {
    // console.log(proj + " -> " + JSON.stringify(data[proj]));

    const newProject = document.createElement("div");
    newProject.classList.add("card")
    const techList = data[proj].tech;
    console.log(techList);
    newProject.innerHTML = `
       <h1>${proj}</h1>
       <p> url : ${data[proj].url}</p>
       <ul>
       ${techList.map(e => `<li>${e}</li>`).join("")}
       </ul>
       `;
    projects.appendChild(newProject);
  }
}
