//! Видео - 1:24:20...1:27:35

/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

//! Код скрипта (из предыдущего занятия) подлежащего преобразованию в функцию (см. - '05-find-smallest-number.js'):
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('Наименьшее число в массиве: ', smallestNumber);


//! Код функции:
const findSmallesNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }

  return smallestNumber;
};

// Вызов функции "findSmallesNumber", через прямое обращение к ней "console.log()".
console.log(findSmallesNumber([3, 8, 12, -2, 15])); // => -2
console.log('------------------------------------------------');

console.log(findSmallesNumber([100, 54, 8, 12, 47])); // => 8
console.log('------------------------------------------------');

console.log(findSmallesNumber([7, 21, 84, 15, 4])); // => 4