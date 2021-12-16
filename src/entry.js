export default class Entry {
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
  }
}
