#დავალება 1
#and ოპერატორი ლოგიკური ოპერატორია, რომელსაც იყენებენ პროგრამირების ენებში ლოგიკური გამოთვლების შესასრულებლად.
#მისი მთავარი მიზანია ორი ან მეტი ლოგიკური პირობის ერთად გაწვდვა და განსაზღვროს, არის თუ არა ყველა პირობა ჭეშმარიტი.

#როგორ მუშაობს and ოპერატორი:
#ყველა პირობა უნდა იყოს ჭეშმარიტი: and ოპერატორი მიიჩნევს მთლიანი გამოხატულება ჭეშმარიტად მხოლოდ იმ შემთხვევაში, თუ ყველა მისი ოპერანდი ჭეშმარიტია.
#თუ ერთი ან მეტი პირობა ყალბია, მთლიანად გამოხატულება იქნებ რეიტინგული.

#მაგალითები:

#true and true – ჭეშმარიტია, რადგან ორივე პირობა ჭეშმარიტია.
#true and false – ყალბია, რადგან ერთი პირობა ჭეშმარიტია, ხოლო მეორე ყალბია.
#false and false – ყალბია, რადგან ორივე პირობა ყალბია.
#(5 > 3) and (8 < 10) – ჭეშმარიტია, რადგან ორივე პირობა ჭეშმარიტია (5 მეტი არის 3-ზე და 8 ნაკლებია 10-ზე).
#(7 == 7) and (4 != 4) – ყალბია, რადგან პირველი პირობა ჭეშმარიტია, ხოლო მეორე ყალბია (4 არ არის განსხვავებული 4-სგან).

#მაგალითი:
# Python-ის მაგალითი:
x = 10
y = 5
z = 15

# ყოველგვარ დონეზე, ყველა პირობა უნდა იყოს ჭეშმარიტი:
if (x > y) and (z > x):
    print("ყველა პირობა ჭეშმარიტია!")
else:
    print("ერთი ან მეტი პირობა არ არის ჭეშმარიტი.")


#დავალება 2
#or ოპერატორი ლოგიკური ოპერატორია, რომელსაც იყენებენ პროგრამირების ენებში ლოგიკური გამოთვლების შესასრულებლად.
#მისი მთავარი მიზანია ორი ან მეტი ლოგიკური პირობის ერთი ჭეშმარიტების შემთხვევაში მთლიანი გამოხატულება ჩათვალოს ჭეშმარიტად.

#როგორ მუშაობს or ოპერატორი:
#ერთი ჭეშმარიტია საკმარისი: or ოპერატორი მიიჩნევს მთლიანი გამოხატულება ჭეშმარიტად იმ შემთხვევაში, თუ ერთ-ერთი პირობა მაინც ჭეშმარიტია.
#თუ არცერთი პირობა არ არის ჭეშმარიტი, მთლიანად გამოხატულება იქნება ყალბური.

#მაგალითები:

#true or true – ჭეშმარიტია, რადგან ორივე პირობა ჭეშმარიტია.
#true or false – ჭეშმარიტია, რადგან ერთი პირობა ჭეშმარიტია, ხოლო მეორე ყალბია.
#false or false – ყალბია, რადგან ორივე პირობა ყალბია.
#(5 > 3) or (8 > 10) – ჭეშმარიტია, რადგან პირველი პირობა ჭეშმარიტია (5 მეტი არის 3-ზე), მიუხედავად იმისა, რომ მეორე პირობა ყალბია.
#(7 == 7) or (4 != 4) – ჭეშმარიტია, რადგან პირველი პირობა ჭეშმარიტია, მიუხედავად იმისა, რომ მეორე პირობა ყალბია.

# Python-ის მაგალითი:
x = 4
y = 10
z = 15

# იმ შემთხვევაში, თუ ერთი პირობა მაინც ჭეშმარიტია:
if (x < y) or (z < y):
    print("ერთ-ერთი პირობა მაინც ჭეშმარიტია!")
else:
    print("ყველა პირობა ყალბია.")


#დავალება 3
#1.print((True or False) and (True and True))

True or False = True
True and True = True
True and True = True
შედეგი: True

2.#print((True or False) and (False or False))

True or False = True
False or False = False
True and False = False
შედეგი: False

3.#print((False and True) or (True and False))

False and True = False
True and False = False
False or False = False
შედეგი: False

4.#
print((False or False) and (True or True))

False or False = False
True or True = True
False and True = False
შედეგი: False

5.#print((True and True) or (False and True))

True and True = True
False and True = False
True or False = True
შედეგი: True

6.#print((False or True) and (True and False))

