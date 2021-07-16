// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  // My answer
  //   let step = '';
  //   let space = '';
  //   for (let i = 0; i < n; i++) {
  //     step += '#';
  //     for (let j = 0; j < n - step.length; j++) {
  //       space += ' ';
  //     }
  //     console.log(step + space);
  //     space = '';
  //   }

  // Stephens 1st answer row and column pattern
  //   for (let row = 0; row < n; row++) {
  //     let stair = '';
  //     for (let column = 0; column < n; column++) {
  //       if (column <= row) {
  //         stair += '#';
  //       } else {
  //         stair += ' ';
  //       }
  //     }
  //     console.log(stair);
  //   }

  // Stephens recursion solution --adds row and stair argument to function
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  //   if (stair.length <= row) {
  //     stair += '#';
  //   } else {
  //     stair += ' ';
  //   }
  const add = stair.length <= row ? '#' : ' ';

  steps(n, row, stair + add);
}

module.exports = steps;
