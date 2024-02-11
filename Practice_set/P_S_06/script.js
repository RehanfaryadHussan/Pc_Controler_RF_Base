let boxes = document.querySelectorAll(".controler button");
let turn = "X";
let changeTurn = () => {
  return (turn = turn == "O" ? "X" : "O");
};
let disabled;
let disablingBtns = () => {
  boxes.forEach((e) => {
    e.disabled = true;
  });
  disabled = true;
};
let disabledBtns = () => {
  boxes.forEach((e) => {
    e.disabled = false;
  });
  disabled = true;
};
let wait = (a = 1000) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, a);
  });
};
let checkText = async () => {
  let empty = false;
  for (let j = 0; j < boxes.length; j++) {
    const element = boxes[j];
    if (element.textContent == "") {
      empty = true;
      return;
    }
  }
  if (!empty) {
    await clean();
    disabledBtns()
  }
};
let autoInserter = (a = true) => {
  if (!a) {
    return;
  }
  disabledBtns();
  let Random = Math.floor(Math.random() * 9);
  let box = boxes[Random];
  if (box.textContent == "") {
    box.textContent = changeTurn();
  } else {
    autoInserter();
  }
  checkText();
};
autoInserter();

let clean = () => {
  disablingBtns();
  return new Promise((res, rej) => {
    setTimeout(() => {
      boxes.forEach((e) => {
        e.textContent = "";
        res();
      });
    }, 1000);
  });
};
let changeColor = (a, b, c, color) => {
  boxes[a].style.color = color;
  boxes[b].style.color = color;
  boxes[c].style.color = color;
};
let M_I = false;
let CheckWinner = async () => {
  let WinPosiblities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of WinPosiblities) {
    let [a, b, c] = line;
    let textline = [
      boxes[a].textContent,
      boxes[b].textContent,
      boxes[c].textContent,
    ];
    if (textline.every((aaa) => aaa === "X")) {
      changeColor(a, b, c, "Green");
      console.log("X");
      D_W_C_D(a, b, c);
    } else if (textline.every((aaa) => aaa === "O")) {
      changeColor(a, b, c, "Red");
      console.log("O");
      D_W_C_D(a, b, c);
    }
  }
};
let main;
let D_W_C_D = async (a, b, c) => {
  disablingBtns();
  await clean();
  disabledBtns();
  changeColor(a, b, c, "Black");
};
(async function main() {
  boxes.forEach((e) => {
    e.addEventListener("click", async () => {
      if (e.textContent == "") {
        e.textContent = changeTurn();
        disablingBtns();
        CheckWinner();
        await wait();
        autoInserter();

        CheckWinner();
      }
    });
  });
})();
