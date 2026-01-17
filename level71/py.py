# ...existing code...
def calculator():
    """Simple REPL calculator. Enter expressions like: 2 + 3 * (4 - 1)
    Type 'quit' or 'exit' to stop.
    """
    print("Simple calculator. Enter an expression or 'quit' to exit.")
    while True:
        expr = input("> ").strip()
        if expr.lower() in ("quit", "exit"):
            print("Goodbye.")
            break
        try:
            # allow only digits, whitespace and common operators/parentheses/dot
            if not expr or not all(c.isdigit() or c.isspace() or c in "+-*/()." for c in expr):
                raise ValueError("Invalid characters in expression.")
            # evaluate in restricted environment
            result = eval(expr, {"__builtins__": None}, {})
            print(result)
        except Exception as e:
            print("Error:", e)

if __name__ == "__main__":
    calculator()
# ...existing code...