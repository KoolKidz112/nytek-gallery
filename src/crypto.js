function generateNFT() {
  var randomstring = require("randomstring");
  // Make potential NFT name
  const name = [
    "Hoylepunk #1",
    "Hoylepunk #2",
    "Hoylepunk #3",
    "Hoylepunk #4",
    "baZOOKa #1",
    "baZOOKa #2",
    "baZOOKa #3",
    "baZOOKa #4",
    "Russian Spy"
  ];
  // Name-Generator 1375413573871984 thousan
  var nftname = name[Math.floor(Math.random() * name.length)];
  // Every NFT need a hash bro!
  var hash = randomstring.generate(30);
  // Set owner to none
  var price = Math.floor(Math.random() * 11);

  document.getElementById("name").innerHTML = nftname;
  document.getElementById("hash").innerHTML = hash;
  document.getElementById("price").innerHTML = price;
}
// YOU ARE FUCKING KIDDING ME
// I FORGOT TO SAVE
// I FIXED SO MUCH SHTI
// GOD
// FUCKING
// DAMMIT
