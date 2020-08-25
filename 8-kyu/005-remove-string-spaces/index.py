# replace
def no_space(x):
    return x.replace(" ", "")

# Split and join


def no_space(x):
    return "".join(x.split())

# Loop


def no_space(x):
    char = ''
    for i in range(len(x)):
        if x[i] != ' ':
            char = char + x[i]

    return char


def no_space(x):
    char = ""
    for i in x:
        if i.isspace() == False:
            char += i
    return char

# Filter


def no_space(x):
    return ''.join(filter(lambda char: not char == " ", x))


print(no_space('8 j 8   mBliB8g  imjB8B8  jl  B'))
