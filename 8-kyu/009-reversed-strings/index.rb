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
    return str.reverse
end

# Reduce
def solution(str)
    return str.split("").reduce("") {|acc, cur| acc + cur}
end



print(solution('world'))