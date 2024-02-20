// Tốt hơn: Sử dụng dependency injection để đảo ngược phụ thuộc
class LowLevel {
  getInfo() {
    return "Low level information";
  }
}

class HighLevel {
  constructor(lowLevel) {
    this.lowLevel = lowLevel;
  }

  displayInfo() {
    return this.lowLevel.getInfo();
  }
}

const lowLevel = new LowLevel();
const highLevel = new HighLevel(lowLevel);
console.log(highLevel.displayInfo()); // Output: Low level information
