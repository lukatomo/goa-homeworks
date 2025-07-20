secret_number = 7

guess = int(input("გამოცნე რიცხვი 1-დან 10-მდე: "))

if guess == secret_number:
    print("გილოცავთ, თქვენ გამოიცანით!")
else:
    print("სამწუხაროდ, არასწორია. სცადეთ კიდევ.")