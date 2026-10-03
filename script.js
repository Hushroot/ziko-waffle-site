function changeBG() {
    document.body.style.backgroundColor = "#2f3136"
}
function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  clockElement.textContent = now.toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);

const input = document.getElementById("favGame");
const output = document.getElementById("game");
input.addEventListener('input', (event) => {
    output.textContent = "nice pick: " + event.target.value;
});
