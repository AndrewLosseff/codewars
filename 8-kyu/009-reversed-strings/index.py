from functools import reduce

# Slicing


def solution(str):
    return str[::-1]

# Loop


def solution(str):
    answer = ''
    for char in str:
        answer = char + answer
    return answer

# Reverse


def solution(str):
    answer = list(str)
    answer.reverse()
    return ''.join(answer)


def solution(str):
    return ''.join(reversed(str))

# Recursion


def solution(str):
    return solution(str[1:]) + str[0] if len(str) != 0 else str

# Reduce
# add import => from functools import reduce


def solution(str):
    return reduce(lambda acc, cur: cur + acc, str)


print(solution('world'))
