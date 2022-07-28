import Chef from './chef.jpg';

function setHeader() {
  const HEADER = document.createElement("header");

  const TITLE = document.createElement('h1');
  TITLE.id = "title";
  TITLE.textContent = "Crafted Bites";

  const NAVBAR = document.createElement('div');
  NAVBAR.id = "navbar";

  const HOME_BUTTON = document.createElement("button");
  HOME_BUTTON.id = "homeButton";
  HOME_BUTTON.textContent = "Home";

  const MENU_BUTTON = document.createElement("button");
  MENU_BUTTON.id = "menuButton";
  MENU_BUTTON.textContent = "Menu";

  const CONTACT_BUTTON = document.createElement("button");
  CONTACT_BUTTON.id = "contactButton";
  CONTACT_BUTTON.textContent = "Contact";

  NAVBAR.append(HOME_BUTTON, MENU_BUTTON, CONTACT_BUTTON);

  HEADER.appendChild(TITLE);
  HEADER.appendChild(NAVBAR);

  return HEADER;
}

export default function setMain() {
  let MAIN = document.createElement('main');

  if (document.querySelector('main')) {
    MAIN = document.querySelector('main');
  }

  const CHEF = document.createElement('img');
  CHEF.id = "chef";
  CHEF.src = Chef;
  CHEF.alt = "chef";

  const INFO = document.createElement("p");
  INFO.id = "info";
  INFO.textContent = "Est. 2003";

  MAIN.appendChild(CHEF);
  MAIN.appendChild(INFO);

  return MAIN
}

export function buildWebsite() {
  const BODY = document.querySelector('body');

  const CONTENT = document.createElement('div');
  CONTENT.id = "content";
  CONTENT.append(setHeader(), setMain());

  return BODY.appendChild(CONTENT);
}