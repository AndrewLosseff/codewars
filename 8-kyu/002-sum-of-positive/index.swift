// Solution 1
func sumOfPositives (_ numbers: [Int] ) -> Int {
    return numbers.reduce(0, {accumulator, current in accumulator + (current > 0 ? current : 0)})
}

// Solution 1.1
func sumOfPositives (_ numbers: [Int] ) -> Int {
    return numbers.filter{$0 > 0}.reduce(0, +)
}

// Solution 1.2
func sumOfPositives (_ numbers: [Int] ) -> Int {
    return numbers.reduce(0){$0 + max($1, 0)}
}

// Solution 2
func sumOfPositives (_ numbers: [Int] ) -> Int {
    var sum: Int = 0

    for number in numbers {
        if number > 0 {
            sum += number
        }
    }

    return sum
}

// Solution 2.1
func sumOfPositives (_ numbers: [Int] ) -> Int {
    var sum: Int = 0

    for number in numbers where number > 0 {
       sum += number
    }

    return sum
}

print(sumOfPositives([1,-2,3,4,5]))
print(sumOfPositives([]))
print(sumOfPositives([-1,-2,-3,-4,-5]))
