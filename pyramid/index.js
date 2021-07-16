// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4) (n * 2) - 1
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n, row = 0, level = '') {
  // Stephens recursion answer
  if (row === n) {
    return;
  }

  if (level.length === n * 2 - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((n * 2 - 1) / 2);
  let add;

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;

// need to study this one my broken example
//   const base = n * 2 - 1;
//   const center = Math.floor(base / 2);

//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let column = 0; column < base; column++) {
//       if (column < center && column >= row) {
//         stair += ' ';
//       } else if (column > center && row < column) {
//         stair += ' ';
//       } else if (column === center) {
//         stair += '#';
//       }
//     }
//     console.log(stair);
//   }

// Stephens answer - I was close with logic
//   const midpoint = Math.floor((n * 2 - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < n * 2 - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
