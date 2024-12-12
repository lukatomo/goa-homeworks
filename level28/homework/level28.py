for i in range(1, 11):
    print(i)



for i in range(1, 21):
    if i % 2 == 0:  # თუ რიცხვი ლუწია (სუფთა იყოფა 2-ზე)
        print(i)



i = 10
while i >= 1:
    print(i)
    i -= 1  # რიცხვის შემცირება 1-ით



import random

# გენერირება შემთხვევითი რიცხვის 1-დან 10-მდე
random_number = random.randint(1, 10)

# მომხმარებლისგან შესატყობინებელი
while True:
    guess = int(input("გთხოვთ, გამოიცნოთ რიცხვი 1-დან 10-მდე: "))
    
    if guess == random_number:
        print("მართლა! თქვენ სწორად გამოიცანით.")
        break  # გამოსვლა ციკლიდან, თუ მომხმარებელი სწორი პასუხი მისცა
    else:
        print("მცდარი პასუხი. სცადეთ კიდევ.")



# მომხმარებლისგან ქულის მიღება
score = int(input("შეიყვანეთ სტუდენტის ქულა: "))

# შეფასების სისტემის განსახორციელებლად if-elif-else
if 90 <= score <= 100:
    print("A")
elif 80 <= score <= 89:
    print("B")
elif 70 <= score <= 79:
    print("C")
elif 60 <= score <= 69:
    print("D")
else:
    print("F")




# მომხმარებლისგან რიცხვის მიღება
number = int(input("შეიყვანეთ რიცხვი: "))

# ლუწი თუ კენტი რიცხვის განსაზღვრა
if number % 2 == 0:
    print("რიცხვი არის ლუწი")
else:
    print("რიცხვი არის კენტი")





