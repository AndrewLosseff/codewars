# Solution 1
def positive_sum(arr)
  arr.reduce(0) {|acc, cur| acc + (cur > 0 ? cur : 0)}
end

# Solution 1.1
def positive_sum(arr)
  arr.select{|num| num > 0}.reduce(0, :+)
end

Solution 1.2
def positive_sum(arr)
  arr.select{|num| num > 0}.sum
end

# Solution 1.3
def positive_sum(arr)
  arr.select(&:positive?).sum
end

# Solution 2
def positive_sum(arr)
    sum = 0
    arr.each do |num|
        if num > 0
            sum += num
        end
    end
    sum
end

# Solution 2.1
def positive_sum(arr)
    sum = 0
    arr.each do |num|
        if num.positive?
            sum += num
        end
    end
    sum
end

print(positive_sum([1,-2,3,4,5]))
print(positive_sum([]))
print(positive_sum([-1,-2,-3,-4,-5]))