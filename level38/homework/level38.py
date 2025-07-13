# 2) Check if all characters in a given string are lowercase and print the result
text = "hello"
print("Is lowercase:", text.islower())

# 3) Create a function that checks if a string is completely in lowercase
def is_all_lowercase(s):
    return s.islower()

print(is_all_lowercase("example"))  # True
print(is_all_lowercase("Example"))  # False

# 4) Prompt user to input a string and check if it's lowercase
user_input = input("Enter a string (check lowercase): ")
print("All lowercase?", user_input.islower())

# 5) Verify if all characters in a user-provided string are uppercase
user_upper = input("Enter a string (check uppercase): ")
print("All uppercase?", user_upper.isupper())

# 6) Function that checks if string is entirely uppercase
def is_all_uppercase(s):
    return s.isupper()

print(is_all_uppercase("HELLO"))  # True
print(is_all_uppercase("Hello"))  # False

# 7) Check and display whether string input by user is in uppercase
user_input2 = input("Enter a string (display if it's uppercase): ")
print("Is uppercase:", user_input2.isupper())

# 8) Convert a string by swapping case
swap_text = "Hello World"
print("Swapped case:", swap_text.swapcase())

# 9) Function to swap case of each letter in a sentence
def swap_case_sentence(sentence):
    return sentence.swapcase()

print(swap_case_sentence("Hello THERE!"))  # hELLO there!

# 10) Function to return a welcome message using name and age
def welcome_message(name, age):
    return f"Welcome, {name}! You are {age} years old."

print(welcome_message("Luka", 15))

# 11) Function to split sentence into list of words
def split_into_words(sentence):
    return sentence.split()

print(split_into_words("This is a test sentence."))
