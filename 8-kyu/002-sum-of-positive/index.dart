// Solution 1

int positiveSum(List<int> arr) {
  var reducer = (int accumulator, int current) =>
      accumulator + (current > 0 ? current : 0);
  return arr.fold(0, reducer);
}

// Solution 1.1

import "dart:math";

int positiveSum(List<int> arr) {
  return arr.fold(
      0, (int accumulator, int current) => accumulator + max(current, 0));
}

// Solution 1.2

int positiveSum(List<int> arr) {
  return arr
      .where((number) => number > 0)
      .fold(0, (accumulator, current) => accumulator + current);
}

// Solution 2

int positiveSum(List<int> arr) {
  int sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Solution 2.1

int positiveSum(List<int> arr) {
  int sum = 0;
  arr.forEach((int number) => number > 0 ? (sum += number) : 0);
  return sum;
}

main() {
  print(positiveSum([1, -2, 3, 4, 5]));
  print(positiveSum([]));
  print(positiveSum([-1, -2, -3, -4, -5]));
}
