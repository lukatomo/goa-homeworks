# ფუნქციის შექმნა
def multiply_numbers(num1, num2):
    return num1 * num2

# ფუნქციის გამოძახება 5-ჯერ განსხვავებული არგუმენტებით
result1 = multiply_numbers(2, 3)
result2 = multiply_numbers(4, 5)
result3 = multiply_numbers(6, 7)
result4 = multiply_numbers(8, 9)
result5 = multiply_numbers(10, 11)

# შედეგების გამოქვეყნება
print(result1)  # 6
print(result2)  # 20
print(result3)  # 42
print(result4)  # 72
print(result5)  # 110










# ფუნქციის შექმნა
def sum_or_multiply(num1, num2):
    if num1 > 50:
        print(num1 * num2)  # გამრავლება
    else:
        print(num1 + num2)  # დამატება

# ფუნქციის გამოძახება 3-ჯერ განსხვავებული არგუმენტებით
sum_or_multiply(60, 5)  # 60 * 5 = 300
sum_or_multiply(30, 20)  # 30 + 20 = 50
sum_or_multiply(75, 2)  # 75 * 2 = 150
