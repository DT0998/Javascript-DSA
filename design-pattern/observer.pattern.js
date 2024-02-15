class Observer {
  constructor(name) {
    this.name = name;
  }
  updateStatus(location) {
    this.goToHelp(location);
  }
  goToHelp(location) {
    console.log(`${this.name} is going to help at ${JSON.stringify(location)}`);
  }
}

class Subject {
  constructor() {
    this.ObserverList = [];
  }
  addObserver(observer) {
    this.ObserverList.push(observer);
  }
  notify(location) {
    this.ObserverList.forEach((observer) => {
      observer.updateStatus(location);
    });
  }
}

const subject = new Subject();
const riki = new Observer('Riki');
const axe = new Observer('Axe');

subject.addObserver(riki);

subject.notify('Top Lane');