# Solution 1.1
def remove_char(str):
    newS = ''
    for index in range(len(str)):
        if (index != 0 and index != len(str) - 1):
            newS += str[index]

    return newS

# Solution 1.2


def remove_char(str):
    newS = ''
    for index in range(len(str)):
        if (not(index == 0 or index == len(str) - 1)):
            newS += str[index]

    return newS


# Solution 2.1
def remove_char(str):
    return str[1: len(str) - 1]

# Solution 2.2


def remove_char(str): return str[1: - 1]

# Solution 3.1


def remove_char(str):
    new_list = list(str)
    new_list.pop()
    new_list.pop(0)
    return ''.join(new_list)


print(remove_char('eloquent'))
print(remove_char('country'))
print(remove_char('person'))
print(remove_char('place'))
