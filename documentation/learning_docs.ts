
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


const pygameRectSteps: LearnAdvInfo[] = [ 
  {
    title: "Create a Pygame Rect Object",
    shortDesc: "Create a Rect object with the top-left position and dimensions",
    description:
    "A Pygame Rect object is used to represent a rectangular area in a game. You can create a Rect object by specifying its top-left position and dimensions:",
    key: "1",
    codesample:
    `import pygame

pygame.init()

width = 800
height = 600

# create and store Rect Object to rect variable
rect = pygame.Rect(100, 100, 50, 50)`,
  },
  {
  title: "Change the Position of a Rect Object",
  shortDesc: "Update the top-left position of a Rect object",
  description:
  "You can update the position of a Rect object by changing its x and y attributes:",
  key: "2",
  codesample:
  "import pygame\r\n\r\npygame.init()\r\n\r\nwidth = 800\r\nheight = 600\r\n\r\nrect = pygame.Rect(100, 100, 50, 50)\r\nrect.x = 200\r\nrect.y = 300",
  },
  {
  title: "Check for Collision between Rect Objects",
  shortDesc: "Check if two Rect objects overlap",
  description:
  "In game development, it's often necessary to check if two objects collide. You can use the colliderect() method of a Rect object to check if it collides with another Rect object:",
  key: "3",
  codesample:
  "import pygame\r\n\r\npygame.init()\r\n\r\nwidth = 800\r\nheight = 600\r\n\r\nrect1 = pygame.Rect(100, 100, 50, 50)\r\nrect2 = pygame.Rect(200, 200, 50, 50)\r\n\r\nif rect1.colliderect(rect2):\r\n\tprint('Rectangles overlap')",
  },
  ];

const pygameRectIntroduction = {
  title: "Introduction to Pygame Rect",
  description:
  "Pygame Rect is a class used to represent rectangular areas in a game. It provides methods for collision detection, movement, and more.",
  };
  
  export {
  pygameAdvSteps,
  pygameAdvIntroduction,
  pygameRectSteps,
  pygameRectIntroduction,
  };