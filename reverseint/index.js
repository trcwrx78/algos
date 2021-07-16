// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // My 1st answer
  //   const str = n.toString();
  //   const arr = str.split('');

  //   if (arr[0] === '-') {
  //     arr.shift();
  //     return parseInt('-' + arr.reverse().join(''));
  //   } else {
  //     return parseInt(arr.reverse().join(''));
  //   }

  // 2nd try with Math.sign
  //   if (Math.sign(n) === 1) {
  //     return parseInt(n.toString().split('').reverse().join(''));
  //   } else if (Math.sign(n) === -1) {
  //     return parseInt('-' + n.toString().trim('-').split('').reverse().join(''));
  //   }

  //   return 0;

  // Stephens answer
  const reversed = n.toString().split('').reverse().join('');

  //   if (n < 0) {
  //     return parseInt(reversed) * -1;
  //   }
  //   return parseInt(reversed);

  // OR ...
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
