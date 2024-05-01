const header = document.querySelector("header");

/* Header change background color*/

window.addEventListener("scroll", function changeBgcolor() {
  if (this.scrollY > 100) {
    header.style.backgroundColor = "#1A191A";
    header.style.transitionDuration = "0.5s";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

/* Overkin skills in HTML */

// progressbar

let circleProgress = document.querySelector(".circle-progress");
let progressValue = document.querySelector(".progress-value");
let skillsContainer = document.getElementById("skills");

let skills = [
  {
    skillName: "HTML5",
    skillValue: 85,
  },
  {
    skillName: "CSS3",
    skillValue: 75,
  },
  {
    skillName: "JavaScript",
    skillValue: 60,
  },
  {
    skillName: "SQL",
    skillValue: 70,
  },
  {
    skillName: "ReactJS",
    skillValue: 30,
  },
  {
    skillName: "Python",
    skillValue: 65,
  },
];

let progressStartValue = 0;
let speed = 10;

for (let i = 0; i <= skills.length; i++) {

  skillsContainer.insertAdjacentHTML(
    "beforeend",
    `
        <div class="progress-container">
            <div class="circle-progress">
                <span class="progress-value">${skills[i].skillValue}</span>
            </div>
            <span class="skill-text">${skills[i].skillName}</span>
        </div> 
    `
  );
}

// let progress = setInterval(() => {
//     progressStartValue++
//     console.log(progressStartValue)
//     console.log(progressEndValue)

//     progressValue.textContent = `${progressStartValue}%`
// circleProgress.style.background = `conic-gradient(#ff6333 ${progressStartValue * 3.6}deg, #928A97 0deg)`

//     if(progressStartValue == progressEndValue){
//         clearInterval(progress)
//     }
// }, speed);
