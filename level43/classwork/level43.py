def print_arr(lst):
    for item in lst:
        print(item)

# ტესტირება
print_arr([1, 2, 3, 4, 5])









def check(s):
    return 4 < len(s) < 8

# მაგალითები
print(check("hello"))  # True (სიგრძე 5)
print(check("hi"))     # False (სიგრძე 2)
print(check("goodbye"))# True (სიგრძე 7)
print(check("excellent")) # False (სიგრძე 10)







def no_spaces(s):
    return s.replace(" ", "-")

# მაგალითები
print(no_spaces("hello world"))    # "hello-world"
print(no_spaces("python is fun"))  # "python-is-fun"
print(no_spaces("no spaces here")) # "no-spaces-here"




def Is_best_academy():
    print("Goal-Oriented-Academy")

# ფუნქციის გამოძახება
Is_best_academy()





def complex_calc(a, b):
    if a % 2 == 0:  # თუ პირველი არგუმენტი ლუწია
        return a + b
    else:  # თუ პირველი არგუმენტი კენტია
        return a * b

# ფუნქციის გამოძახება
result1 = complex_calc(4, 5)  # ლუწი + კენტი -> ჯამი
result2 = complex_calc(3, 5)  # კენტი * კენტი -> ნამრავლი

print(result1)  # 9
print(result2)  # 15
