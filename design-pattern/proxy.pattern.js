class Leader {
  receiveRequest(offer) {
    console.log(`Leader received request: ${offer}`);
  }
}

class Secretary {
  constructor() {
    this.leader = new Leader();
  }
  receiveRequest(offer) {
    this.leader.receiveRequest(offer);
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer;
  }
  applyFor(target) {
    target.receiveRequest(this.offer);
  }
}

const devs = new Developer('upto 5k usd');
devs.applyFor(new Secretary());