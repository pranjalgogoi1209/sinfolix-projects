const btn = document.querySelector("button");
const img = document.querySelector("img");
const audio = document.querySelector("audio");
const span = document.querySelector("span");

btn.addEventListener("click", () => {
  img.setAttribute("src", "./images/animated-dice.gif");
  img.setAttribute("style", "width: 13vw;");
  audio.play();
  setTimeout(() => {
    const result = ~~(Math.random() * 6 + 1);
    img.setAttribute("src", `./images/dice-${result}.png`);
    img.setAttribute("style", "width: 11vw; padding: 0.7vw 1vw 0vw 1.1vw;");
    span.innerHTML = result;
  }, 800);
});
