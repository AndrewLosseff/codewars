# Delete
def no_space(x)
  x.delete(' ')
end

# gsub
def no_space(x)
  x.gsub(" ","")
end

# Regular expression
def no_space(x)
  x.gsub(/ /,"")
end

# Loop
def no_space(x)
    string = ""

    x.chars.each do |char|
        if char != " "
            string += char
        end
    end

    string
end 

# Split and join
def no_space(x)
  x.split(" ").join
end

# Filter aka select
def no_space(x)
    x.chars.select{ |char| char != ' ' }.join
end


#  Reducer
def no_space(x)
    x.split(" ").reduce("") { |acc, cur| acc + cur}
end



print(no_space('8 j 8   mBliB8g  imjB8B8  jl  B'));