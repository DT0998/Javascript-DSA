// Tốt hơn: Sử dụng dependency injection để đảo ngược phụ thuộc
// 1. Các module cấp cao không nên phụ thuộc vào các modules cấp thấp. 
// Cả 2 nên phụ thuộc vào abstraction.
// 2. Interface (abstraction) không nên phụ thuộc vào chi tiết, mà ngược lại.
// ( Các class giao tiếp với nhau thông qua interface, 
// không phải thông qua implementation.)
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
