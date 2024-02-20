// asbtract class
class PaymentProcess {
  pay(amount) {}
}
class VisaPaymentProcess extends PaymentProcess {
  constructor(cardNumber, expiryDate, cvv) {
    super();
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
  }
  pay(amount) {
    console.log(
      `Paying ${amount} USD with Visa card number ${this.cardNumber}`
    );
  }
}

class MomoPaymentProcess extends PaymentProcess {
  constructor(phoneNumber) {
    super();
    this.phoneNumber = phoneNumber;
  }
  pay(amount) {
    console.log(`Paying ${amount} VND with Momo account ${this.phoneNumber}`);
  }
}

class MemberRegistration {
  constructor(paymentProcess) {
    this.paymentProcess = paymentProcess;
  }
  register() {
    const amount = 100;
    this.paymentProcess.pay(amount);
    console.log(`Registering for Youtube membership!`);
  }
}

// create visa payment
const visaPaymentProcessor = new VisaPaymentProcess(
  "123456789",
  "12/23",
  "123"
);
const membershipVisa = new MemberRegistration(visaPaymentProcessor);
membershipVisa.register();

// create momo payment
const momoPaymentProcessor = new MomoPaymentProcess("0987654321");
const membershipMomo = new MemberRegistration(momoPaymentProcessor);
membershipMomo.register();
