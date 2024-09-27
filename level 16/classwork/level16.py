#1 საკლასო დავალება 1: თითოეულ შედარების ოპერატორზე - >, >=, <, <=, !=, == ჩამოწერეთ 4-4 მაგალითი
print(5>10)
print(6>5)
print(65>53)
print(647>332)

print(5>=10)
print(6>=5)
print(65>=53)
print(647>=332)


print(5<10)
print(6<5)
print(65<53)
print(647<332)

print(5<=10)
print(6<=5)
print(65<=53)
print(647<=332)

print(5!=10)
print(5!=5)
print(65!=53)
print(647!=332)

print(5==10)
print(6==5)
print(65==53)
print(647==332)

#2საკლასო დავალება 2: ერთ ცვლადში შეინახეთ მომხმარებლის შემოტანილი რიცხვი integer მონაცემთა ტიპში.
# მეორე ცვლადშიც შეინახეთ მეორეჯერ შემოტანილი რიცხვი, ესეც integer-ის სახით. 
# ამ ორ ცვლადზე მოახდინეთ შედარებები ნასწავლი ოპერატორებით - >, >=, <, <=, ==, !=

number1 = int(input("Please enter the first number: "))
number2 = int(input("Please enter the second number: "))

print(number1 > number2)
print(number1 < number2)
print(number1 >= number2)
print(number1 <= number2)
print(number1 != number2)
print(number1 == number2)