const valueInput = document.querySelector('.value-input');
const selectCurrency = document.querySelector('.select-currency');
const outputBlock = document.querySelector('.outputBlock');
// const buttonResult = document.querySelector('.button-result'); // тоже нужно закоментировать, если выводить результат без кнопки
const btnReset = document.querySelector('.button-reset');
outputBlock.innerHTML = 0;

// вывод конвертированных данных на экран при нажатии кнопки

// buttonResult.addEventListener('click', function () {
//   const belRub = Number(valueInput.value);
//   const corrency = selectCurrency.value;
//   const result = convert(belRub, corrency);
//   outputBlock.innerHTML = result.toFixed(2);
// });

// автоматический перерасчет при изменении валюты через селектор

selectCurrency.addEventListener('change', function () {
  const belRub = Number(valueInput.value);
  const currency = selectCurrency.value;
  const result = convert(belRub, currency);

  outputBlock.innerText = result.toFixed(2);
});

btnReset.addEventListener('click', () => {
  valueInput.value = null;
  outputBlock.innerHTML = 0;
});

// моментальное конвертирование без кнопки//

valueInput.addEventListener('input', function () {
  const belRub = Number(valueInput.value);
  const currency = selectCurrency.value;
  const result = convert(belRub, currency);

  outputBlock.innerText = result.toFixed(2);
});
