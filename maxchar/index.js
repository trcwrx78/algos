// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // My solution
  //   const chars = {};
  //   for (let char of str) {
  //     chars[char] = chars[char] + 1 || 1;
  //   }
  //   let maxChar = 0;
  //   let letter = '';
  //   for (let char in chars) {
  //     if (chars[char] > maxChar) {
  //       maxChar = chars[char];
  //       letter = char;
  //     }
  //   }
  //   return letter;

  // Stephen's predominantly the same as my solution
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
