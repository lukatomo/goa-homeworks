def manual_capitalize(user_str):
    if not user_str:  # თუ სტრინგი ცარიელია, მაშინ უბრალოდ დავბრუნოთ ის
        return user_str
    return user_str[0].upper() + user_str[1:].lower()

# ფუნქციის გამოცდა სხვადასხვა არგუმენტებით
print(manual_capitalize("hello"))
print(manual_capitalize("WORLD"))
print(manual_capitalize("tHiS iS a TesT"))
print(manual_capitalize("pyThOn"))
print(manual_capitalize("jaVa"))










def lower_or_upper(user_str, choice):
    if choice == "upper":
        print(user_str.upper())
    elif choice == "lower":
        print(user_str.lower())
    else:
        print("wrong choice")

# ფუნქციის გამოცდა სხვადასხვა არგუმენტებით
lower_or_upper("hello", "upper")   # გამოიტანს "HELLO"
lower_or_upper("WORLD", "lower")   # გამოიტანს "world"
lower_or_upper("Python", "xyz")    # გამოიტანს "wrong choice"











def count_symbols(main_str, str_to_search):
  
    print(f"'{str_to_search}' გხვდება '{main_str}'-ში {'main_str_to_search'} -ჯერ.")

#გამოსაწვემელი ფუნქცია სხვადასხვა არგუმენტებით
count_symbols("hello world", "o")
count_symbols("banana", "a")
count_symbols("Python programming", "p")












def big_sentence(name, surname, age, academy, role):
    sentence = f"Hello, my name is {"luka"}, my surname is {"tomoshevski"}. I am {11} years old. I study at {"GOA"}, my role is {"student"}."
    print(sentence)

# ფუნქციის გამოცდა 5 არგუმენტით
big_sentence("John", "Doe", 25, "Harvard University", "Student")

#Hello, my name is John, my surname is Doe. I am 25 years old. I study at Harvard University, my role is Student.
