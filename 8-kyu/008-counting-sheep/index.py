from functools import reduce
array1 = [True,  True,  True,  False,
          True,  True,  True,  True,
          True,  False, True,  False,
          True,  False, False, True,
          True,  True,  True,  True,
          False, False, True,  True]

# Loop


def count_sheeps(arrayOfSheeps):
    amount = 0
    for sheep in arrayOfSheeps:
        if (sheep == True):
            amount += 1
    return amount

# Count


def count_sheeps(arrayOfSheeps):
    return arrayOfSheeps.count(True)

# List Comprehension


def count_sheeps(arrayOfSheeps):
    return len([sheep for sheep in arrayOfSheeps if sheep])

# Sum & Filter


def count_sheeps(arrayOfSheeps):
    return sum(filter(lambda sheep: sheep == True, arrayOfSheeps))


# # Reducer
# # add import => from functools import reduce
def count_sheeps(arrayOfSheeps): return reduce(
    lambda acc, cur: acc + 1 if cur == True else acc, arrayOfSheeps)


print(count_sheeps(array1))
