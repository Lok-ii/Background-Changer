let colors = [
  "#F7CAC9",
  "#F4CCCC",
  "#EAD1DC",
  "#D9EAD3",
  "#D0EAD2",
  "#FAD02E",
  "#FAE1DD",
  "#FFE4E1",
  "#F5B7B1",
  "#F2D7D5",
  "#E6E6FA",
  "#F5CBAA",
  "#FFEBCD",
  "#FFF0F5",
  "#FAFAD2",
  "#E0FFFF",
  "#98FB98",
  "#FFDAB9",
  "#FFDEAD",
  "#FFE4B5",
  "#FFD700",
  "#FFFAF0",
  "#F0FFF0",
  "#FFF5EE",
  "#FFF8DC",
  "#FFFAFA",
  "#FAEBD7",
  "#FFEFD5",
  "#FFE4C4",
  "#FFE4E1",
];

const images = [
  "https://wallpapercave.com/wp/wp2555917.jpg",
  "https://wallpaperaccess.com/full/427859.jpg",
  "https://wallpaperaccess.com/full/427873.jpg",
  "https://wallpaperaccess.com/full/427916.jpg",
  "https://wallpaperaccess.com/full/427924.jpg",
  "https://wallpaperaccess.com/full/427927.jpg",
  "https://wallpaperaccess.com/full/427934.jpg",
  "https://wallpaperaccess.com/full/427959.jpg",
  "https://wallpaperaccess.com/full/81246.jpg",
  "https://wallpaperaccess.com/full/17536.jpg",
];

let colorButton = document.querySelector(".color");
let imageButton = document.querySelector(".image");
let reset = document.querySelector(".reset");

colorButton.addEventListener("click", (event) => {
  let color = Math.round(Math.random() * 30);
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = colors[color];
});

function mouseDown(button) {
  button.addEventListener("mousedown", (event) => {
    button.style.transform = "Scale(1.2)";
  });
}

function mouseUp(button) {
  button.addEventListener("mouseup", (event) => {
    button.style.transform = "Scale(1)";
  });
}
mouseDown(colorButton);
mouseUp(colorButton);

imageButton.addEventListener("click", () => {
  let image = Math.floor(Math.random() * 10);
  document.body.style.backgroundColor = "none";
  document.body.style.backgroundImage = `url(${images[image]})`;
});

mouseDown(imageButton);
mouseUp(imageButton);

reset.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  document.body.style.backgroundImage = "none";
});

mouseDown(reset);
mouseUp(reset);