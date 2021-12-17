// Nytek gallery
// import Entry from "./entry.js";
// firefox is being a bitch, just gonna hard-code it
class Entry {
  constructor(
    name,
    description,
    img = "https://cdn.discordapp.com/attachments/907359457695113227/920512728953651200/unknown.png",
    col,
    w,
    h
  ) {
    this.img = img;
    this.name = name;
    this.description = description;
    this.col = col;
    this.w = w;
    this.h = h;
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
  }
}
const entries = [];
// const test = new Entry("test", "test");
// test.render();
// Functions
const generateRandomText = () =>
  (randomElement.textContent = randomText[randNumber(0, randomText.length)]);
const randNumber = (min, max) => Math.floor(Math.random() * max) + min;
const newEntry = (t, d, i, o = "white", w = 400, h = 300) =>
  entries.push(new Entry(t, d, i, o, w.toString, h.toString));
const hide = (el, en) => {
  const frame = document.getElementById("app");
  el.classList.toggle("hidden");
  if (en) {
    // This doesn't work, fix it
    frame.style.width = en.w;
    frame.style.height = en.h;
  }
};

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
newEntry(
  "NFT Generator",
  "Also known as Fraud Machine",
  "./img/nftgenerator.png"
);
newEntry(
  "Fake AI",
  "Attempt at making an artifical AI",
  "./img/ai.png",
  "black",
  700,
  500
);
entries.forEach((item) => {
  item.render();
});
// Could use optimization
document.querySelectorAll(".entry").forEach((element, key) => {
  element.addEventListener("click", () =>
    hide(document.getElementById("blur"), entries[key])
  );
});
