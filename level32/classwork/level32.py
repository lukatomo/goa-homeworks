# 1.  5 მაგალითი 1 რიცხვის გადაცემაზე (თანმიმდევრობა):
# პირველი რიცხვი გვეხმარება თუკი სია უნდა დავიწყოთ იმ ინდექსიდან.
# 2. 5 მაგალითი 2 რიცხვის გადაცემაზე (თანმიმდევრობა):
# პირველი რიცხვი არის სადაც უნდა დავიწყოთ, მეორე კი სადაც უნდა დავასრულოთ.
# 3. 5 მაგალითი 3 რიცხვის გადაცემაზე (თანმიმდევრობა):
# პირველი რიცხვი არის დაწყების ინდექსი, მეორე — დამთავრების, მესამე კი ნაბიჯი.
# მაგალითად, შეიქმნება სია:

# სია 20 ელემენტით
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

# 1 რიცხვით გადაცემა
print(numbers[5:])       # ელემენტები 5-დან ბოლოს
print(numbers[:5])       # ელემენტები თავიდან 5-მდე
print(numbers[10:15])    # ელემენტები 10-დან 15-მდე

# 2 რიცხვით გადაცემა
print(numbers[5:15])     # ელემენტები 5-დან 15-მდე
print(numbers[7:12])     # ელემენტები 7-დან 12-მდე

# 3 რიცხვით გადაცემა
print(numbers[::2])      # ელემენტები 2 ნაბიჯით (1, 3, 5, 7...)
print(numbers[1::3])     # ელემენტები 3 ნაბიჯით (2, 5, 8, 11...)
print(numbers[2:18:4])   # ელემენტები 4 ნაბიჯით (3, 7, 11, 15)
განმარტება:
# 5 მაგალითი 1 რიცხვის გადაცემაზე:
# numbers[5:] — მოაქვს ყველა ელემენტი 5-დან და ქვემოთ, ანუ ელემენტები იწყება ინდექსიდან 5 და გრძელდება ბოლომდე.
# numbers[:5] — მოაქვს ელემენტები 0-დან 5-მდე.
# numbers[10:15] — მოაქვს ელემენტები 10-დან 15-მდე (ინდექსი 15 არ შედის).
# 5 მაგალითი 2 რიცხვის გადაცემაზე:
# numbers[5:15] — მოაქვს ელემენტები 5-დან 15-მდე.
# numbers[7:12] — მოაქვს ელემენტები 7-დან 12-მდე.
# 5 მაგალითი 3 რიცხვის გადაცემაზე:
# numbers[::2] — მოაქვს ყველა მეორე ელემენტი (1, 3, 5, 7...).
# numbers[1::3] — იწყებს ელემენტით ინდექსით 1 და მოაქვს ყოველ მესამე ელემენტს (2, 5, 8...).
# numbers[2:18:4] — იწყებს ელემენტით ინდექსით 2 და აიღებს ყოველ მეოთხე ელემენტს (3, 7, 11...).