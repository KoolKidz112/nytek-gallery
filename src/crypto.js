const randString = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);
const name = [
  "Hoylepunk #1",
  "Hoylepunk #2",
  "Hoylepunk #3",
  "Hoylepunk #4",
  "baZOOKa #1",
  "baZOOKa #2",
  "baZOOKa #3",
  "baZOOKa #4",
  "Russian Spy",
];

class NFT {
  constructor() {
    this.name = name[Math.floor(Math.random() * name.length)];
    this.hash = randString();
    this.price = Math.floor(Math.random() * 11);
  }

  render() {
    document.getElementById("name").innerHTML = nftname;
    document.getElementById("hash").innerHTML = hash;
    document.getElementById("price").innerHTML = price;
  }
}

const generateNFT = () => new NFT().render();
