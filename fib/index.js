// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  //  My solution
  //   let arr = [0, 1];
  //   for (let i = 0; i <= n; i++) {
  //     arr.push(arr[i] + arr[i + 1]);
  //   }
  //   return arr[n];

  // Stephens iterative solution (Linear Runtime)
  //   const result = [0, 1];
  //   for (let i = 2; i <= n; i++) {
  //     const a = result[i - 1];
  //     const b = result[i - 2];
  //     result.push(a + b);
  //   }
  //   return result[n];

  // Recursive solution (Memorize this) (Time complexity is awful for this -Exponential runtime)
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;