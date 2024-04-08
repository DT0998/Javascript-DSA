const serviceLogistics = (cargoVolume) => {
  switch (cargoVolume) {
    case "10":
      return {
        name: "truck 10",
        doors: 4,
        price: "100.000 VND",
      };
    case "20":
      return {
        name: "truck 20",
        doors: 16,
        price: "1.000.000 VND",
      };
  }
};

console.log("level 0", serviceLogistics("10"));

// simple factory
class ServiceLogistics {
  constructor(door = 6, price = "100.000 VND", name = "truck 10") {
    this.name = name;
    this.door = door;
    this.price = price;
  }
  static getTransport = (cargoVolume) => {
    switch (cargoVolume) {
      case "10":
        return new ServiceLogistics();
      case "20":
        return new ServiceLogistics(16, "1.000.000 VND", "truck 20");
    }
  };
}

console.log("level xxx", ServiceLogistics.getTransport("10"));
