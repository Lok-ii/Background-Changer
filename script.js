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
  "./src/wp2555917.jpg",
  "./src/427859.jpg",
  "./src/427873.jpg",
  "./src/427916.jpg",
  "./src/427924.jpg",
  "./src/427927.jpg",
  "./src/427934.jpg",
  "./src/427959.jpg",
  "./src/81246.jpg",
  "./src/17536.jpg",
];

let colorButton = document.querySelector(".color");
let imageButton = document.querySelector(".image");
let reset = document.querySelector(".reset");

colorButton.addEventListener("click", (event) => {
  let color = Math.round(Math.random() * 30);
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = colors[color];
  colorButton.style.transform = "Scale(1.2)"

  setTimeout(()=>{
    colorButton.style.transform = "scale(1)";
  }, 200);
});


imageButton.addEventListener("click", () => {
  let image = Math.floor(Math.random() * 10);
  document.body.style.backgroundColor = "none";
  document.body.style.backgroundImage = `url(${images[image]})`;imageButton.style.transform = "Scale(1.2)"

  setTimeout(()=>{
    imageButton.style.transform = "Scale(1)";
  }, 200);
});

reset.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  document.body.style.backgroundImage = "none";
  reset.style.transform = "Scale(1.2)"

  setTimeout(()=>{
    reset.style.transform = "Scale(1)";
  }, 200);
});
