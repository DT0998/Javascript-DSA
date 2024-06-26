// Tốt hơn: Tuân thủ nguyên tắc LSP bằng cách sử dụng giao diện thay vì kế thừa
// Trong một chương trình, các object của class con có thể thay thế class cha mà không làm thay đổi tính đúng đắn của chương trình
class Shape {
  area() {
    throw new Error("This method must be overridden");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  area() {
    return this.size * this.size;
  }
}
