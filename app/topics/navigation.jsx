
const LightningBoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
  );

const navigation = [
  {
    name: 'Beginner Topics',
    options: [
    {
        name: 'Pygame.Color',
        description: "Pygame.colors: It's a collection of ready-made colors that you can use when creating graphics in Pygame.",
        href: '/color',
        icon: LightningBoltIcon,
    },
	  {
      name: 'Pygame.Rect',
      description: 'Pygame.Rect: Manage rectangular areas on the screen.',
      href: '/rect',
      icon: LightningBoltIcon,
    },
    {
      name: 'Pygame.display',
      description: 'Pygame.display: Create and manage game windows and screens.',
      href: '/display',
      icon: LightningBoltIcon,
    },
    {
      name: 'Pygame.draw',
      description: 'Pygame.draw: Draw shapes, lines, and graphics on the screen.',
      href: '/draw',
      icon: LightningBoltIcon,
    },
    {
      name: 'Pygame.event',
      description: 'Pygame.event: Handle events such as key presses and mouse clicks.',
      href: '/events',
      icon: LightningBoltIcon,
    },
    {
      name: 'Pygame.key',
      description: 'Pygame.key: Handle keyboard related tasks.',
      href: '/key',
      icon: LightningBoltIcon,
    },
    {
      name: 'Pygame.font',
      description: 'Pygame.font: Render text on the screen with different fonts, sizes, and styles.',
      href: '/font',
      icon: LightningBoltIcon,
    },
    {
      name: 'Pygame.image',
      description: 'Pygame.image: Load and display images on the screen.',
      href: '/image',
      icon: LightningBoltIcon,
    },
    {
      name: 'Pygame.time',
      description: 'Pygame.time: Manage time and control the game loop.',
      href: '/time',
      icon: LightningBoltIcon,
    },
    {
      name: 'Pygame.mouse',
      description: 'Pygame.transform: Intermediate topic for using Pygame.transform.',
      href: '/mouse',
      icon: LightningBoltIcon,
    },
  ],
  },
  {
    name: 'Intermediate Topics',
    options: [
      {
        name: 'Pygame.transfrom',
        description: 'Start here to learn how to use Pygame.transform',
        href: '/transform',
        icon: LightningBoltIcon,
      },
	  {
        name: 'Pygame.math',
        description: 'Start here to learn how to use Pygame.math',
        href: '/math',
        icon: LightningBoltIcon,
      },
    ],
  },
  {
    name: 'Advanced Topics',
    options: [
      {
        name: 'Pygame.tests',
        description: 'Start here to learn how to use Pygame.tests',
        href: '/tests',
        icon: LightningBoltIcon,
      },
    ],
  },
  {
    name: 'Using Classes with Pygame',
    options: [
      {
        name: 'Player Object', 
        href: '/topics',
        icon: LightningBoltIcon,
        code: `import pygame

# file - player.py

class Player(pygame.sprite.Sprite):
  """ This class represents the player. """
  def __init__(self):
      """ Constructor """
      super().__init__()
      self.image = pygame.Surface([20, 20])
      self.image.fill(RED)
      self.rect = self.image.get_rect()

  def update(self, screen):
      """ Update player. """
      screen.blit(self.image, self.rect)
      pos = pygame.mouse.get_pos()
      self.rect.x = pos[0]
      self.rect.y = pos[1]
      
        `
      },
      {
        name: 'Ball Object', 
        href: '/topics',
        icon: LightningBoltIcon,
        code: `import pygame

# file - block.py

class Block(pygame.sprite.Sprite):
  """ block for player to collect """
  def __init__(self):
      """ Constructor """
      super().__init__()
      self.image = pygame.Surface([20, 20])
      self.image.fill(BLACK)
      self.rect = self.image.get_rect()

  def reset_pos(self):
      """ Called to reset pos. """
      self.rect.y = random.randrange(-300, -20)
      self.rect.x = random.randrange(SCREEN_WIDTH)

  def update(self, screen):
      """ Called to update block object """
      screen.blit(self.image, self.rect)
      self.rect.y += 1
      offscreen = SCREEN_HEIGHT + self.rect.h
      if self.rect.y > offscreen:
          self.reset_pos()
        `
      },
      {
        name: 'Game Object', 
        href: '/topics',
        icon: LightningBoltIcon,
        code: `import pygame
from player import Player
from block import Block
    
# file - game.py
    
class Game():
  """ This class represents our game object """
  def __init__(self):
    """ Constructor
    Create attributes/initialize the game. """
  
    # Create sprite lists
    self.blocks = pygame.sprite.Group()
    self.all_sprites_list = pygame.sprite.Group()
  
    # Create the block sprites
    self.create_blocks()
  
    # Create the player
    self.player = Player()
    self.all_sprites_list.add(self.player)
  
  def update(self, screen):
    """ update everything in our game. """
    self.player.update(screen)
    for block in self.blocks:
        block.update(screen)
        `
      },
    ],
  },
  

];

export default navigation;
