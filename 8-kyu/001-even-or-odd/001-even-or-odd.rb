def even_or_odd(number)
    if number % 2 == 0
        return 'Even'
    else return 'Odd'
    end
end

 ['Even', 'Odd'][number % 2]

def even_or_odd(number)
   number.even? ? 'Even' : 'Odd'
end

print(even_or_odd(102))

