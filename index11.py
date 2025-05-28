class Question:
    def __init__(self, prompt, options, correct_option):
        self.prompt = prompt
        self.options = options
        self.correct_option = correct_option

    def is_correct(self, answer):
        return answer.lower() == self.correct_option.lower()


def run_quiz(questions):
    score = 0
    print("\n📘 ტესტი დაწყებულია. აირჩიე სწორი პასუხი (A, B, C ან D):\n")

    for index, question in enumerate(questions, start=1):
        print(f"კითხვა {index}: {question.prompt}")
        for key, option in question.options.items():
            print(f"  {key}: {option}")
        while True:
            answer = input("შეიყვანე პასუხი (A-D): ").strip().upper()
            if answer in question.options:
                break
            else:
                print("❗ არასწორი შეყვანა. სცადე თავიდან.")

        if question.is_correct(answer):
            print("✔ სწორია!\n")
            score += 1
        else:
            print(f"✘ არასწორია. სწორი პასუხია: {question.correct_option}\n")

    print(f"📊 ტესტი დასრულდა! ქულა: {score} / {len(questions)}")
    percentage = (score / len(questions)) * 100
    print(f"შეფასება: {percentage:.1f}%")

    if percentage == 100:
        print("🌟 შესანიშნავი შედეგი!")
    elif percentage >= 70:
        print("👍 კარგია!")
    else:
        print("📝 სცადე ისევ. შეგიძლია უკეთესად!")


# კითხვები
questions = [
    Question(
        "რომელი ენაა გამოიყენება ვებ-საიტების სტრუქტურისთვის?",
        {"A": "CSS", "B": "HTML", "C": "Python", "D": "Java"},
        "B"
    ),
    Question(
        "რომელი ცვლადია სწორი Python-ში?",
        {"A": "1var", "B": "var-name", "C": "_var", "D": "class"},
        "C"
    ),
    Question(
        "რას აბრუნებს len('hello')?",
        {"A": "4", "B": "5", "C": "6", "D": "'hello'"},
        "B"
    )
]

# გაშვება
if __name__ == "__main__":
    run_quiz(questions)
