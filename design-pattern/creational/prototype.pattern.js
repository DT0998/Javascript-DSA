class OnlinePlayer {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  clone() {
    return new OnlinePlayer(this.name, this.level);
  }
}

OnlinePlayer.prototype.stats = {
  health: 0,
};

const prototypePattern = new OnlinePlayer("Ally", 1);

// shadow copy of stats object make sure that stats object is not shared between instances
const ally = Object.assign(
  Object.create(OnlinePlayer.prototype),
  prototypePattern
);
// Shallow copy of stats object
ally.stats = Object.assign({}, prototypePattern.stats);
ally.stats.health = 100;
const visa = Object.assign(
  Object.create(OnlinePlayer.prototype),
  prototypePattern
);
// Shallow copy of stats object
visa.stats = Object.assign({}, prototypePattern.stats);
ally.name = "Ally";
ally.level = 1;
visa.name = "Visa";
visa.level = 2;

console.log(`Ally:: ${ally.name} ${ally.stats.health} ${ally.level}`);
console.log(`Visa:: ${visa.name} ${visa.stats.health} ${visa.level}`);
