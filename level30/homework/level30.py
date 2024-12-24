#List (Python-ში) არის მონაცემთა სტრუქტურა, რომელიც შეიძლება შეიცავდეს სხვადასხვა ტიპის მონაცემებს და მათი თანმიმდევრულად ორგანიზებას. ის ძალიან ჰგავს სიის ჩამონათვალს, სადაც თითოეული ელემენტი ინდივიდუალურად შეიძლება იყოს წვდომადი.

# Indexing (ინდექსაცია) ნიშნავს, რომ თითოეული ელემენტისთვის მიანიჭებთ თავისი პოზიციას სიაში. Python-ში ინდექსები იწყება 0-დან, ანუ პირველი ელემენტი სიის მიხედვით იქნება 0 ინდექსზე, მეორე ელემენტი - 1 ინდექსზე და ასე შემდეგ.

# როგორ მუშაობს indexing:

# პოზიცია (ინდექსი): ინდექსი არის მთელი რიცხვი, რომელიც მიუთითებს ელემენტის პოზიციას სიაში. მაგალითად, თუ გვაქვს სიამ: my_list = [10, 20, 30, 40], პირველი ელემენტი (10) არის 0 ინდექსზე, მეორე (20) - 1 ინდექსზე და ასე შემდეგ.
# დამატებითი შესაძლებლობები: Python-ში შეიძლება negative indexing-იც გამოიყენოთ, რომელიც სიიდან უკან დაბრუნების საშუალებას იძლევა. მაგალითად, -1 ინდექსი მიანიშნებს უკან ბოლო ელემენტზე (აქ შემთხვევაში, ეს იქნება 40).
# მაგალითი:

# python
# Copy code
my_list = [10, 20, 30, 40]

print(my_list[0])  # შედეგი: 10
print(my_list[2])  # შედეგი: 30
print(my_list[-1])  # შედეგი: 40

# Create a list of five numbers
my_list = [5, 10, 15, 20, 25]

# Print the first, third, and last elements using indexing
print(my_list[0])  # First element (index 0)
print(my_list[2])  # Third element (index 2)
print(my_list[-1])  # Last element (index -1)

5
15
25

# 1
# # hello
# 3.14
# True
# [1, 2]
# (4, 5)
# None
# 10
# world
# 2.71
# False
# {'key': 'value'}
# 42
# Python
# [3, 4, 5]
# (6, 7)
# 99
# 100
# test
# 3
# {'a': 1}

# Create a list of 5 elements
my_list = [1, "apple", 3.14, True, "banana"]

# Change all of the elements using indexing
my_list[0] = 10          # Change the first element
my_list[1] = "orange"    # Change the second element
my_list[2] = 2.71        # Change the third element
my_list[3] = False       # Change the fourth element
my_list[4] = "grape"     # Change the fifth element

# Print the updated list
print(my_list)

[10, 'orange', 2.71, False, 'grape']
