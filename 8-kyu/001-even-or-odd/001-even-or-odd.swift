func evenOrOdd(_ number:Int) -> String {
  if( number % 2 == 0) {
      return "Even"
  } else {
      return "Odd"
  }
}

func evenOrOdd(_ number:Int) -> String {
    return (number % 2 == 0) ? "Even" : "Odd"
}

func evenOrOdd(_ number:Int) -> String {
    return number.isMultiple(of: 2) ? "Even" : "Odd"
}

func evenOrOdd(_ number:Int) -> String {
    return ["Even", "Odd"][number % 2]
}

func evenOrOdd(_ number:Int) -> String {
    return number.isEven()
}

extension  Int {
    func isEven() -> String {
        return self.isMultiple(of: 2) ? "Even" : "Odd"
    }
}

print(evenOrOdd(12))