// Tốt hơn: Sử dụng kế thừa hoặc dependency injection để mở rộng chức năng
// Có thể thoải mái mở rộng 1 class, nhưng không được sửa đổi bên trong class đó 
// (open for extension but closed for modification).
class Calculator {
  constructor() {}

  calculate(a, b) {
    throw new Error("This method must be overridden");
  }
}

class Adder extends Calculator {
  constructor() {
    super();
  }

  calculate(a, b) {
    return a + b;
  }

  // Mở rộng chức năng
  add(a, b) {
    return this.calculate(a, b);
  }
}

class Subtractor extends Calculator {
  constructor() {
    super();
  }

  calculate(a, b) {
    return a - b;
  }

  // Mở rộng chức năng
  subtract(a, b) {
    return this.calculate(a, b);
  }
}


const adder = new Adder();
console.log(adder.add(3, 1)); // Output: 4