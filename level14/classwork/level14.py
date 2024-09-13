integer_var = 10           # int
float_var = 3.14           # float
string_var = "25"          # str
boolean_var = True         # bool
list_var = [1, 2, 3]       # list

print("Original types:")
print(f"integer_var: {type(integer_var)}")
print(f"float_var: {type(float_var)}")
print(f"string_var: {type(string_var)}")
print(f"boolean_var: {type(boolean_var)}")
print(f"list_var: {type(list_var)}")

converted_int_from_float = int(float_var)          # float -> int
converted_float_from_string = float(string_var)    # str -> float
converted_str_from_int = str(integer_var)           # int -> str
converted_bool_from_int = bool(integer_var)         # int -> bool
converted_list_from_str = list(string_var)          # str -> list

print("\nConverted types and values:")
print(f"converted_int_from_float: {converted_int_from_float} (type: {type(converted_int_from_float)})")
print(f"converted_float_from_string: {converted_float_from_string} (type: {type(converted_float_from_string)})")
print(f"converted_str_from_int: {converted_str_from_int} (type: {type(converted_str_from_int)})")
print(f"converted_bool_from_int: {converted_bool_from_int} (type: {type(converted_bool_from_int)})")
print(f"converted_list_from_str: {converted_list_from_str} (type: {type(converted_list_from_str)})")
