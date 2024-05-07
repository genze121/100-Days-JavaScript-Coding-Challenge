//* ____________________________________________________
//* Programming Question : Simple Currency Converter.
//* ____________________________________________________

//? Write a function to convert an amount from one currency to another using static exchange rates.

//! Requirements

//? Write a function name convertCurrency that takes three parameters: amount, fromCurrency, toCurrency.

//? Use a fixed object to store exchange rates relative to a base currency (e.g., USD).
//? The function should return the converted amount in the target currency.
//? Handle conversion through USD as a base, meaning if converting from GBP to EUR, first convert GBP to USD, then USD to EUR.

const rates = {
  USD: 1, // Base Currency
  EUR: 0.9, // 1 USD = 0.9 EUR
  GBP: 0.8, // 1 USD = 0.8 EUR
  INR: 82 // 1 USD = 82 INR
};

function convertCurrency(amount, fromCurrency, toCurrency) {
  let amountInUSD = 0;
  if (fromCurrency !== "USD") {
    amountInUSD = amount / rates[fromCurrency];
  } else {
    amountInUSD = amount;
  }

  let convertedAmount = 0;
  if (toCurrency !== "USD") {
    convertedAmount = amountInUSD * rates[toCurrency];
  } else {
    convertedAmount = amount;
  }

  return convertedAmount;
}

console.log(convertCurrency(100, "GBP", "EUR"));
