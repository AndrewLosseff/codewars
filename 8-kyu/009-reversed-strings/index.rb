# Loop
def solution(str)
    answer = []
    chars = str.split("")
    for char in chars
        answer.unshift(char)
    end
    return answer.join("")
end

# Reverse
def solution(str)
    return str.split("").reverse().join("")
end

def solution(str)
    str.reverse
end

# Reduce
def solution(str)
    str.split("").reduce("") {|acc, cur| cur + acc}
end



print(solution('world'))