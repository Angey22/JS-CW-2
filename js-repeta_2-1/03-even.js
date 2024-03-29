// ! Видео - 0:58:10...1:13:00

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве (задача).
 */
// Исходные данные, массив "numbers" со значениями:
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// Выполняем задачу:

// 1-й вариант решения:
// 1. Создаем переменную для выполнения операции суммирования и задаем ей начальное значение = "0".
let total = 0;

// 2. Создаем цикл "for" для перебора массива
for (let i = 0; i < numbers.length; i += 1) {
    // 3. На каждой итерации цыкла проверяем элемент массива на четность
  if (numbers[i] % 2 === 0) {
      // 4. Четное значение добавляем в переменную
    total += numbers[i];
    }
}

// 5. Итоговую сумму всех четных значений - выводим в консоль
console.log('Сумма четных значений массива (1-й вариант) = ', total);


// 2-й вариант решения:
// 1. Создаем переменную для выполнения операции суммирования и задаем ей начальное значение = "0".
let total2 = 0;
// 2. Создаем цикл "for" для перебора массива
for (let i = 0; i < numbers.length; i += 1) {
  const number = numbers[i]; // Создаем локальную переменную "number" для упрощения читабельности кода

    // 3. На каждой итерации цыкла проверяем элемент массива на четность
  if (number % 2 === 0) {
      // 4. Четное значение добавляем в переменную
    total2 += number;
    }
}

// 5. Итоговую сумму всех четных значений - выводим в консоль
console.log('Сумма четных значений массива (2-й вариант) = ', total2);


// 3-й вариант решения:
// 1. Создаем переменную для выполнения операции суммирования и задаем ей начальное значение = "0".
let total3 = 0;

// 2. Создаем цикл "for...of" для перебора массива
for (const number of numbers) {
   // 3. На каждой итерации цыкла проверяем элемент массива на четность
  if (number % 2 === 0) {
      // 4. Четное значение добавляем в переменную
    total3 += number;
    }
}
// 5. Итоговую сумму всех четных значений - выводим в консоль
console.log('Сумма четных значений массива (3-й вариант) = ', total3);


// 4-й вариант решения:
// 1. Создаем переменную для выполнения операции суммирования и задаем ей начальное значение = "0".
let total4 = 0;

// 2. Создаем цикл "for...of" для перебора массива
for (const number of numbers) {
   // 3. На каждой итерации цыкла проверяем элемент массива на четность
  // В данном случае используется логика - "от обратного", если значение не четное - то пропускаем его.
  if (number % 2 !== 0) {
    console.log('Эту итерацию нужно пропустить, т.к. значение - "нечетное" -> ', number);
    continue;
  }
  
    // 4. Четное значение добавляем в переменную
    total4 += number;
}
// 5. Итоговую сумму всех четных значений - выводим в консоль
console.log('Сумма четных значений массива (4-й вариант) = ', total4);