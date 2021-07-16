// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //   const reversedStr = str.split('').reverse().join('');
  // Another way to reverse str
  //   const reversedStr = str.split('').reduce((reversed, current)=> current + reversed, '')

  //   return str === reversedStr;

  // .every method not necessarily the best option but loops through and compares first and last

  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
