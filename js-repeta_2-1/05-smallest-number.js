/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии, что числа уникальные и не повторяются.
 */
// Алгоритм решения задачи: "Берем" первое значение из массива (записываем его в переменную) и последовательно сравниваем его (первое взятое значение) со всеми другими значениями в масиве. Если, в процессе сравнения, нам попадается меньшее число, чем то, что мы взяли изначально - то мы записываем в переменную его, и продолжаем процесс сравнения всех последующих значений из массив - уже с ним.

// Решение задачи:
// Исходный массив с набором значений
const numbers = [51, 18, 13, 24, 7, 85, 19];
console.log('Массив для поиска наименьшего значения => ',numbers); // Выводим наш массив в "лог"

// Создаем переменную и записываем в нее первое значение из массива
let smallestNumber = numbers[0];

// Создаем цыкл, с помощью которого перебираем все значения массива
for (const number of numbers) {
  // Создаем логическое условие, для сравнения и поиска с последующей записью - наименьшего значения
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
// Выводим в консоль итоговый результат работы скрипта
console.log('Наименьшее число в массиве: ', smallestNumber);


/*
 * Напиши скрипт поиска самого большего числа в массиве,
 * при условии, что числа уникальные и не повторяются.
 */
// Алгоритм такой-же как и в первом случае, только при переборе массива - перезаписываем самое большее число

// Решение задачи:
// Исходный массив с набором значений
const numbers2 = [47, 15, 33, 47, 76, 88, 99];
console.log('Массив для поиска наибольшего значения => ', numbers2); // Выводим наш массив в "лог"

// Создаем переменную и записываем в нее первое значение из массива
let smallestNumber2 = numbers2[0];

// Создаем цыкл, с помощью которого перебираем все значения массива
for (const number of numbers2) {
  // Создаем логическое условие, для сравнения и поиска с последующей записью - наибольшего значения
  if (number > smallestNumber2) {
    smallestNumber2 = number;
  }
}
// Выводим в консоль итоговый результат работы скрипта
console.log('Наибольшее число в массиве: ', smallestNumber2);
