const valueInput = document.querySelector('.value-input');
const selectCurrency = document.querySelector('.select-currency');
const outputP = document.querySelector('.outputP');
const buttonRes = document.querySelector('.buttonRes'); // тоже нужно закоментировать, если выводить результат без кнопки

// вывод конвертированных данных на экран при нажатии кнопки

buttonRes.addEventListener('click', function () {
  const belRub = Number(valueInput.value);
  const corrency = selectCurrency.value;
  const result = convert(belRub, corrency);
  outputP.innerHTML = result.toFixed(2);
});

// автоматический перерасчет при изменении валюты через селектор

selectCurrency.addEventListener('change', function () {
  const belRub = Number(valueInput.value);
  const currency = selectCurrency.value;
  const result = convert(belRub, currency);

  outputP.innerText = result.toFixed(2);
});

// моментальное конвертирование без кнопки//

// valueInput.addEventListener('input', function () {
//   const belRub = Number(valueInput.value);
//   const currency = selectCurrency.value;
//   const result = convert(belRub, currency);

//   outputP.innerText = result.toFixed(2);;
// });
