# Loop
def summation(num)
  sum = 0
  num.times do |n|
      sum += n+1
  end
  sum
end

# Gauss Formula
def summation(num)
  num * (num + 1) / 2
end

# reduce
def summation(num)
  (1..num).reduce(0, :+)
end

# inject
def summation(num)
  (1..num).inject { |acc, cur| acc + cur }
end

# sum
def summation(num)
  (1..num).sum
end

# recurtion
def summation(num)
  num != 0 ? num + summation(num - 1) : num
end

print(summation(8))