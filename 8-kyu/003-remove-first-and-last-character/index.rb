# Solution 1.1
def remove_char(s)
 s[1...-1]
end

# Solution 1.2
def remove_char(s)
 s[1..-2]
end

# Solution 2.1
def remove_char(s)
    new_s = s.split('')
    new_s.pop
    new_s.shift
    new_s.join
end

# Solution 3.1
def remove_char(s)
  s.gsub(/^\w|\w\b/, "")
end

# Solution 4.1
def remove_char(s)
    new_s = ''
    i = 1

    while i < s.length - 1
        new_s += s[i]
        i += 1
    end

    new_s
end

print(remove_char('eloquent'))
print(remove_char('country'))
print(remove_char('person'))
print(remove_char('place'))