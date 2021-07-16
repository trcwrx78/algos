// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // My first answer 😂
  //   const arr = str.split('');
  //   const acc = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     acc.push(arr[arr.length - (1 + i)]);
  //   }

  //   return acc.join('');

  // 1. Reverse function 💥
  //   return str.split('').reverse().join('');

  // 2. For Of loop
  //   let reversed = '';

  //   for (let character of str) {
  //     reversed = character + reversed;
  //   }

  //   return reversed;

  // 3. Reduce
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
