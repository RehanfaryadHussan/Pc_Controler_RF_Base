window.addEventListener("load", () => {
  alert("Starting the Quiz.\n You have only 120s.");
});
let Quiz = [
  {
    question: "Which famous scientist developed the theory of relativity?",
    options: {
      a: "Isaac Newton",
      b: "Albert Einstein",
      c: "Stephen Hawking",
      d: "Nikola Tesla",
      correct: "b",
    },
  },
  {
    question: "What is the color of the sky on a clear day?",
    options: {
      a: "White",
      b: "Blue",
      c: "Ocean Color",
      d: "Red",
      correct: "b",
    },
  },
  {
    question: "What is 2+2%2 = ?",
    options: {
      a: "2",
      b: "3",
      c: "4",
      d: "23",
      correct: "b",
    },
  },
  
  {
    question: "Which planet is closest to the sun?",
    options: {
      a: "Earth",
      b: "Mars",
      c: "Venus",
      d: "Jupiter",
      correct: "c",
    },
  },
  {
    question: "What gets wetter as it dries?",
    options: {
      a: "Towel",
      b: "Soap",
      c: "Sponge",
      d: "Umbrella",
      correct: "a",
    },
  },
  {
    question: "What has one eye but can't see?",
    options: {
      a: "Needle",
      b: "Cyclops",
      c: "Camera",
      d: "Storm",
      correct: "a",
    },
  },
  {
    question: "What word becomes shorter when you add two letters to it?",
    options: {
      a: "Short",
      b: "Quick",
      c: "Small",
      d: "Brief",
      correct: "a",
    },
  },
  {
    question: "What flies without wings?",
    options: {
      a: "Plane",
      b: "Thought",
      c: "Time",
      d: "Spacecraft",
      correct: "b",
    },
  },
  {
    question: "What has keys but can't open locks?",
    options: {
      a: "Computer",
      b: "Piano",
      c: "Typewriter",
      d: "Car",
      correct: "b",
    },
  },
  {
    question: "What is (√-4)(√-4) = ?",
    options: {
      a: "4",
      b: "-4",
      c: "√4",
      d: "16",
      correct: "b",
    },
  },
];

let Box = document.querySelector(".container1");
let QuesPlace = document.querySelector(".qs");
let optionsPlace = document.querySelectorAll(".options button");
let nextBtn = document.querySelector(".next button");
let controler = document.querySelector(".controler .result");
let questionIndex = 0,
  corr = 0;

let diddisable = () => {
  document.querySelectorAll(".options button").forEach((e) => {
    e.removeAttribute("disabled");
  });
}
let removeClass = () => {
  document.querySelectorAll(".options button").forEach((e) => {
    e.classList.remove("correct");
  });
};
let check = (e) => {
  disable();
  e.target.classList.add("correct");
  if (e.target.value == Quiz[questionIndex].options.correct) {
    corr++;
  }
};
let IsCorrect = () => {
  let options = document.querySelectorAll(".options button")
  options.forEach((e) => {
    e.addEventListener("click", check);
  });
};
let QuestionInsert = () => {
  QuesPlace.innerHTML = Quiz[questionIndex].question;

  optionsPlace[0].innerHTML = Quiz[questionIndex].options.a;
  optionsPlace[0].value = "a";
  optionsPlace[1].innerHTML = Quiz[questionIndex].options.b;
  optionsPlace[1].value = "b";
  optionsPlace[2].innerHTML = Quiz[questionIndex].options.c;
  optionsPlace[2].value = "c";
  optionsPlace[3].innerHTML = Quiz[questionIndex].options.d;
  optionsPlace[3].value = "d";
  diddisable();
  IsCorrect();
};
QuestionInsert();
let Answers = () => {
  let ans = document.createElement("div");
  for (let j = 0; j < Quiz.length; j++) {
    const element = Quiz[j].options.correct;
    ans.innerHTML =
      ans.innerHTML +
      `<h3 title='${Quiz[j].question}
      1 : ${Quiz[j].options.a}
      2 : ${Quiz[j].options.b}
      3 : ${Quiz[j].options.c}
      4 : ${Quiz[j].options.d}
      Correct : ${Quiz[j].options.correct}'>Answer of Q.No.${j + 1} : ${element}</h3>`;
  }
  controler.append(ans);
};
controler.hide();
let ShowResult = () => {
  Box.hide();
  controler.show();
  controler.innerHTML = "";
  let p = document.createElement("p");
  p.innerHTML = `You Got ${corr}/${Quiz.length} Marks`;
  controler.appendChild(p);
  let Start = document.createElement("button");
  Start.innerHTML = "Start Again";
  Start.classList.add("cp");
  controler.appendChild(Start);
  Answers();
  Start.addEventListener("click", () => {
    questionIndex = 0;
    corr = 0;
    Box.show();
    controler.hide();
    QuestionInsert();
    timer();
  });
};
nextBtn.addEventListener("click", () => {
  removeClass();
  if (questionIndex != Quiz.length - 1) {
    questionIndex++;
    QuestionInsert();
  } else {
    clearInterval(timerI);
    ShowResult();
  }
});

let disable = () => {
  document.querySelectorAll(".options button").forEach((e) => {
    e.setAttribute("disabled", "true");
  });
};

let timerI, Seconds;
let time = () => {
  document.querySelector(".Time h3").textContent = Seconds;
  if (Seconds <= 0) {
    ShowResult();
    clearInterval(timerI);
  } else {
    Seconds--;
  }
};
let timer = () => {
  Seconds = 120;
  timerI = setInterval(time, 1000);
};

timer();


let hack = {
    timer: "Seconds",
    Questions: "Quiz[questionIndex]",
    totalCorrect: "corr",
    Ans: "Quiz[questionIndex].options.correct"
}