let Counter = 0;
let high = 0;
let hight = localStorage.getItem("score");
let Min = document.querySelector(".min");
let Sec = document.querySelector(".sec");
document.querySelector(".points").innerHTML = Counter;
let buttons = document.querySelectorAll(".controler button");
let wait = async (e = 1000) => {
  return new Promise((res, rej) => {
    setTimeout((e) => {
      res();
    }, e);
  });
};

let clean = (e) => {
  buttons.forEach((e) => {
    e.innerHTML = "";
  });
};
let check = (e) => {
  let em = true;
  for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    if (element.innerHTML == "") {
      return;
    } else {
      em = false;
    }
  }
  if (!em) {
    clean();
  }
};
let color = (b) => {
  buttons.forEach((e) => {
    e.setAttribute("class", b);
  });
};
let Insert = async (e) => {
  let RandomNum = Math.floor(Math.random() * 25);
  if (buttons[RandomNum].innerHTML == "") {
    let face = document.createElement("div");
    face.classList.add("face");
    face.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>';

    buttons[RandomNum].appendChild(face);
    face.addEventListener("click", () => {
      Counter++;
      if (Counter >= Counter && Counter >= localStorage.getItem("score")) {
        high = Counter;
        localStorage.setItem("score", high);
      }
      document.querySelector(".points").innerHTML = Counter;
      buttons[RandomNum].innerHTML = "";
    });
    await wait(900);
    buttons[RandomNum].innerHTML = "";
  } else {
    Insert();
  }
};
color("eee");
document
  .querySelector(".btns .btn:last-child")
  .addEventListener("click", (e) => {
    document.querySelector(".btn").disabled = false;
    color("eee");
    clean();
    clearInterval(ti);
    clearInterval(stop);
    document.querySelector(".hi").innerHTML = localStorage.getItem("score");
  });
let showFace = (e) => {
  check();
  Insert();
};

let Inserter = (e) => {
  showFace();
};
let ti;
let timer;
let time = (e) => {
  timer = 70;
  ti = setInterval(() => {
    timer--;
    let min = Math.floor(timer / 60);
    let sec = Math.floor(timer % 60);
    Min.innerHTML = min;
    Sec.innerHTML = sec;
    if (timer == 0) {
      clearInterval(ti);
      clearInterval(stop);
      color("eee");
      document.querySelector(".hi").innerHTML = localStorage.getItem("score");
      document.querySelector(".btn").disabled = false;
    }
  }, 1000);
};
let stop;
document.querySelector(".btn").addEventListener("click", (e) => {
  document.querySelector(".btn").disabled = true;
  Counter = 0;
  document.querySelector(".points").innerHTML = Counter;
  color("white");
  time();
  stop = setInterval(async () => {
    Inserter();
  }, Math.random() * 2000);
});

window.addEventListener("load", (e) => {
  document.querySelector(".hi").innerHTML = localStorage.getItem("score");
});


let hack = {
    "Alert": "This hack works when Game is running",
    'Score' : 'Counter = value',
    'Time' : 'timer = value (in seconds)',
}