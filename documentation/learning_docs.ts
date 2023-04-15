export type LearnBegInfo = {
  title: string;
  description: string;
  shortDesc: string;
  key: string;
  codesample?: string;
};

const pygameSteps: LearnBegInfo[] = [
  {
    title: "Install Pygame",
    shortDesc: "string",
    description:
      "First, you need to install Pygame. You can do this using pip, which is a package manager for Python. Open your terminal and run the following command:",
    key: "1",
    codesample: ">> pip install pygame",
  },
  {
    title: "Import Pygame",
    shortDesc: "string",
    description:
      "Once you have installed Pygame, you need to import it in your Python file:",
    key: "2",
    codesample: "import pygame",
  },
  {
    title: "Initialize Pygame",
    shortDesc: "string",
    description:
      "Before you can use Pygame, you need to initialize it. This is done using the `pygame.init()` method:",
    key: "3",
    codesample: `import pygame\n\npygame.init()`,
  },
  {
    title: "Create a Window",
    shortDesc: "string",
    description:
      "Now that Pygame is initialized, you can create a window to display your game:",
    key: "4",
    codesample: `import pygame\n\npygame.init()\n\nwidth = 800\nheight = 600\n\nscreen = pygame.display.set_mode((width, height))`,
  },
  {
    title: "The Main Game Loop",
    shortDesc: "string",
    description:
      "Finally, you need to create a main game loop. This loop will run continuously and handle user input, update the game state, and draw the game to the screen:",
    key: "5",
    codesample: `import pygame\n\npygame.init()\n\nwidth = 800\nheight = 600\n\nscreen = pygame.display.set_mode((width, height))\n\nrunning = True\n\nwhile running:\n    for event in pygame.event.get():\n        if event.type == pygame.QUIT:\n            running = False\n\n    # Update the game state\n\n    # Draw the game to the screen\n\n    pygame.display.update()\n\npygame.quit()`,
  },
  {
    title: "Load and Display an Image",
    shortDesc: "string",
    description:
      "You can load an image and display it on the screen using the `pygame.image.load()` and `blit()` methods:",
    key: "6",
    codesample: `import pygame\n\npygame.init()\n\nwidth = 800\nheight = 600\n\nscreen = pygame.display.set_mode((width, height))\n\nimage = pygame.image.load("image.png")\n\nwhile True:\n    for event in pygame.event.get():\n        if event.type == pygame.QUIT:\n            pygame.quit()\n            sys.exit()\n\n    screen.blit(image, (0, 0))\n\n    pygame.display.update()`,
  },
];

const pygameIntroduction = {
  title: "Introduction to Pygame",
  shortDesc: "string",
  description:
    "Pygame is a set of Python modules used for game development. It provides functionality for handling user input, drawing graphics, playing sounds, and much more.",
  shortdesc: "Pygame Graphics: Pygame is primarily used for game development, so you need to learn how to create graphics using Pygame. This includes creating shapes, loading and displaying images, and working with colors."
};

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
    codesample:
      "import pygame\r\n\r\npygame.init()\r\n\r\nwidth = 800\r\nheight = 600\r\n\r\nscreen = pygame.display.set_mode((width, height))",
  },
  {
    title: "Create a Player Class",
    shortDesc: "string",
    description:
      "In Pygame, you can create custom classes to represent different objects in your game. Let's create a Player class to represent the player character:",
    key: "2",
    codesample:
      "import pygame\r\n\r\npygame.init()\r\n\r\nclass Player:\r\n\tdef __init__(self, x, y):\r\n\t\tself.x = x\r\n\t\tself.y = y\r\n\r\n\tdef move_left(self):\r\n\t\tself.x -= 5\r\n\r\n\tdef move_right(self):\r\n\t\tself.x += 5\r\n\r\n\nplayer = Player(375, 500)\r\n\n\nwhile True:\r\n\tfor event in pygame.event.get():\r\n\t\tif event.type == pygame.QUIT:\r\n\t\t\tpygame.quit()\r\n\t\t\tsys.exit()\r\n\t\telif event.type == pygame.KEYDOWN:\r\n\t\t\tif event.key == pygame.K_LEFT:\r\n\t\t\tplayer.move_left()\r\n\t\telif event.key == pygame.K_RIGHT:\r\n\t\t\tplayer.move_right()\r\n\r\n\tscreen.fill((255, 255, 255))\r\n\tplayer.draw(screen)\r\n\r\n\tpygame.display.update()",
  },
];

const pygameAdvIntroduction = {
  title: "Introduction to Pygame",
  description:
    "Pygame is a set of Python modules used for game development. It provides functionality for handling user input, drawing graphics, playing sounds, and much more.",
};

export {
  pygameSteps,
  pygameIntroduction,
  pygameAdvSteps,
  pygameAdvIntroduction,
};
