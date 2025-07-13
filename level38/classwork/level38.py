# 1) ფუნქცია big_sentence: დიდი წინადადების დაბეჭდვა f-string-ით
def big_sentence(name, surname, age, color):
    print(f"My name is {name} {surname}, I am {age} years old and my favorite color is {color}.")

# 2) ფუნქცია check_lowercase: შეამოწმებს, არის თუ არა ტექსტი მთლიანად პატარა ასოებით
def check_lowercase(user_str):
    if user_str.islower():
        print(f"'{user_str}' is all lowercase.")   # 2.1) როცა ტექსტი სრულად პატარა ასოებითაა
    else:
        print(f"'{user_str}' is NOT all lowercase.")  # 2.2) თუ არის სხვა ასოები ან სიმბოლოები

# 3) ფუნქცია list_join: აერთიანებს სიის ელემენტებს სტრინგით str_to_join
def list_join(user_list, str_to_join):
    result = str_to_join.join(user_list)
    print(result)

# --- ფუნქციების გამოძახებები ---

# 4) big_sentence-ის გამოძახება არგუმენტებით
big_sentence("Luka", "Tomoshevski", 15, "blue")

print()  # 5) შედეგების გამიჯვნა

# 6) check_lowercase-ის გამოძახება 3 სხვადასხვა არგუმენტით
check_lowercase("hello")    # 6.1) სრულიად პატარა ასოები
check_lowercase("Hello")    # 6.2) არ არის პატარა ასოებით ყველა
check_lowercase("python3")  # 6.3) შეიცავს ციფრს, არა სრულად პატარა ასოებით

print()  # 7) კიდევ შედეგების გამიჯვნა

# 8) list_join-ის გამოძახება 3-ჯერ განსხვავებული არგუმენტებით
list_join(["apple", "banana", "cherry"], ", ")  # 8.1) ელემენტები შერეულია ", "
list_join(["2025", "07", "13"], "-")            # 8.2) თარიღის მსგავსი სტრინგების გაერთიანება
list_join(["a", "b", "c", "d"], "*")           # 8.3) სიმბოლოებით გაყოფა
