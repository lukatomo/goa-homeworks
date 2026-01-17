import random

# ფუნქცია თამაშისათვის
def rock_paper_scissors():
    print("Welcome to Rock, Paper, Scissors!")

    # მოწინააღმდეგე ვარიანტები
    options = ["rock", "paper", "scissors"]
    
    while True:
        # მოთამაშის არჩევანი
        user_choice = input("Choose 'rock', 'paper', or 'scissors': ").lower()
        
        if user_choice not in options:
            print("Invalid choice! Please choose 'rock', 'paper', or 'scissors'.")
            continue
        
        # სისტემის არჩევანი
        computer_choice = random.choice(options)
        print(f"Computer chose: {computer_choice}")
        
        # გამარჯვების ლოგიკა
        if user_choice == computer_choice:
            print("It's a tie!")
        elif (user_choice == "rock" and computer_choice == "scissors") or \
             (user_choice == "paper" and computer_choice == "rock") or \
             (user_choice == "scissors" and computer_choice == "paper"):
            print("You win!")
        else:
            print("You lose!")
        
        # თამაშის გაგრძელება
        play_again = input("Do you want to play again? (yes/no): ").lower()
        if play_again != "yes":
            break

# თამაშის დაწყება
rock_paper_scissors()

