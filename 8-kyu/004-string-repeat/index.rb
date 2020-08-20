# Solution
def repeat_str (n, s)
    newString = ''
    n.times do |i|
        newString += s
    end
    newString
end

# Solution
def repeat_str (n, s)
    newString = ''
    for i in 1..n
        newString += s
    end
    newString
end


# Solution
def repeat_str (n, s)
  s * n
end

# Solution
def repeat_str (n, s)
    newString = ""
    n.times{newString += s}
    newString
end

# Solution
def repeat_str (n, s)
    n > 1 ? s + repeat_str(n - 1, s) : s
end

# Solution
def repeat_str (n, s)
  array = []
  n.times do |i|
    array.push(s)  
  end
  array.join
end

# Solution
def repeat_str (n, s)
  array = []
  n.times do |i|
    array << s 
  end
  array.join
end

# Solution
def repeat_str (n, s)
    Array.new(n+1).join(s)
end


print(repeat_str(5, 'Hello'))