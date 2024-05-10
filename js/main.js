const header = document.querySelector("header");
// export const loginForm = document.querySelector('login-btn') 

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

let skillsContainer = document.getElementById("skills");
let progressStarted = false;

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

let speed = 40;

for (let i = 0; i < skills.length; i++) {
  let progressContainer = document.createElement("div");
  progressContainer.className = "progress-container";

  let circleProgress = document.createElement("div");
  circleProgress.className = "circle-progress";

  let progressValue = document.createElement("span");
  progressValue.className = "progress-value";
  progressValue.textContent = "0%";

  let skillText = document.createElement("span");
  skillText.className = "skill-text";
  skillText.textContent = skills[i].skillName;

  progressContainer.appendChild(circleProgress);
  progressContainer.appendChild(progressValue);
  progressContainer.appendChild(skillText);

  skillsContainer.appendChild(progressContainer);

  let progressStartValue = 0;
  let progressEndValue = skills[i].skillValue;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circleProgress.style.background = `conic-gradient(#ff6333 ${progressStartValue * 3.6}deg, #928A97 0deg)`;

    if (progressStartValue === progressEndValue) {
      clearInterval(progress);
    }
  }, speed);

  // Проверяем текущую позицию прокрутки страницы
  window.addEventListener("scroll", () => {
    let scrollPosition = this.scrollY
    if (scrollPosition > 2450 && !progressStarted) {
      // Запускаем анимацию прогрессбара, если позиция прокрутки больше 2450 и прогрессбар еще не был запущен
      progressStartValue = 0;
      progressEndValue = skills[i].skillValue;
      progressValue.textContent = "0%";
      circleProgress.style.background = `conic-gradient(#928A97 0deg, #ff6333 0deg)`;
      clearInterval(progress);
      progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circleProgress.style.background = `conic-gradient(#ff6333 ${progressStartValue * 3.6}deg, #928A97 0deg)`;

        if (progressStartValue === progressEndValue) {
          clearInterval(progress);
        }
      }, speed);
      progressStarted = true;
    }
  });
}


// Burger-menu

