// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // My answer
  //     const strA = stringA
  //     .replace(/[^\w]/g, '')
  //     .toLowerCase()
  //     .split('')
  //     .sort()
  //     .join('');
  //   const strB = stringB
  //     .replace(/[^\w]/g, '')
  //     .toLowerCase()
  //     .split('')
  //     .sort()
  //     .join('');
  //   return strA === strB;

  // Character maps (see helper function too)
  //   const aCharMap = buildCharMap(stringA);
  //   const bCharMap = buildCharMap(stringB);
  //   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
  //     return false;
  //   }
  //   for (let char in aCharMap) {
  //     if (aCharMap[char] !== bCharMap[char]) {
  //       return false;
  //     }
  //   }
  //   return true;

  // Stephens version of my answer with sort and helper function
  return cleanString(stringA) === cleanString(stringB);
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
