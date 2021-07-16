// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // My answer
  //   const strArr = str.split(' ');
  //   const strMap = strArr
  //     .map((letter) => {
  //       let capLetter = letter.split('');
  //       capLetter[0] = capLetter[0].toUpperCase();
  //       return capLetter.join('');
  //     })
  //     .join(' ');

  //   return strMap;

  // Stephens first answer
  //   const words = [];

  //   for (let word of str.split(' ')) {
  //     words.push(word[0].toUpperCase() + word.slice(1));
  //   }

  //   return words.join(' ');

  // Stephens second answer
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;
