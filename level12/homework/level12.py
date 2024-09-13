#დავალება 2
#string არის მონაცემთა ტიპები
#integer არის ციფრებთა ტიპები
#float არის წილადებთა ტიპები

#დავალება 3
#წაიკითხე შეცდომის შეტყობინება ყურადღებით. ეს ხშირად გაწვდოს კონკრეტულ ინფორმაციას იმის შესახებ, რა იწვევს პრობლემას.

#დავალება 4

# 1
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name

# 2
str1 = "გამარჯობა"
str2 = "მსოფლიო"
result = str1 + " " + str2
print(result)  # "გამარჯობა მსოფლიო"

# 3
#variable = "რა"
#additional_text = "გქვია შენ?"
#result = "ბიჭო" + " " + variable + " " + additional_text
#print(result)  # "ამ წუთში კითხვა რა არის ეს?"

# 4
part1 = "Hello"
part2 = "World"
result = part1 + " " + part2  # კონკატინაცია

print(result)  # გამოიტანს: Hello World

# 5
part1 = "Hello"
part2 = "World"
result = "".join([part1, " ", part2])  # str.join() მეთოდის გამოყენება

print(result)  # გამოიტანს: Hello World

#დავალება 5
# მომხმარებლისგან მონაცემების მიღება
user_input = input("გთხოვთ, მოაწვდეთ ინფორმაცია: ")

# მონაცემების გასაჩვენებლად
print("მომხმარებლის მიერ შეყვანილი ინფორმაცია:", user_input)