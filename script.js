const block = document.querySelector(".block");

const heart = [
"0000110000110000",
"0001111001111000",
"0011111111111100",
"0111111111111110",
"0111111111111110",
"0111111111111110",
"0011111111111100",
"0001111111111000",
"0000111111110000",
"0000011111100000",
"0000001111000000",
"0000000110000000"
];

const size = 22;

heart.forEach((row, i) => {
  [...row].forEach((col, j) => {
    if (col === "1") {
      const div = document.createElement("div");

      div.style.top = i * size + "px";
      div.style.left = j * size + "px";

      block.appendChild(div);
    }
  });
});
