# Solution 1.1
def repeat_str(repeat, string):
    new_str = ''
    while repeat > 0:
        new_str += string
        repeat -= 1
    return new_str

# Solution 1.2


def repeat_str(repeat, string):
    new_str = ''
    for _ in range(repeat):
        new_str += string
    return new_str

# Solution 1.3


def repeat_str(repeat, string):
    new_str = []
    for _ in range(repeat):
        new_str.append(string)
    return "".join(new_str)

# Solution 2


def repeat_str(repeat, string):
    return string * repeat


# Solution 3
def repeat_str(repeat, string):
    return string if repeat == 1 else string + repeat_str(repeat - 1, string)


print(repeat_str(4, 'w'))
