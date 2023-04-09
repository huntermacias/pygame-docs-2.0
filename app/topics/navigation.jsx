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
        description: 'Start here to learn how to use Pygame.Color',
        href: '/color',
        icon: LightningBoltIcon,
      },
	  {
        name: 'Pygame.Rect',
        description: 'Start here to learn how to use Pygame.Rect',
        href: '/rect',
        icon: LightningBoltIcon,
      },
      {
        name: 'Pygame.Display',
        description: 'Start here to learn how to use Pygame.Display',
        href: '/display',
        icon: LightningBoltIcon,
      },
	  {
        name: 'Pygame.Draw',
        description: 'Start here to learn how to use Pygame.Draw',
        href: '/draw',
        icon: LightningBoltIcon,
      },
	  {
        name: 'Pygame.Events',
        description: 'Start here to learn how to use Pygame.Events',
        href: '/events',
        icon: LightningBoltIcon,
      },
	  {
        name: 'Pygame.Font',
        description: 'Start here to learn how to use Pygame.Font',
        href: '/font',
        icon: LightningBoltIcon,
      },
	  {
        name: 'Pygame.Image',
        description: 'Start here to learn how to use Pygame.Image',
        href: '/image',
        icon: LightningBoltIcon,
      },
	  {
        name: 'Pygame.Time',
        description: 'Start here to learn how to use Pygame.time',
        href: '/time',
        icon: LightningBoltIcon,
      },
	  {
        name: 'Pygame.Mouse',
        description: 'Start here to learn how to use Pygame.Mouse',
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
        name: 'Simple Object Class', 
        href: '/topics',
        icon: LightningBoltIcon,
        code: `class Ball(pygame.sprite.Sprite):
"""A ball that will move across the screen
Returns: ball object
Functions: update, calcnewpos
Attributes: area, vector"""

def __init__(self, vector):
    pygame.sprite.Sprite.__init__(self)
    self.image, self.rect = load_png('ball.png')
    screen = pygame.display.get_surface()
    self.area = screen.get_rect()
    self.vector = vector

def update(self):
    newpos = self.calcnewpos(self.rect,self.vector)
    self.rect = newpos

def calcnewpos(self,rect,vector):
    (angle,z) = vector
    (dx,dy) = (z*math.cos(angle),z*math.sin(angle))
    return rect.move(dx,dy)
        `
      },
    ],
  },
];

export default navigation;
