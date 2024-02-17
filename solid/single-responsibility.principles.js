// A module should be responsible for only one actor. As a consequence, it has only one reason to change
class List {
  constructor() {
    this.list = [];
  }
  addItems(item) {
    this.list.push(item);
  }
}

class 