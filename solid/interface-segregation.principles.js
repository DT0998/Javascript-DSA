// Tốt hơn: Tách thành các giao diện nhỏ hơn, tùy chỉnh cho từng loại công việc
class Workable {
  work() {
    throw new Error("This method must be overridden");
  }
}

class Eatable {
  eat() {
    throw new Error("This method must be overridden");
  }
}

class Sleepable {
  sleep() {
    throw new Error("This method must be overridden");
  }
}