False or True = True
True and False = False
True and False = False
შედეგი:False

7.#print((False and False) or (False or True))

False and False = False
False or True = True
False or True = True
შედეგი: True

8.#print((True or False) and (False or True))

True or False = True
False or True = True
True and True = True
შედეგი: True

9.#print((True and False) or (True and False))

True and False = False
True and False = False
False or False = False
შედეგი: False

10.#print((True and True) or (True and False))

True and True = True
True and False = False
True or False = True
შედეგი:True

11.#print((False and False) or (True or bool(5)))

False and False = False
#True or bool(5) (ბოლტ(5) ყოველთვის ჭეშმარიტია, რადგან არ არის 0) = True
False or True = True
შედეგი: True

12.#print((True or True) and (False and False))

True or True = True
False and False = False
True and False = False
შედეგი: False

13.#print((False or True) and (True or True))

False or True = True
True or True = True
True and True = True
შედეგი: True

14.#print((True and False) or (True and False))

True and False = False
True and False = False
False or False = False
შედეგი: False


#გაწვდილი კოდი:
print(True)      # (True or False) and (True and True)
print(False)     # (True or False) and (False or False)
print(False)     # (False and True) or (True and False)
print(False)     # (False or False) and (True or True)
print(True)      # (True and True) or (False and True)
print(False)     # (False or True) and (True and False)
print(True)      # (False and False) or (False or True)
print(True)      # (True or False) and (False or True)
print(False)     # (True and False) or (True and False)
print(True)      # (True and True) or (True and False)
print(True)      # (False and False) or (True or bool(5))
print(False)     # (True or True) and (False and False)
print(True)      # (False or True) and (True or True)
print(False)     # (True and False) or (True and False)



#დავალება 4
#true:
#and ლოგიკური ოპერატორის 10 მაგალითი
True and True

შედეგი: True
#ორივე პირობა ჭეშმარიტია.
False and True

შედეგი: False
#ერთ-ერთი პირობა ყალბია.
True and False

შედეგი: False
#ერთ-ერთი პირობა ყალბია.
False and False

შედეგი: False
#ორივე პირობა ყალბია.
(5 > 3) and (8 < 10)

შედეგი: True
#ორივე პირობა ჭეშმარიტია (5 მეტია 3-ზე და 8 ნაკლებია 10-ზე).
(10 == 10) and (2 != 3)

შედეგი: True
#ორივე პირობა ჭეშმარიტია (10 თანაბარია 10-ს და 2 არ არის თანაბარი 3-ს).
(7 > 5) and (4 < 6)

შედეგი: True
#ორივე პირობა ჭეშმარიტია (7 მეტია 5-ზე და 4 ნაკლებია 6-ზე).
(1 == 1) and (2 > 3)

შედეგი: False
#ერთი პირობა ჭეშმარიტია, ხოლო მეორე ყალბია.
(False and (5 > 3))

შედეგი: False
#პირველი პირობა ყალბია, მიუხედავად იმისა, რომ მეორე ჭეშმარიტია.
((10 < 20) and (15 == 15) and (7 > 8))

შედეგი: False
#ორი პირობა ჭეშმარიტია, მაგრამ მესამე ყალბია.

#or:
True or True

შედეგი: True
#ორივე პირობა ჭეშმარიტია.
False or True

შედეგი: True
#ერთ-ერთი პირობა ჭეშმარიტია.
True or False

შედეგი: True
#ერთ-ერთი პირობა ჭეშმარიტია.
False or False

შედეგი: False
#ორივე პირობა ყალბია.
(5 > 3) or (8 > 10)

შედეგი: True
#ერთი პირობა ჭეშმარიტია, მიუხედავად იმისა, რომ მეორე ყალბია.
(10 == 10) or (2 == 3)

შედეგი: True
#ერთი პირობა ჭეშმარიტია (10 თანაბარია 10-ს).
(7 < 5) or (4 > 3)

შედეგი: True
#ერთი პირობა ჭეშმარიტია (4 მეტია 3-ზე).
(1 != 1) or (2 < 3)

შედეგი: True
#ერთი პირობა ჭეშმარიტია, მიუხედავად იმისა, რომ პირველი ყალბია.
(False or (5 < 7))

შედეგი: True
#მეორე პირობა ჭეშმარიტია, მიუხედავად იმისა, რომ პირველი ყალბია.
((10 > 5) or (15 < 15) or (7 == 7))

შედეგი: True
#ორი პირობა ჭეშმარიტია (10 მეტია 5-ზე და 7 თანაბარია 7-ს), მიუხედავად იმისა, რომ ერთი ყალბია.