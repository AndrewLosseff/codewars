array1 = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
]

# Loop
def countSheeps array
    amount = 0
    for sheep in array
        if (sheep == true)
            amount += 1
        end
    end
    return amount
end

# Count
def countSheeps array
    array.count(true)
end

# Map
def countSheeps array
    array.map{ |sheep| sheep ? sheep : nil }.compact.length
end

# Select
def countSheeps array
    array.select{ |sheep| sheep == true }.length
end

# Reducer
def countSheeps array
    array.reduce(0) {|acc, cur| cur.nil? || !cur ? acc : acc  + 1}
end

print(countSheeps(array1))