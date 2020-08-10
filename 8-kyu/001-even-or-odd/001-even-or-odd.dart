String evenOrOdd(int number) {
  if (number % 2 == 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

String evenOrOdd(int number) {
  return (number % 2 == 0) ? "Even" : "Odd";
}

String evenOrOdd(int number) => (number % 2 == 0) ? "Even" : "Odd";

String evenOrOdd(int number) => number.isEven ? "Even" : "Odd";

String evenOrOdd(int number) {
  return ['Even', "Odd"][number % 2];
}

Map results = {true: "Even", false: "Odd"};

String evenOrOdd(int number) => results[number.isEven];

main() {
  print(evenOrOdd(4));
}
