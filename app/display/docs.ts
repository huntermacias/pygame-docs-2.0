export type Info = {
  title: string;
  description: string;
  key: string;
  codesample: string;
};
const data: Info[] = [
  {
    title: " display.init() - None",
    description: "Initializes the display module",
    key: "1",
    codesample: "display.init()",
  },
  {
    title: " display.quit() - None",
    description: "Uninitializes the display module",
    key: "2",
    codesample: "display.quit()",
  },
  {
    title: " display.get_init() - bool",
    description: "Returns True if the display module has been initialized",
    key: "3",
    codesample: "display.get_init()",
  },
  {
    title: " display.set_mode(size, flags=0, depth=0) - Surface",
    description: "Creates a display Surface and returns it",
    key: "4",
    codesample: "display.set_mode((800, 600))",
  },
  {
    title: " display.get_surface() - Surface",
    description: "Returns the display Surface",
    key: "5",
    codesample: "display.get_surface()",
  },
  {
    title: " display.flip() - None",
    description: "Updates portions of the screen",
    key: "6",
    codesample: "display.flip()",
  },
  {
    title: " display.update(rectangle=None) - None",
    description: "Updates portions of the screen for software displays",
    key: "7",
    codesample: "display.update()",
  },
  {
    title: " display.Info() - VideoInfo",
    description: "Create a video display information object", // TODO - add more info
    key: "8",
    codesample: "display.Info()",
  },
];
const description = {
  title: "pygame display Description",
  description:
    "pygame.display is a module that allows you to control the display window and screen",
};

export { data, description };
