# Solution
def is_divisible(n,x,y)
  n % x == 0 && n % y == 0 ? true : false
end

# Solution 
def is_divisible(n,x,y)
  (n % x == 0) && (n % y == 0)
end

# Solution 
def is_divisible(n,x,y)
  (n * n) % (x * y) == 0
end

# Solution 
def is_divisible(n,x,y)
  (n % x + n % y).zero?
end

# Solution 
def is_divisible(n, *divisors)
  divisors.all? { |divisor| n % divisor == 0}
end



print(is_divisible(12, 4, 3))
print(is_divisible(12, 5, 3))