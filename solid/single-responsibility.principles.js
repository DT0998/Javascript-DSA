// A module should be responsible for only one actor. As a consequence, it has only one reason to change
class Order {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }
}
class OrderManager {
  constructor() {
    this.order = null;
  }
  addOrder(id, item) {
    const order = new Order(id, item);
    this.order = order;
  }
  getOrder() {
    return order;
  }
  sendMail() {
    const sendMailOrder = new SendMailOrder();
    sendMailOrder.sendMailOrder(this.order);
  }
}
class SendMailOrder {
  sendMailOrder(order) {
    console.log("Mail sent", order);
  }
}
