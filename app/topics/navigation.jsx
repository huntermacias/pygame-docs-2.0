// import LightningBoltIcon from './LightningBoltIcon';

import GettingStarted from "../../components/GettingStarted";

const LightningBoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
  );

const navigation = [
  {
    name: 'Beginner Topics',
    options: [
      {
        name: 'Pygame.Color',
        description: 'Learn how to work with colors in Pygame with this guide. This topic covers creating color objects, setting colors for surfaces, and using common color presets. Whether you are designing backgrounds, drawing shapes or creating custom sprites, understanding how to work with colors is essential to creating visually appealing games. Start learning with Pygame.Color now!',
        href: '/color',
        icon: LightningBoltIcon,
      },
      {
        name: 'Pygame.Rect',
        description: 'Learn how to use Pygame.Rect for managing rectangular areas on the screen.',
        href: '/rect',
        icon: LightningBoltIcon,
        },
        {
        name: 'Pygame.Display',
        description: 'Learn how to use Pygame.Display to create and manage game windows and screens.',
        href: '/display',
        icon: LightningBoltIcon,
        },
        {
        name: 'Pygame.Draw',
        description: 'Learn how to use Pygame.Draw to draw shapes, lines, and other graphics on the screen.',
        href: '/draw',
        icon: LightningBoltIcon,
        },
        {
        name: 'Pygame.Events',
        description: 'Learn how to use Pygame.Events to handle events such as key presses and mouse clicks.',
        href: '/events',
        icon: LightningBoltIcon,
        },
        {
        name: 'Pygame.Font',
        description: 'Learn how to use Pygame.Font to render text on the screen with different fonts, sizes, and styles.',
        href: '/font',
        icon: LightningBoltIcon,
        },
        {
        name: 'Pygame.Image',
        description: 'Learn how to use Pygame.Image to load and display images on the screen.',
        href: '/image',
        icon: LightningBoltIcon,
        },
        {
        name: 'Pygame.Time',
        description: 'Learn how to use Pygame.Time to manage time and control the game loop.',
        href: '/time',
        icon: LightningBoltIcon,
        },
        {
        name: 'Pygame.Mouse',
        description: 'Learn how to use Pygame.Mouse to handle mouse input and get information about the mouse cursor.',
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
