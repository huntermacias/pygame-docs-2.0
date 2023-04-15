import { Card } from "./../types";

const cards: Card[] = [
    {
      title: "Pygame Basics",
      description:
        "Get started on your journey of creating fun and exciting games with Pygame! In this beginner-friendly course, you'll learn the fundamentals of Pygame, from setting up your development environment to creating your first game. With easy-to-follow tutorials and hands-on exercises, you'll be able to bring your imagination to life and start creating games that you can be proud of. Join now and unlock the power of Pygame!",
      shortDesc:
        "Pygame Graphics: Pygame is primarily used for game development, so you need to learn how to create graphics using Pygame. This includes creating shapes, loading and displaying images, and working with colors.",
      imageUrl:
        "https://cdn-icons-png.flaticon.com/512/2621/2621053.png",
      linkUrl: "/pygame-basics",
      options: [
        { label: "Basics of Pygame", link: "/pygame-basics", key: "1" },
        { label: "Rects: Collision", link: "/pygame-collision", key: "2" },
        { label: "Sprites: Collision", link: "/pygame-sprites", key: "3" },
        { label: "Pygame Events", link: "/pygame-events", key: "4" },
        { label: "Pygame Clock", link: "/pygame-clock", key: "5" },
        { label: "Pygame Input", link: "/pygame-input", key: "6" },
        { label: "Pygame Fonts", link: "/pygame-fonts", key: "7" },
      ],
    },
    {
      title: "Pygame Intermediate",
      description:
        "Take your Pygame skills to the next level! In this intermediate-level course, you'll learn advanced concepts and techniques for creating engaging and immersive games. From working with audio and animations to building complex games designed using an object-orientated programming approach, you'll be able to create games that are both fun and challenging. Join now and take your Pygame skills to the next level!",
      shortDesc:
        "Pygame Audio: Pygame provides several ways to incorporate audio into your games, including sound effects and background music.",
      imageUrl:
        "https://cdn-icons-png.flaticon.com/512/2621/2621053.png",
      linkUrl: "/pygame-intermediate",
      options: [
        { label: "Sounds & Music", link: "/pygame-sound", key: "1" },
        { label: "Classes & Objects", link: "/pygame-objects", key: "2" },
        { label: "Animations", link: "/pygame-animations", key: "3" },
        { label: "Multi-Screen Setup", link: "/pygame-multiscreen", key: "4" },
        { label: "Pygame Networking", link: "/pygame-networking", key: "5" },
        { label: "Pygame Advanced Graphics", link: "/pygame-advanced-graphics", key: "6" },
        { label: "Pygame GUIs", link: "/pygame-guis", key: "7" },
      ],
    },
  ];


export default cards 
  