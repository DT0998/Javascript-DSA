class OnlinePlayer {
  constructor(builder) {
    this.name = builder.name;
    this.level = builder.level;
    this.health = builder.health;
  }
  toString() {
    let player = `Player:\n`;
    player += `Name: ${this.name}\n`;
    player += `Level: ${this.level}\n`;
    player += `Health: ${this.health}\n`;
    return player;
  }
}

class OnlinePlayerBuilder {
  constructor() {
    this.name = "";
    this.level = 0;
    this.health = 0;
  }
  withLevel(level) {
    this.level = level;
    return this;
  }
  withHealth(health) {
    this.health = health;
    return this;
  }
  withName(name) {
    this.name = name;
    return this;
  }
  build() {
    return new OnlinePlayer(this);
  }
}

const builderPattern = new OnlinePlayerBuilder();

const ally = builderPattern
  .withName("Ally")
  .withLevel(1)
  .withHealth(100)
  .build();

console.log(ally.toString());

const visa = builderPattern
  .withName("Visa")
  .withLevel(2)
  .withHealth(100)
  .build();

console.log(visa.toString());
