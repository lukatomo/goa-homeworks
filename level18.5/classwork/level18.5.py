print(True or False)

შედეგი: #True (რადგან or ოპერატორი საჭიროებს ერთ-ერთOperand-ად True).

print(False and True or True)

შედეგი: #True (ორივე False and True არის False, მაგრამ False or True არის True).

print(5 > 3 and 2 < 4)

შედეგი: #True (ორივე შედარება ცხადია, რაც ნიშნავს, რომ ორივე არის True).
#გამოტანს False:

print(False or False and True)

შედეგი: #False (ჩემი გამოთვლილი შედეგი იქნება False, რადგან False and True არის False, ხოლო False or False არის False).

print(5 > 10 and 2 > 3)

შედეგი: #False (ორივე შედარება ცდილია, ამიტომ შედეგი არის False).

print(True and False or False)

შედეგი: #False (პირველ რიგში, True and False არის False, და შემდეგ False or False არის False).






















5 > 3 and 4 < 6
#შემდგომი შედეგი: True (5 მეტია 3-ზე და 4 ნაკლებია 6-ზე, ამიტომ ორივე შედარება არის True და and ოპერატორი აერთიანებს მათ True-ად).

7 == 7 or 8 != 9
#შემდგომი შედეგი: True (7 მოდის 7-ს და 8 არ ემთხვევა 9-ს, ამიტომ ერთი ან ორივე შედარება არის True, რაც ნიშნავს, რომ or ოპერატორი გამოიტანს True).
#გამოტანს False:

10 < 5 and 6 > 8
#შემდგომი შედეგი: False (10 ნაკლები არ არის 5-ზე და 6 მეტია 8-ზე, ამიტომ ორივე შედარება ცდილია და and ოპერატორი გამოიტანს False).

4 == 4 or 5 > 5
#შემდგომი შედეგი: true (4 ემთხვევა 4-ს, მაგრამ 5 არ არის მეტი 5-ზე. or ოპერატორი აერთიანებს True და true, მაგრამ საბოლოო შედეგი იქნება true, რადგან ეს გამოთვლა თვითონ არ არის სავსე True).