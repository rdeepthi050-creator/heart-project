const block = document.querySelector(".block");

const heartShape = [
  [0,3],[0,4],
  [1,2],[1,3],[1,4],[1,5],
  [2,1],[2,2],[2,3],[2,4],[2,5],[2,6],
  [3,2],[3,3],[3,4],[3,5],
  [4,3],[4,4]
];

const size = 40;

heartShape.forEach(([row, col], i) => {
  const div = document.createElement("div");

  div.style.top = row * size + "px";
  div.style.left = col * size + "px";

  div.style.animationDelay = (i * 0.05) + "s";

  block.appendChild(div);
});
