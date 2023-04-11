//! Видео - 1:43:40...2:11:28

/*
 * Псевдомассив arguments и Array.from и ...
 */
console.groupCollapsed('Псевдомассив arguments и Array.from'); //! Log group name

//! Классический способ преобразования аргументов функции в массив с помощью метод "Array.from()".
const fn = function () {
  // Выводим в лог псевдомассив "arguments" функции "fn"
  console.log('Псевдомассив - "arguments" =>', arguments);

  // Преобразовываем в обычный массив псевод-массив "arguments" функции "fn". Используя для этого метод "Array.from()".
  const args = Array.from(arguments);
  console.log('Преобразованный в массив псевод-массив "args" =>', args);
};

fn();
console.log('------------------------------------------------');

fn(1, 2, 3);
console.log('------------------------------------------------');

fn(1, 2, 3, 4, 5);
console.log('------------------------------------------------');

fn(1, 2, 3, 4, 5, 6, 7);
console.log('------------------------------------------------');


//! Современный способ преобразования аргументов функции в массив с помощью метода "...(rest)".
const fn2 = function (...args2) {
  console.log('Преобразованный в массив псевод-массив "args2" =>', args2);
}

fn2(1, 2, 3);
console.log('------------------------------------------------');


//! Комбинированный способ преобразования аргументов функции в массив.
const fn3 = function (a, b, c, ...args) {
  console.log(`${a} ${b} ${c}`);
  console.log(args);
};

fn3('hello', 1, 2, 3);
console.log('------------------------------------------------');

fn3('aloha', 1, 2, 3, 4, 5);
console.log('------------------------------------------------');

fn3('hi', 1, 2, 3, 4, 5, 6, 7);
console.log('------------------------------------------------');

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */
console.groupCollapsed('Функция "add" для сложения произвольного количества аргументов (чисел)'); //! Log group name

const add = function (...args) {
  console.log('Массив "args" внутри тела функции =>', args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

console.log('Результат - "add(1, 2, 3)" =>', add(1, 2, 3));
console.log('------------------------------------------------');

console.log('Результат - "add(1, 2, 4, 5, 6)" =>', add(1, 2, 4, 5, 6));

console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');


/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */
console.groupCollapsed('Функция - "filterNumbers(array [, number1, ...])"'); //! Log group name

const filterNumbers = function (array, ...args) {
  console.log('array: ', array);
  console.log('args: ', args);
  const uniqueElements = [];

  for (const element of array) {
    if (args.includes(element)) {
      uniqueElements.push(element);

      console.log(`${element} есть везде!`);
    }
  }

  return uniqueElements;
};

// Вызов функции "filterNumbers", через прямое обращение к ней "console.log()".
console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // => [2, 3]
console.log('------------------------------------------------');

console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // => [30, 15]
console.log('------------------------------------------------');

console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // => [200]

console.groupEnd(); //! Log group end
console.log('-3----------------------------------------------');