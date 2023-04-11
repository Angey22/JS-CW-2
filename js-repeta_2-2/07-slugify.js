//! Видео - 1:35:55...1:41:50

/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */
// Смотри код скрипта из предыдущего занятия находящийся в файле "08-slug.js"

const slugify = function (string) {
  //! 1-й вариант тела функции
  // const normalizedString = string.toLowerCase();
  // const words = normalizedString.split(' ');
  // const slug = words.join('-');
  // return slug;

  //! 2-й вариант тела функции
  return string.toLowerCase().split(' ').join('-');
};

// Вызов функции "slugify", через прямое обращение к ней "console.log()".
console.log(slugify('Top 10 benefits of React framework'));
console.log('------------------------------------------------');

console.log(slugify('Azure Static Web Apps are Awesome'));
console.log('------------------------------------------------');

console.log(slugify('Technical writing tips for non-native English speakers'));