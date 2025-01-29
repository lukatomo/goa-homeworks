#N1
sentence = "This is a sentence."
print(sentence.upper())

#N2
name = input("Enter your name: ")
print(name.upper())

#N3
def convert_to_uppercase(strings):
    return [string.upper() for string in strings]

lowercase_list = ['hello', 'world', 'python']
print(convert_to_uppercase(lowercase_list))

#N4
sentence = "This Is A Sentence."
print(sentence.lower())

#N5
email = input("Enter your email address: ")
print(email.lower())

#N6
def to_lowercase(string):
    return string.lower()

mixed_string = "Hello WoRLd"
print(to_lowercase(mixed_string))

#N7
sentence = input("Enter a sentence: ")
print(sentence.capitalize())

#N8
def capitalize_list(strings):
    return [string.capitalize() for string in strings]

lowercase_list = ['hello', 'world', 'python']
print(capitalize_list(lowercase_list))

#N9
def capitalize_first(string):
    return string.capitalize()

text = "hello world"
print(capitalize_first(text))

#N10
sentence = "I love Python programming."
print(sentence.find("Python"))

#N11
string = input("Enter a string: ")
substring = input("Enter a substring to search for: ")
print(string.find(substring))

#N12
def find_character(string, char):
    return string.find(char)

text = "Hello"
char = "e"
print(find_character(text, char))

#N13
user_string = input("Enter a string: ")
print(len(user_string))

#N14
def list_lengths(strings):
    return [len(string) for string in strings]

string_list = ['apple', 'banana', 'cherry']
print(list_lengths(string_list))

#N15
paragraph = "The quick brown fox jumps over the lazy dog. The fox is fast."
print(paragraph.lower().split().count('the'))

#N16
string = "hello world"
char = input("Enter a character to count: ")
print(string.count(char))

#N17
def count_word(text, word):
    return text.lower().split().count(word.lower())

paragraph = "The quick brown fox jumps over the lazy dog. The fox is fast."
print(count_word(paragraph, "the"))

#N18
def count_word_occurrences(text, word):
    # Convert both the text and word to lowercase to make the search case-insensitive
    return text.lower().split().count(word.lower())

# Example usage
text = "The quick brown fox jumps over the lazy dog. The fox is fast."
word = "the"
print(count_word_occurrences(text, word))
