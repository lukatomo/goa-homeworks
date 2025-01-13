def sum_of_two_numbers(num1, num2):
    return num1 + num2

result = sum_of_two_numbers(5, 7)
print(result)  # Output: 12



def find_maximum(numbers):
    # დავაყენებთ პირველ ელემენტს მაქსიმუმად
    max_value = numbers[0]
    
    # გავივლით ჩამონათვალზე და შევადარებთ თითოეულ ელემენტს
    for num in numbers[1:]:
        if num > max_value:
            max_value = num
    
    return max_value

numbers = [10, 25, 15, 30, 5]
result = find_maximum(numbers)
print(result)  # შედეგი: 30



def welcome_user(name):
    print(f"Welcome {name}!")

welcome_user("Nino")  # ბეჭდავს: Welcome Nino!



def greet():
    print("Hello!")

def greet(name):  # 'name' არის პარამეტრი
    print(f"Hello, {name}!")

greet("John")  # 'John' არის არგუმენტი

def greet():  # 'def' შეიმუშავებს ფუნქციას
    print("Hello!")

def greet(name):  # ეს არის კოდის ბლოკი
    print(f"Hello, {name}!")  # ეს არის კოდის ბლოკის შიგნით


# მოკლედ:

# ფუნქცია: კოდის ორგანიზებული ნაწილი, რომელიც ასრულებს გარკვეულ ამოცანას.

# პარამეტრი: ცვლადი, რომელიც ფუნქციას გადაეცემა მის შიგნით სამუშაოდ.

# არგუმენტი: მონაცემი, რომელიც ფუნქციას გადაეცემა ფუნქციის გამოძახების დროს.

# def: კვანძის სიტყვა, რომელიც განსაზღვრავს ფუნქციას Python-ში.

# Keyword: სიტყვები, რომლებიც Python-ში უკვე განსაზღვრული აქვთ გარკვეული ფუნქციონალისთვის (მაგ: def, if).

# Code block: კოდის ჯგუფი, რომელიც დაკავშირებულია და ახდენს ერთობლივ მოქმედებას (მაგ: ფუნქცია, ციკლი).