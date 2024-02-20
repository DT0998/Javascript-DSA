class Car {
  constructor({
    name = "Lamborghini",
    doors = 2,
    price = 100000,
    customerInfo = {},
  }) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

// core factory class
class ServiceLogistics {
  transportClass = Car;
  getTransport = (customerInfo) => {
    return new this.transportClass(customerInfo);
  };
}

const carService = new ServiceLogistics();
console.log(
  "CarService::",
  carService.getTransport({
    customerInfo: { name: "John Doe", cargoVolume: "100 kg" },
  })
);

// cách 1
class Truck {
  constructor({
    name = "Ford",
    doors = 16,
    price = 200000,
    customerInfo = {},
  }) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

carService.transportClass = Truck;
console.log(
  "TruckService::",
  carService.getTransport({
    customerInfo: { name: "John eo", cargoVolume: "200 kg" },
  })
);

// cách 2
class TruckService extends ServiceLogistics {
  transportClass = Truck;
}

const truckService = new TruckService();
console.log(
  "TruckService::",
  truckService.getTransport({
    customerInfo: { name: "John eo 2", cargoVolume: "300 kg" },
  })
);