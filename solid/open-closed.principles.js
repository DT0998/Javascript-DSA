// Tốt hơn: Sử dụng kế thừa hoặc dependency injection để mở rộng chức năng
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
}

class Subtractor extends Calculator {
  constructor() {
    super();
  }

  calculate(a, b) {
    return a - b;
  }
}
