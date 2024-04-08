class RoundRobin {
  constructor() {
    //  check if instance already exists
    if (RoundRobin.instance) {
      return RoundRobin.instance;
    }
    RoundRobin.instance = this;
    this.servers = [];
    this.index = 0;
  }
  addServer(server) {
    this.servers.push(server);
  }
  getNextServer() {
    if (!this.servers.length) {
      throw new Error("No server available");
    }
    const server = this.servers[this.index];
    //   modulus
    this.index = (this.index + 1) % this.servers.length;
    return server;
  }
}

const loadBalance = new RoundRobin();
const loadBalance1 = new RoundRobin();
console.log("compare", loadBalance === loadBalance1); // true

loadBalance.addServer("server 01");
loadBalance.addServer("server 02");
loadBalance.addServer("server 03");

console.log(loadBalance.getNextServer()); // server 01
console.log(loadBalance.getNextServer()); // server 02
console.log(loadBalance.getNextServer()); // server 03
console.log(loadBalance.getNextServer()); // server 01
console.log(loadBalance.getNextServer()); // server 02




