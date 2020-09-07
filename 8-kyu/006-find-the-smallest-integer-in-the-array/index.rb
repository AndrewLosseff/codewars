# Min
def find_smallest_int(arr)
  arr.min
end

# Sort
def find_smallest_int(arr)
  arr.sort()[0]
end

# Loop 
def find_smallest_int(arr)
  smallest = arr[0]

  arr.each do |num|
    if num < smallest
        smallest = num
    end
  end

  smallest
end

# Reducer
def find_smallest_int(arr)
    arr.reduce() { |acc, cur| acc < cur ? acc : cur}
end


print(find_smallest_int([-78,56,-2,12,8]))