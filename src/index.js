// Nytek gallery
// import Entry from "./entry.js";
// firefox is being a bitch, just gonna hard-code it
class Entry {
  constructor(
    name,
    description,
    img = "https://cdn.discordapp.com/attachments/907359457695113227/920512728953651200/unknown.png",
    col
  ) {
    this.img = img;
    this.name = name;
    this.description = description;
    this.col = col;
  }

  render() {
    const main = document.getElementById("main");
    this.el = document.createElement("div");
    this.el.classList.add("entry");
    this.elTitle = document.createElement("b");
    this.elTitle.style.color = this.col;
    this.elDesc = document.createElement("span");
    this.elDesc.style.color = this.col;
    this.br1 = document.createElement("br");
    this.br2 = document.createElement("br");
    this.el.appendChild(this.elTitle);
    this.el.appendChild(this.br1);
    this.el.appendChild(this.br2);
    this.el.appendChild(this.elDesc);
    this.el.childNodes[0].textContent = this.name;
    this.el.childNodes[3].textContent = this.description;
    this.el.style.backgroundImage = `url("${this.img}")`;
    main.appendChild(this.el);
    console.log(this.el.childNodes);
  }
}
const entries = [];
// const test = new Entry("test", "test");
// test.render();
// Functions
const generateRandomText = () =>
  (randomElement.textContent = randomText[randNumber(0, randomText.length)]);
const randNumber = (min, max) => Math.floor(Math.random() * max) + min;
const newEntry = (t, d, i, o = "white") => entries.push(new Entry(t, d, i, o));

// Variables
const randomText = [
  "Sing like dick",
  "Welcom to a secret corporation.",
  "Fortnite = Garbo!",
  "All of this tsuff is subpar",
  "1v1 ME",
  "Nycrite and theki made this",
  "With p5.js and javascritp canvas!",
  "FARTINGSHART2021",
  "Happy new year!",
  "Bird up",
  "Word up",
  "Nytek Gallery",
  "You have a 7% chance of seeing this",
  "You will not see this.",
];
const randomElement = document.getElementById("random");

generateRandomText();
newEntry("I'm ready to play.", "I'm ready to pleady to play.");
newEntry("NFT thing", "aka Fraud Simulator");
newEntry("Overlap", "AAAHHH overlap");
newEntry("Imag", "I lov imag", "https://qquq7.csb.app/src/Bikongye.png", "red");
newEntry("Funky Color", "Aaahh", undefined, "blue");
entries.forEach((element) => element.render());
