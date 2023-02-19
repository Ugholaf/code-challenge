// Using recursive process
var sum_to_n_a = function (n) {
  // your code here
  // check for invalid input
  if (n <= 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  } else {
    return n + sum_to_n_a(n - 1);
  }
};

// Using iterative process
var sum_to_n_b = function (n) {
  // your code here
  // check for invalid input
  if (n <= 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
};

// Using arithmetic progression
var sum_to_n_c = function (n) {
  // your code here
  // check for invalid input
  if (n <= 0) {
    return 0;
  }

  return (n * (1 + n)) / 2;
};
