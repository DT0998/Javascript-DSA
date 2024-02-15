function preOrderPrice(originalPrice) {
  return originalPrice * 0.4;
}

function defaultPrice(originalPrice) {
  return originalPrice;
}

const getPriceStrategy = {
  preOrder: preOrderPrice,
  default: defaultPrice,
};

function getPrice(originalPrice, typePromotion) {
  return getPriceStrategy[typePromotion](originalPrice);
}
