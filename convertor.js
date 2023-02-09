const rates = {
  USD: 0.3664,
  EUR: 0.3406,
  GBP: 0.3027,
  BYN: 1,
  UAH: 13.4638,
};

const convert = (belRub, currency) => {
  if (!rates[currency]) {
    return null;
  }

  return belRub * rates[currency];
};
