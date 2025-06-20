# 1.short one-liners

print(sum([1, 2, 3, 4, 5]))

# 2. Simple function
def greet(name):
    return f"Hello, {name}!"
print(greet("Luka"))

# 3. Basic for loop example
for i in range(5):
    print(i)

# 4.List comprehension
squares = [x**2 for x in range(6)]
print(squares)

# 5. If-else short example
x = 10
print("Positive" if x > 0 else "Non-positive")

# 6. String reversal made easy
print("Python"[::-1])

# 7. Recursive function (calculating factorial)
def factorial(n):
    return 1 if n == 0 else n * factorial(n-1)

print(factorial(5))