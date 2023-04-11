// ! Видео - 0:01:05...0:42:35

/*
 * Функции:
 * - функциональные выражения;
 * - аргументы и параметры;
 * - возврат значения.
 */
console.groupCollapsed('Функции: функциональные выражения; аргументы и параметры; возврат значения.'); //! Log group name

// Объявляем функциональное выражение "add"
const add = function (x, y) {
  console.log('x =>', x);
  console.log('y =>', y);
  console.log('Выполянется функция add');

  return x + y;
};

// Присваиваем переменной "r1" значение обработанное функциональным выражением - "add(5, 3)".
const r1 = add(5, 3);
console.log('r1: ', r1);
console.log('------------------------------------------------');

// Присваиваем переменной "r2" значение обработанное функциональным выражением - "add(10, 15)".
const r2 = add(10, 15);
console.log('r2: ', r2);
console.log('------------------------------------------------');

// Присваиваем переменной "r3" значение обработанное функциональным выражением - "add(30, 50)".
const r3 = add(30, 50);
console.log('r3: ', r3);
console.log('------------------------------------------------');

// Объявляем функциональное выражение "fn"
const fn = function (value) {
  console.log(1);
  console.log(2);

  if (value < 50) {
    return 'Меньше чем 50';
  }

  return 'Больше чем 50';
};

console.log('Результат функции "fn(10)" =>', fn(10));
console.log('------------------------------------------------');

console.log('Результат функции "fn(1000)" =>', fn(1000));

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */
console.groupCollapsed('Стек вызовов - "Stack trace" и поиск ошибок'); //! Log group name

//! Стек вызовов
const fnA = function () {
  console.log('Выполняется функция fnA');
};

const fnB = function () {
  console.log('Выполняется функция fnB');
};

const fnC = function () {
  console.log('Выполняется функция fnC');
};

console.log('Лог перед вызовом функции fnA');

fnA();

console.log('Лог после вызова функции fnA');

console.log('Лог перед вызовом функции fnB');
fnB();
console.log('Лог после вызова функции fnB');

console.log('Лог перед вызовом функции fnC');
fnC();
console.log('Лог после вызова функции fnC');

console.log('------------------------------------------------');


//! Stack trace и поиск ошибок
const f_A = function () {
  console.log('Выполняется функция f_A');

  f_B();
};

const f_B = function () {
  console.log('Выполняется функция f_B');

  f_C();
};

const f_C = function () {
  console.log('Выполняется функция f_C');

  //! Специально вызываем ошибку, обращаясь к не объявленной переменной "value".
  // console.log(value);
  // Раскомментируй и смотри в консоли полный путь к месту возникновения ошибки, с учетом вложенности функцию одна в другую.
};

// Активируем функцию "f_A()", внутри которой вложена функция "f_В()", через которую активируется функция "f_С()".
f_A();


console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');