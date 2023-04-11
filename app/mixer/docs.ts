export type Info = {
	title: string;
	description: string;
	key: string;
	codesample: string;
  };
  const data: Info[] = [
	{
	  title: " pygame.mixer.init()",
	  description: "Initialize the mixer module for Sound loading and playback",
	  key: "1",
	  codesample: `import pygame

pygame.mixer.init()
`,
	},
	{
	  title: " pygame.mixer.Sound()",
	  description: "pygame.mixer.Sound() -> Sound : Create a new Sound object from a file or buffer object",
	  key: "2",
	  codesample: `import pygame

pygame.init()

track = pygame.mixer.Sound("song.mp3")

# set volume of track - (0-1)
track.set_volume(0.6)

# get volume level
currentVolume = track.get_volume()

# start playing the track
track.play()


`,
	},
	{
		title: " pygame.mixer.Sound.play()",
		description: "Begin playback of the Sound (i.e., on the computer's speakers) on an available Channel. This will forcibly select a Channel, so playback may cut off a currently playing sound if necessary.",
		key: "3",
		codesample: `import pygame

pygame.init()

# load track
track = pygame.mixer.Sound("song.mp3")

# start playing the track
track.play()

# 


  `,
	  },
  ];
  const description = {
	title: "pygame.mixer Module",
	description:
	  "Pygame.mixer is a pygame module for loading and playing sounds. ",
  };
  
  export { data, description };
  