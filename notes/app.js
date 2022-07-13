"strict";

const penBtn = document.querySelector(".add-note");
const paperDiv = document.querySelector(".paper-div");
const board = document.querySelector(".board");
const addBtn = document.querySelector(".add-btn");
const textArea = document.querySelector(".paper");

function writeNote() {
  paperDiv.classList.toggle("paper-div-hidden");
}

let newDiv;
let deleteBtn;
let tickBtn;

function newNote() {
  newDiv = document.createElement("div");
  newDiv.classList.add("note");
  let text = textArea.value;

  newDiv.innerHTML = `<p class="note-text">${text}</p>`;

  const pTag = document.querySelector(".note-text");

  newDiv.style.background = color();
  newDiv.style.transform = rotate();

  if (text.length === 0 || text.replace(/\s/g, "").length == 0) return;
  board.appendChild(newDiv);
  textArea.value = "";

  paperDiv.classList.add("paper-div-hidden");

  //delete btn
  deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = `<i class="trash-icon fa-solid fa-trash"></i>`;
  newDiv.appendChild(deleteBtn);
  //click on delete btn
  deleteBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  //tick-btn
  tickBtn = document.createElement("button");
  tickBtn.classList.add("tick-btn");
  tickBtn.innerHTML = `<i class="tick fa-solid fa-check"></i>`;
  newDiv.appendChild(tickBtn);

  tickBtn.addEventListener("click", (e) => {
    const currentP = e.target.parentElement.parentElement.children[0];
    currentP.classList.toggle("line");
  });
}

penBtn.addEventListener("click", writeNote);

addBtn.addEventListener("click", newNote);

//click outside textbox
board.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("add-btn") &&
    !e.target.classList.contains("paper")
  )
    paperDiv.classList.add("paper-div-hidden");
});

let i = 0;
function color() {
  const colors = [
    "#aca7a883",
    "pink",
    "orange",
    "#72c6f7cb",
    "#f2f6f8cb",
    "#37f0b2fa",
    "#e9e793fa",
  ];
  if (i > colors.length - 1) {
    i = 0;
  }
  return colors[i++];
}

function rotate() {
  const noteRotate = [
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-10deg)",
    "rotate(-3deg)",
    "rotate(3deg)",
    "rotate(-5deg)",
  ];

  return noteRotate[Math.floor(Math.random() * noteRotate.length)];
}
