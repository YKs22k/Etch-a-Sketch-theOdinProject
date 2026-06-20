// Select the main elements
const container = document.querySelector(".container");
const refresh = document.querySelector(".refresh");
const magic = document.querySelector(".magic");

// Create one box
function genAbox(size) {
  const boxLength = 960 / size;
  const box = document.createElement("div");

  box.classList.add("box");
  box.style.height = `${boxLength}px`;
  box.style.width = `${boxLength}px`;

  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  let opacity = 0;

  box.addEventListener("mouseenter", () => {
    if (opacity < 1) {
      opacity += 0.1;
    }

    box.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  });

  return box;
}

// Create the full grid
function boxGenerator(size) {
  container.textContent = "";

  for (let i = 0; i < size * size; i++) {
    const box = genAbox(size);
    container.appendChild(box);
  }
}

// Ask user for new grid size
function askForSize() {
  const input = prompt("Please enter a whole number from 1 - 100");
  const size = Number(input);

  if (Number.isInteger(size) && size >= 1 && size <= 100) {
    currentBox = box
    boxGenerator(currentBox);
  } else {
    alert("Please enter a whole number from 1 - 100");
  }
}

// Button events
magic.addEventListener("click", () => {
  askForSize();
});
let currentBox= 16;

refresh.addEventListener("click", () => {
    boxGenerator(currentBox);
});

// Initial grid
boxGenerator(16);