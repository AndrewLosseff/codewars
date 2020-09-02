# Loop
def find_smallest_int(arr):
    smallest = arr[0]
    for num in arr:
        if(num < smallest):
            smallest = num
    return smallest

# Sort


def find_smallest_int(arr):
    arr.sort()
    return arr[0]


def find_smallest_int(arr):
    return sorted(arr)[0]


# Reducer


def find_smallest_int(arr):
    return reduce(lambda acc, cur: acc if acc < cur else cur, arr)

# Min


def find_smallest_int(arr):
    return min(arr)


print(find_smallest_int([78, 56, -2, 12, 8, -33]))
