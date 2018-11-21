data = {
  proj1: {
    desc: "ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ",
    img: "lego.jpg",
    url: "game.github.io",
    tech: ["cats", "dogs"]
  },
  proj2: {
    desc: "portfolio",
    url: "portfolio.github.io",
    tech: ["forks", "spoons", "knives"]
  },
  proj3: {
    desc: "react app",
    url: "portfolio.github.io",
    tech: ["react", "mongodb", "express"]
  },
  proj4: {
    desc: "MERN Stack",
    url: "portfolio.github.io",
    tech: ["react", "mongodb", "express"]
  },
  proj5: {
    desc: "MERN Stack",
    url: "portfolio.github.io",
    tech: ["react", "mongodb", "express"]
  },
  proj6: {
    desc: "API calls",
    url: "portfolio.github.io",
    tech: ["google maps", "passport", "express"]
  },
  proj7: {
    desc: "Hangman",
    url: "portfolio.github.io",
    tech: ["jQuery", "Bootstrap", "CSS"]
  }
};
var projects = document.querySelector(".projects");

for (const proj in data) {
  if (data.hasOwnProperty(proj)) {
    // console.log(proj + " -> " + JSON.stringify(data[proj]));

    const newProject = document.createElement("div");
    const techList = data[proj].tech;
    console.log(techList);
    newProject.innerHTML = `
    <div class="project">
      <img class="project__img" 
      src="../images/${data[proj].img ? data[proj].img : "alien.jpg"}">
      <div class="project__details">
        <h2>${proj}</h2>
        <p class="project__url"> ${data[proj].url}</p>
        <p class="project__desc"> ${data[proj].desc}</p>
        <ul>
          ${techList.map(e => `<li>${e}</li>`).join("")}
        </ul>
      </div>
    </div>
       `;
    projects.appendChild(newProject);
  }
}
