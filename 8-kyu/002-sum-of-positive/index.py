# Solution 1
import functools


def positive_sum(arr):
    return functools.reduce(lambda accumulator, current: accumulator + (current if current > 0 else 0), arr, 0)

# Solution 2


def positive_sum(arr):
    sum = 0
    for number in arr:
        if number > 0:
            sum += number
    return sum

# Solution 2.1


def positive_sum(arr):
    return sum(number for number in arr if number > 0)


print(positive_sum([1, -2, 3, 4, 5]))
print(positive_sum([]))
print(positive_sum([-1, -2, -3, -4, -5]))
