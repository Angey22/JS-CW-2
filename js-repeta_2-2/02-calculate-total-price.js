//! Видео - 0:49:50...0:57:25

/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

//! Код скрипта (из предыдущего занятия) подлежащего преобразованию в функцию:
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);

//! Код функции:
const calculateTotalPrice = function (items) {
  console.log('items внутри функции "calculateTotalPrice": ', items);

  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
};

// Вызов функции "calculateTotalPrice", через присвоение значения переменной "r1".
console.log('Вызов функции - через присвоение значения переменной "r1":');
const r1 = calculateTotalPrice([1, 2, 3]);
console.log(`Общая сумма покупок ${r1}`); // => 6
console.log('------------------------------------------------');

// Вызов функции "calculateTotalPrice", через прямое обращение к ней "console.log()".
console.log('Вызов функции - через прямое обращение к ней "console.log()":');

console.log('"calculateTotalPrice([5, 10, 15, 20])" =>', calculateTotalPrice([5, 10, 15, 20])); // => 50
console.log('------------------------------------------------');

console.log('"calculateTotalPrice([100, 200, 300])" =>', calculateTotalPrice([100, 200, 300])); // => 600
