class MomoPaymentAdapter {
  constructor(momoPayment) {
    this.momoPayment = momoPayment;
  }
  payWithVisa(visaPayment) {
    const convertedPayment = this.convertedToVisaPayment(visaPayment);
    visaPayment.pay(convertedPayment);
  }
  convertedToVisaPayment(momoPayment) {
    const conversionRate = 23000;
    const visaAmount = momoPayment.amount / conversionRate;
    const visaPayment = {
      cardNumber: momoPayment.cardNumber,
      expiryDate: momoPayment.expiryDate,
      cvv: momoPayment.cvv,
      amount: visaAmount,
    };
    return visaPayment;
  }
}

// visaPayment
class VisaPayment {
  pay(payment) {
    console.log(
      `Paying ${payment.amount} with Visa card number ${payment.cardNumber}`
    );
  }
}

// momoPayment
class MomoPayment {
  constructor(cardNumber, expiryDate, cvv, amount) {
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
    this.amount = amount;
  }
}

const momoPayment = new MomoPayment("123456789", "12/23", "123", 1000000);

// momo-to-visa adapter
const momoAdapter = new MomoPaymentAdapter(momoPayment);

// visa payment
const visaPayment = new VisaPayment();

momoAdapter.payWithVisa(visaPayment);