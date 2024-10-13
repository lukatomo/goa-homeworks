1
# მომხმარებლისგან ასაკების შეყვანა
age1 = int(input("შიყვანეთ პირველი ადამიანის ასაკი: "))
age2 = int(input("შიყვანეთ მეორე ადამიანის ასაკი: "))

# ასაკების შედარება და შედეგის დაბეჭდვა
is_older = age1 > age2
print(is_older)

2
# მომხმარებლისგან ასაკების შეყვანა
age1 = int(input("შიყვანეთ პირველი ადამიანის ასაკი: "))
age2 = int(input("შიყვანეთ მეორე ადამიანის ასაკი: "))

# ასაკების შედარება და შედეგის დაბეჭდვა
is_older = age1 > age2
print(is_older)

3
# მომხმარებლისგან სამი რიცხვის შეყვანა
number1 = float(input("შიყვანეთ პირველი რიცხვი: "))
number2 = float(input("შიყვანეთ მეორე რიცხვი: "))
number3 = float(input("შიყვანეთ მესამე რიცხვი: "))

# რიცხვების დადებითობის проверка და შედეგის დაბეჭდვა
all_positive = number1 > 0 and number2 > 0 and number3 > 0
print(all_positive)

4
# მომხმარებლისგან რიცხვის შეყვანა
number = float(input("შიყვანეთ რიცხვი: "))

# რიცხვის ნულის ტოლობაზე проверка და შედეგის დაბეჭდვა
is_zero_or_positive = number >= 0
print(is_zero_or_positive)

5
# მომხმარებლისგან პასუხის შეყვანა
answer = input("შიყვანეთ პასუხი (დიახ/არა): ")

# პასუხის შემოწმება და შედეგის დაბეჭდვა
is_yes = answer == "დიახ"
print(is_yes)

6
# მომხმარებლისგან სამი რიცხვის შეყვანა
number1 = float(input("შიყვანეთ პირველი რიცხვი: "))
number2 = float(input("შიყვანეთ მეორე რიცხვი: "))
number3 = float(input("შიყვანეთ მესამე რიცხვი: "))

# პირველი რიცხვის შედარება დანარჩენ ორ რიცხვთან
is_smallest = number1 < number2 and number1 < number3

# შედეგის დაბეჭდვა
print(is_smallest)
