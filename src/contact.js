import Map from './map.png';

export function showContact() {
  const MAIN = document.querySelector("main");

  const MAP = document.createElement("img");
  MAP.id = "map";
  MAP.src = Map;
  MAP.alt = "Map showing location of Cuddle Bugs";

  const ADDRESS = document.createElement("p");
  ADDRESS.textContent = "423 W Main St, La Porte, TX 77571";

  const PHONE = document.createElement("p");
  PHONE.textContent = "Call: (123) 456-7899";

  const EMAIL = document.createElement("p");
  EMAIL.textContent = "Email: craftedbites@gmail.com";

  MAIN.appendChild(MAP);
  MAIN.appendChild(ADDRESS);
  MAIN.appendChild(PHONE);
  MAIN.appendChild(EMAIL);
}