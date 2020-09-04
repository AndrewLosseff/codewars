from functools import reduce
# Loop


def summation(num):
    sum = 0
    for n in range(0, num + 1):
        sum += n
    return sum

# Gauss Formula


def summation(num):
    return (num * (num + 1) / 2)


# reduce
# # add import => from functools import reduce
def do_sum(acc, cur): return acc + cur
def summation(num): return reduce(do_sum, range(1, num + 1))


# sum
def summation(num):
    return sum(range(1, num+1))

# recurtion


def summation(num):
    return num + summation(num - 1) if num != 0 else num


print(summation(8))
