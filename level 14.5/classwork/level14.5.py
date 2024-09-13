# Float, int და string ერთად
my_float = 3.14
my_int = 42
my_string = "Hello, World!"

print("Float value:", my_float)
print("Integer value:", my_int)
print("String value:", my_string)







# ცვლადების შეყვანა
my_int = 42
my_float = 3.14
my_string = "Hello"

# type() ფუნქციის გამოყენება და შედეგების დაბეჭდვა
print(type(my_int))    # int ტიპის ცვლადი
print(type(my_float))  # float ტიპის ცვლადი
print(type(my_string)) # str ტიპის ცვლადი

print(type(my_int))    # ისევ int
print(type(my_float))  # ისევ float
print(type(my_string)) # ისევ str

print(type(my_int))    # კიდევ ერთხელ int
print(type(my_float))  # კიდევ ერთხელ float
print(type(my_string)) # კიდევ ერთხელ str



























# მომხმარებლისგან ორი ცვლადის მიღება
first_variable = input("გთხოვთ, შეიტანოთ პირველი ცვლადი: ")
second_variable = input("გთხოვთ, შეიტანოთ მეორე ცვლადი: ")

# ცვლადების ინტეჯერად გადაყვანა
first_variable_int = int(first_variable)
second_variable_int = int(second_variable)

# ორი ცვლადის ჯამის გამოთვლა
sum_of_variables = first_variable_int + second_variable_int

# შედეგის დაბეჭდვა
print("ორივე ცვლადის ჯამი არის:", sum_of_variables)
