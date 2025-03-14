# Tic Tac Toe Game

# სათამაშო დაფა
board = [' ' for _ in range(9)]

# ფუნქცია დაფის დასაბეჭდად
def print_board():
    print(f"{board[0]} | {board[1]} | {board[2]}")
    print("--+---+--")
    print(f"{board[3]} | {board[4]} | {board[5]}")
    print("--+---+--")
    print(f"{board[6]} | {board[7]} | {board[8]}")

# ფუნქცია გადაამოწმოს თუ არის გამარჯვებული
def check_winner(player):
    win_conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # horizontals
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # verticals
        [0, 4, 8], [2, 4, 6]              # diagonals
    ]
    for condition in win_conditions:
        if board[condition[0]] == board[condition[1]] == board[condition[2]] == player:
            return True
    return False

# ფუნქცია მოტყუებული შესვლისთვის
def is_board_full():
    return ' ' not in board

# მთავარი ფუნქცია თამაშის ლოგიკისთვის
def play_game():
    current_player = 'X'
    while True:
        print_board()
        move = int(input(f"Player {current_player}, choose a position (1-9): ")) - 1
        
        # შემოწმება თუ პოზიცია თავისუფალია
        if board[move] != ' ':
            print("This position is already taken. Try again!")
            continue
        
        # განახლება დაფაზე
        board[move] = current_player
        
        # შემოწმება გამარჯვებისთვის
        if check_winner(current_player):
            print_board()
            print(f"Player {current_player} wins!")
            break
        
        # შემოწმება, თუ დაფა სავსეა
        if is_board_full():
            print_board()
            print("It's a tie!")
            break
        
        # შეცვლა მომდევნო მოთამაშეზე
        current_player = 'O' if current_player == 'X' else 'X'

# თამაშის დაწყება
play_game()
