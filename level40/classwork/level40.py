def multiply(a, b):
    return a * b

result = multiply(5, 3)  # შეგვიძლია შეცვალო მნიშვნელობები
double = result * 2

print(double)

# ამ კოდში:

# multiply ფუნქცია იღებს ორ პარამეტრს a და b, და აბრუნებს მათ ნამრავლს.
# result ცვლადი ინახავს ფუნქციის დაბრუნებულ მნიშვნელობას.
# double ცვლადში ვინახავთ result-ის ორმაგ მნიშვნელობას.
# საბოლოოდ, print(double) ბეჭდავს შედეგს.
# თუ a=5 და b=3, მაშინ გამოსავალი იქნება 30. 









def greet(name="Goal", surname="Orientadze"):
    return f"Hello {name} {surname}!"

# ფუნქციის გამოძახება არგუმენტებით
print(greet("John", "Doe"))

# ფუნქციის გამოძახება არგუმენტების გარეშე (default მნიშვნელობებით)
print(greet())

# ეს კოდი:

# ქმნის greet ფუნქციას, რომელიც იღებს name და surname პარამეტრებს, მაგრამ მათ default მნიშვნელობებად აქვს Goal და Orientadze.
# ფუნქცია აბრუნებს "Hello {name} {surname}!" -ს f-string-ის გამოყენებით.
# შემდეგ ფუნქციას ვიძახებთ:
# პირველად name="John" და surname="Doe" არგუმენტებით.
# მეორედ არგუმენტების გარეშე, რის შედეგადაც დაბრუნდება "Hello Goal Orientadze!".