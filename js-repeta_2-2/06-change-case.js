//! Видео - 1:27:35...1:35:50

/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */
// Смотри код скрипта из предыдущего занятия находящийся в файле "07-change-register.js"

const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

// Вызов функции "changeCase", через прямое обращение к ней "console.log()".
console.log(changeCase('qweRTY')); // => QWErty
console.log('------------------------------------------------');

console.log(changeCase('mAnGo')); // => MaNgO
console.log('------------------------------------------------');

console.log(changeCase('AjAx')); // => aJaX