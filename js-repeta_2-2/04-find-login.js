//! Видео - 0:59:35...1:20:20

/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */
// Смотри код скрипта из предыдущего занятия находящийся в файле "04-find-login.js"

// Исходный массив - база данных
const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

//! 1-й вариант реализации функции
// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден.`;
//     }
//   }
//   return `Пользователь ${loginToFind} не найден.`;
// };

//! 2-й вариант реализации функции
const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;
};

console.log(findLogin(logins, 'avocod3r'));
console.log('------------------------------------------------');

console.log(findLogin(logins, 'k1widab3st'));
console.log('------------------------------------------------');

console.log(findLogin(logins, 'jam4l'));
console.log('------------------------------------------------');

console.log(findLogin(logins, 'poly1scute'));