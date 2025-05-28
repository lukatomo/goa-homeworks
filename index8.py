import pygame
import random
import sys


pygame.init()
width, height = 800, 300
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption(" Kitt Dino Runner")
clock = pygame.time.Clock()
font = pygame.font.SysFont(None, 36)


WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GREEN = (34, 139, 34)


dino = pygame.Rect(80, 220, 50, 50)
dino_vel = 0
gravity = 1
jump_power = -18
is_jumping = False


obstacles = []

def create_obstacle():
    width = random.randint(20, 40)
    height = random.randint(40, 60)
    return pygame.Rect(800, 260 - height, width, height)


score = 0


running = True
while running:
    screen.fill(WHITE)

    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.KEYDOWN and not is_jumping:
            if event.key == pygame.K_SPACE:
                dino_vel = jump_power
                is_jumping = True

    
    dino.y += dino_vel
    dino_vel += gravity
    if dino.y >= 220:
        dino.y = 220
        is_jumping = False

    
    if random.randint(0, 60) == 1:
        obstacles.append(create_obstacle())

    for ob in list(obstacles):
        ob.x -= 6
        pygame.draw.rect(screen, GREEN, ob)
        if ob.colliderect(dino):
            print(" Game Over!")
            pygame.quit()
            sys.exit()
        if ob.x + ob.width < 0:
            obstacles.remove(ob)
            score += 1

    
    pygame.draw.rect(screen, BLACK, dino)  # დინოზავრი
    pygame.draw.line(screen, BLACK, (0, 270), (width, 270), 2)  # მიწა


    score_text = font.render(f"Score: {score}", True, BLACK)
    screen.blit(score_text, (10, 10))

    pygame.display.update()
    clock.tick(60)
