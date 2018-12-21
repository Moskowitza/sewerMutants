data = {
  proj1: {
    title: "Animal Sanctuaries",
    desc:
      "An application for finding and keeping in touch with Animal Sanctuaries.",
    img: "lego.jpg",
    url: "https://farmsanctuaries.herokuapp.com/",
    tech: ["React", "MySQL", "Heroku"]
  },
  proj2: {
    title: "Philly Neighbors",
    desc: "A community Bulletin Board",
    img: "lego.jpg",
    url: "https://stormy-temple-91988.herokuapp.com/",
    tech: ["Sequelize", "MERN", "Handlebars"]
  },
  proj3: {
    title: "Lost Memory",
    desc: "React Memory Game",
    img: "lego.jpg",
    url: "https://moskowitza.github.io/clickyreact/",
    tech: ["React", "Yarn"]
  },
  proj4: {
    title: "Halloween Hangman",
    desc: "Simple javascript game",
    img: "lego.jpg",
    url: "https://moskowitza.github.io/Hangman-Game/",
    tech: ["Bootstrap", "Javascript"]
  },
  proj5: {
    title: "HiFructose Notes",
    desc: "Web scrape and save notes using MongoDB",
    img: "lego.jpg",
    url: "https://mighty-dawn-76073.herokuapp.com/",
    tech: ["Express", "MongoDB", "Heroku"]
  },
  proj6: {
    title: "Mongo Notes",
    desc: "Note taker using MongoDB",
    img: "lego.jpg",
    url: "https://boiling-garden-17259.herokuapp.com/",
    tech: ["Express", "MongoDB", "Heroku"]
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
        <h2>${data[proj].title}</h2>
        <a href="${data[proj].url}">link</a>
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
