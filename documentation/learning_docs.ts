
export type LearnAdvInfo = {
  title: string;
  description: string;
  shortDesc: string;
  key: string;
  codesample?: string;
};

const pygameAdvSteps: LearnAdvInfo[] = [
  {
    title: "Create a Window",
    shortDesc: "string",
    description:
      "Now that Pygame is initialized, you can create a window to display your game:",
    key: "1",
    codesample:`import pygame
pygame.init()

width = 800
height = 600

screen = pygame.display.set_mode((width, height))`,
  },
  {
    title: "Create a Player Class",
    shortDesc: "string",
    description:
      "In Pygame, you can create custom classes to represent different objects in your game. Let's create a Player class to represent the player character:",
    key: "2",
    codesample:
      `import pygame
pygame.init()
class Player:

    def __init__(self, x, y):
        self.x = x

        self.y = y
    def move_left(self):

        self.x -= 5
    def move_right(self):

        self.x += 5

player = Player(375, 500)


while True:

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
              player.move_left()
        elif event.key == pygame.K_RIGHT:
            player.move_right()
    screen.fill((255, 255, 255))

    player.draw(screen)
    pygame.display.update()`,
  },
];

const pygameAdvIntroduction = {
  title: "Introduction to Pygame",
  description:
    "Pygame is a set of Python modules used for game development. It provides functionality for handling user input, drawing graphics, playing sounds, and much more.",
};



  
  export {
  pygameAdvSteps,
  pygameAdvIntroduction,
  };