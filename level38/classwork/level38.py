def big_sentence(name, surname, age, color):
    print(f"{name} {surname} is {age} years old and their favorite color is {color}.")

# ფუნქციის გამოძახება არგუმენტებით
big_sentence("თამარი", "მეფარიშვილი", 25, "წითელი")

# ამ კოდში:

# name, surname, age, და color გადასცემია როგორც არგუმენტები.
# f-string-ის გამოყენებით ვბეჭდავთ ინფორმაციას.
# თუ ამ კოდის ამოგზაურება მოახდენთ, მიიღებთ ასეთ გამოსავალს:

# pgsql
# Copy
# Edit
# თამარი მეფარიშვილი is 25 years old and their favorite color is წითელი.










def check_lowercase(user_str):
    if user_str.islower():
        print(f"'{user_str}' არის მთლიანად lowercase")
    else:
        print(f"'{user_str}' არ არის მთლიანად lowercase")

# ფუნქციის გამოძახება სხვადასხვა არგუმენტებით
check_lowercase("hello")
check_lowercase("Hello")
check_lowercase("HELLO")
# islower() მეთოდი დაადგენს, არის თუ არა სთრინგი მთლიანად lowercase ასოებით.
# თუ ფუნქცია True-ს დააბრუნებს, მაშინ მთელი სთრინგი არის lowercase, წინააღმდეგ შემთხვევაში - არა.
# ასე რომ, ამ კოდის შემთხვევაში, პირველი გამოძახება ("hello") უნდა დაბეჭდოს რომ ის lowercase-შია, მეორე ("Hello") და მესამე ("HELLO") კი რომ არ არის.





def list_join(user_list, str_to_join):
    result = str_to_join.join(user_list)
    print(result)

# ფუნქციის გამოძახება სხვადასხვა არგუმენტებით
list_join(["apple", "banana", "cherry"], ", ")
list_join(["2025", "02", "09"], "-")
list_join(["hello", "world"], "_")
# პროგრამის მუშაობის პრინციპი:

# join() მეთოდი აერთიანებს სიაში არსებულ ყველა ელემენტს, თითოეული ელემენტის შორის კი ცალკეულ სთრინგს (რომელიც გადაეცემა str_to_join-ად) უდგას.
# მაგალითად, პირველ გამოძახებაზე ("apple", "banana", "cherry") შორის იქნება ", ", ხოლო მეორე გამოძახებაზე ("2025", "02", "09") შორის იქნება "-".
# გამოძახების შედეგები შემდეგი იქნება:

# apple, banana, cherry
2025-02-09
# hello_world






































def element_remover(user_list, index_to_remove):
    # ელემენტის ამოშლა მოცემული ინდექსით
    if 0 <= index_to_remove < len(user_list):
        del user_list[index_to_remove]
        print(f"ახალი სია: {user_list}")
    else:
        print("ინდექსი არასწორია")

# ფუნქციის გამოძახება სხვადასხვა არგუმენტებით
element_remover(["apple", "banana", "cherry", "date"], 2)  # ამოიშლება "cherry"
element_remover([1, 2, 3, 4, 5], 0)  # ამოიშლება "1"
element_remover(["a", "b", "c", "d", "e"], 4)  # ამოიშლება "e"
# განმარტება:
# del user_list[index_to_remove] – ამ ლაინით ამოშლილი იქნება ელემენტი იმ ინდექსზე, რომელიც გადაეცემა ფუნქციას.
# თუ index_to_remove არ შეესაბამება სიის სიგრძეს, ცვლის ფუნქცია შეცდომის შეტყობინებას: "ინდექსი არასწორია".
# როცა გატარდება ფუნქცია, შედეგი იქნება:
# element_remover(["apple", "banana", "cherry", "date"], 2) – ამოიშლება "cherry", და ახალი სია იქნება: ["apple", "banana", "date"].
# element_remover([1, 2, 3, 4, 5], 0) – ამოიშლება "1", და ახალი სია იქნება: [2, 3, 4, 5].
# element_remover(["a", "b", "c", "d", "e"], 4) – ამოიშლება "e", და ახალი სია იქნება: ["a", "b", "c", "d"].