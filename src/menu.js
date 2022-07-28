export function showMenu() {
  const MAIN = document.querySelector('main');

  const INFO = document.createElement("p");
  INFO.id = "info";
  INFO.textContent = "Coming soon!"

  MAIN.appendChild(INFO);
}