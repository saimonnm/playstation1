document.addEventListener("DOMContentLoaded", (event) => {
  const repeatCount = 35;
  const container = document.getElementById("triangle-container-left");
  const container2 = document.getElementById("triangle-container-right");

  for (let i = 0; i < repeatCount; i++) {
    const newDivLeft = document.createElement("div");
    const newDivRight = document.createElement("div");
    newDivLeft.id = "triangle-repeat-left";
    newDivRight.id = "triangle-repeat-right";

    container.appendChild(newDivLeft);
    container2.appendChild(newDivRight);
  }
});

let powerOn = document.getElementById("open-circle");
powerOn.addEventListener("click", apri);

function apri() {
  console.log("entra");
  document.getElementById("open-circle").classList.toggle("open");
  document.getElementById("tekken-disc-container").classList.toggle("rotate-disc");
}
