export type Info = {
	title: string;
	description: string;
	key: string;
	codesample: string;
  };
  const data: Info[] = [
	{
      title: ' Color.update(r, g, b, a) - None',
      description: 'Sets the color to the given RGBA value.',
      key: '1',
      codesample: 'color.update(255, 0, 0, 128)'
    },
    {
      title: 'Color.r - Int',
      description: 'Gets or sets the red value of the Color',
      key: '3',
      codesample: 'Color.r = 255'
    },
    {
      title: 'Color.g - Int',
      description: 'Gets or sets the green value of the Color',
      key: '4',
      codesample: 'Color.g = 255'
    },
    {
      title: 'Color.b - Int',
      description: 'Gets or sets the blue value of the Color',
      key: '5',
      codesample: 'Color.b = 255'
    },
    {
      title: 'Color.a - Int',
      description: 'Gets or sets the alpha value of the Color',
      key: '6',
      codesample: 'Color.a = 128'
    },
    {
      title: ' Color.grayscale() - Color',
      description: 'Returns the grayscale of the color as a new color.',
      key: '2',
      codesample: 'color.grayscale()'
    },
    {
      title: "Invert",
      description: "Return the inverse of the color.",
      key: "invert",
      codesample: "color.invert()"
    },
    {
      title: "Lighten",
      description: "Return a lighter color by increasing the value of the lightness channel.",
      key: "lighten",
      codesample: "color.lighten(10)"
    },
    {
      title: "Darken",
      description: "Return a darker color by decreasing the value of the lightness channel.",
      key: "darken",
      codesample: "color.darken(10)"
    },
    {
      title: "Blend",
      description: "Blend the color with another color by a given percentage using alpha compositing.",
      key: "blend",
      codesample: "color.blend(anotherColor, 0.5)"
    }

  ];
const description = {
  title: "pygame.color Module",
  description:
    "Welcome to the Pygame color module! pygame.Color is a module that provides various color-related functions and methods for working with colors in Pygame.",
  };
  
  export { data, description };

 