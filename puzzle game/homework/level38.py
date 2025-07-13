# 1) Check if all characters in a given string are lowercase
def check_lowercase(string):
    print(string.islower())

# 2) Function that returns True if a string is entirely lowercase, otherwise False
def is_all_lowercase(string):
    return string.islower()

# 3) Prompt user for a string and check if it contains only lowercase letters
def check_user_input_lowercase():
    user_input = input("Enter a string: ")
    print("All lowercase:", user_input.islower())

# 4) Verify if all characters in a user-provided string are uppercase
def check_uppercase(string):
    print(string.isupper())

# 5) Function that returns True if a string is entirely uppercase, otherwise False
def is_all_uppercase(string):
    return string.isupper()

# 6) Prompt user for a string and check if it is in uppercase
def check_user_input_uppercase():
    user_input = input("Enter a string: ")
    print("All uppercase:", user_input.isupper())

# 7) Convert a string to swapped case (uppercase to lowercase and vice versa)
def swap_case(string):
    print(string.swapcase())

# 8) Function that takes a sentence and returns it with swapped case
def swap_case_sentence(sentence):
    return sentence.swapcase()

# 9) Function that takes a user's name and age, returning a formatted welcome message
def welcome_message(name, age):
    return f"Welcome, {name}! You are {age} years old."

# 10) Function that takes a sentence and returns a list of words
def split_into_words(sentence):
    return sentence.split()
