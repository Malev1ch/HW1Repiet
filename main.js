
// function factorialIterative(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// const number = 5;
// const factorial = factorialIterative(number);
// console.log(`Факториал ${number} равен ${factorial}`);
// factorialIterative(5)


// Рекурсия

// function factorialRecursive(n) {
//   if (n === 0 || n === 1) {
//     console.log(`Факториал ${n} равен 1`);
//     return 1;
//   } else {
//     const result = n * factorialRecursive(n - 1);
//     console.log(`Факториал ${n} равен ${result}`);
//     return result;
//   }
// }
// factorialRecursive(5);

// Рекурсия


// Вывод символов не являющихся цифрами

// const SearchSymbols = 'My name 457 is Alex'
// const regex = /\D/g;
// const result = SearchSymbols.match(regex);
// console.log(result);

// Вывод символов не являющихся цифрами


// Поиск пробельных символов
// const SearchSpaceSymbols = 'My name 457 is Alex';
// const regex = /\s/g;
// const result = SearchSpaceSymbols.match(regex);
// console.log(result);
// Поиск пробельных символов


// Поиск символов О
// function countChar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         count++;
//       }
//     }
//     return count;
//   }
//   console.log(countChar('loremipsumdolor', 'o'));
// Поиск символов О