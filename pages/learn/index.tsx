'use client'
import Image from "next/image";
import Link from "next/link";

const PygameCards = () => {
  const cards = [
    {
      title: "Pygame Basics",
      description:
        "Get started on your journey of creating fun and exciting games with Pygame! In this beginner-friendly course, you'll learn the fundamentals of Pygame, from setting up your development environment to creating your first game. With easy-to-follow tutorials and hands-on exercises, you'll be able to bring your imagination to life and start creating games that you can be proud of. Join now and unlock the power of Pygame!",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2621/2621053.png",
      linkUrl: "/pygame-basics",
    },
    {
      title: "Pygame Advanced",
      description:
        "Discover the limitless possibilities of Pygame and explore advanced concepts and techniques to create games that will impress your friends and players alike. This course will challenge you to push your Pygame skills to their limits and create immersive gaming experiences that will leave a lasting impression. Take the next step in your Pygame journey and become a master game developer.",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2621/2621053.png",
      linkUrl: "/pygame-advanced",
    },
	{
		title: "Full Game Examples",
		description: "Unlock the full potential of Pygame and unleash your creativity to create immersive gaming experiences. This course will take you on a deep dive into advanced Pygame concepts and techniques, providing you with the skills and knowledge necessary to develop games that will leave a lasting impression. Whether you're a seasoned game developer or just starting out, this course will challenge your pygame knowledge.",
		imageUrl: "https://cdn-icons-png.flaticon.com/512/2621/2621053.png",
		linkUrl: "/pygame-examples-learn",
	}
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="overflow-hidden shadow-lg rounded-lg bg-gray-800 ">
              <Image className="pl-6 pt-3" alt={card.title} src={card.imageUrl} width={200} height={200} />
              <div className="px-6 py-4 mb-2">
                <h2 className="font-mono font-bold text-xl mb-2 text-amber-400">{card.title}</h2>
                <p className="text-gray-300 text-base mb-4 space-y-2">{card.description}</p>
                <Link href={card.linkUrl}>
                  <span className="bottom w-1/4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 
				    rounded-lg transition-colors duration-300">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PygameCards;
