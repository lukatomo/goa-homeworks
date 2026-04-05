import tkinter as tk
import random

CELL_SIZE = 20
GRID_WIDTH = 30
GRID_HEIGHT = 20
INITIAL_SNAKE_LEN = 4
INITIAL_DELAY = 140
SPEED_INCREASE_EVERY = 5
DELAY_DECREASE = 8

class SnakeGame:
    def __init__(self, master):
        self.master = master
        self.width_px = GRID_WIDTH * CELL_SIZE
        self.height_px = GRID_HEIGHT * CELL_SIZE
        self.canvas = tk.Canvas(master, width=self.width_px, height=self.height_px, bg="#111111")
        self.canvas.pack()
        self.score_var = tk.StringVar(value="Score: 0")
        self.score_label = tk.Label(master, textvariable=self.score_var, font=("Consolas", 12))
        self.score_label.pack(anchor="w", padx=6, pady=4)
        master.bind("<Key>", self.on_key)
        self.reset_game()
        self.running = True
        self.paused = False
        self.game_loop()

    def reset_game(self):
        start_x = GRID_WIDTH // 2
        start_y = GRID_HEIGHT // 2
        self.snake = [(start_x - i, start_y) for i in range(INITIAL_SNAKE_LEN)]
        self.direction = (1, 0)
        self.next_direction = self.direction
        self.place_food()
        self.score = 0
        self.delay = INITIAL_DELAY
        self.level = 1
        self.update_score_label()
        self.canvas.delete("all")
        self.draw_board()

    def place_food(self):
        free_cells = {(x, y) for x in range(GRID_WIDTH) for y in range(GRID_HEIGHT)} - set(self.snake)
        if not free_cells:
            self.food = None
            return
        self.food = random.choice(list(free_cells))

    def on_key(self, event):
        key = event.keysym.lower()
        if key in ("up", "down", "left", "right"):
            dx, dy = {
                "left": (-1, 0),
                "right": (1, 0),
                "up": (0, -1),
                "down": (0, 1)
            }[key]
            if (dx, dy) != (-self.direction[0], -self.direction[1]):
                self.next_direction = (dx, dy)
        elif key == "p":
            self.toggle_pause()
        elif key == "r":
            self.reset_game()

    def toggle_pause(self):
        self.paused = not self.paused
        if not self.paused:
            self.game_loop()

    def game_loop(self):
        if not self.running:
            return
        if self.paused:
            self.canvas.delete("pause")
            self.canvas.create_text(self.width_px//2, self.height_px//2, text="PAUSED", fill="white", font=("Consolas", 28), tag="pause")
            return
        self.canvas.delete("pause")
        self.direction = self.next_direction
        head_x, head_y = self.snake[0]
        dx, dy = self.direction
        new_head = (head_x + dx, head_y + dy)
        if not (0 <= new_head[0] < GRID_WIDTH and 0 <= new_head[1] < GRID_HEIGHT):
            self.game_over()
            return
        if new_head in self.snake:
            self.game_over()
            return
        self.snake.insert(0, new_head)
        if self.food and new_head == self.food:
            self.score += 1
            self.update_score_label()
            self.place_food()
            if self.score % SPEED_INCREASE_EVERY == 0:
                self.level += 1
                self.delay = max(20, self.delay - DELAY_DECREASE)
        else:
            self.snake.pop()
        self.draw_board()
        self.master.after(self.delay, self.game_loop)

    def update_score_label(self):
        self.score_var.set(f"Score: {self.score}   Level: {self.level}")

    def draw_board(self):
        self.canvas.delete("cell")
        if self.food:
            x, y = self.food
            self.draw_cell(x, y, fill="#ff5555", tag="cell")
        for i, (x, y) in enumerate(self.snake):
            if i == 0:
                color = "#00ff66"
            else:
                color = "#008855"
            self.draw_cell(x, y, fill=color, tag="cell")

    def draw_cell(self, gx, gy, fill="#ffffff", tag=None):
        x1 = gx * CELL_SIZE
        y1 = gy * CELL_SIZE
        x2 = x1 + CELL_SIZE
        y2 = y1 + CELL_SIZE
        pad = 2
        if tag:
            self.canvas.create_rectangle(x1+pad, y1+pad, x2-pad, y2-pad, fill=fill, width=0, tag=tag)
        else:
            self.canvas.create_rectangle(x1+pad, y1+pad, x2-pad, y2-pad, fill=fill, width=0)

    def game_over(self):
        self.running = False
        self.canvas.create_text(self.width_px//2, self.height_px//2 - 10, text="GAME OVER", fill="red", font=("Consolas", 28), tag="gameover")
        self.canvas.create_text(self.width_px//2, self.height_px//2 + 30, text=f"Final Score: {self.score}   (R to restart)", fill="white", font=("Consolas", 14), tag="gameover")

if __name__ == "__main__":
    root = tk.Tk()
    root.title("Snake (Python + Tkinter)")
    game = SnakeGame(root)
    root.mainloop()
