# 1) ლისტის პირველი და ბოლო ელემენტის დაბრუნება

# def first_and_last(lst):
#     if not lst:  # ცარიელი სიის შემოწმება
#         return None
#     return [lst[0], lst[-1]]

# # ტესტი
# print(first_and_last([1, 2, 3, 4, 5]))  # [1, 5]
# print(first_and_last(["a", "b", "c", "d"]))  # ["a", "d"]
# print(first_and_last([]))  # None
# 2) უდიდესი რიცხვის დაბრუნება სამი რიცხვიდან

# def max_of_three(a, b, c):
#     return max(a, b, c)

# # ტესტი
# print(max_of_three(10, 25, 15))  # 25
# print(max_of_three(-1, -5, -3))  # -1
# print(max_of_three(100, 50, 75))  # 100
# 3) შეტრიალებული სტრინგის დაბრუნება (სლაისინგით)

# def reverse_string(s):
#     return s[::-1]

# # ტესტი
# print(reverse_string("hello"))  # "olleh"
# print(reverse_string("Python"))  # "nohtyP"
# BONUS: შეტრიალებული სტრინგის დაბრუნება (სლაისინგის გარეშე)

# def reverse_string_manual(s):
#     reversed_str = ""
#     for char in s:
#         reversed_str = char + reversed_str
#     return reversed_str

# # ტესტი
# print(reverse_string_manual("hello"))  # "olleh"
# print(reverse_string_manual("Python"))  # "nohtyP"