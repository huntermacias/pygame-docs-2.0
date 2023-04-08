import Image from 'next/image';
import Link from 'next/link';
import GettingStarted from '../components/GettingStarted';
import { gettingstart } from '../helpers/documentation-code';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <header className="py-6">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center" aria-label="Top">
    <div className="flex items-center">
      <Link href="/about" className="ml-8 text-gray-400 hover:text-gray-200">
        <span>
          About
        </span>
      </Link>

      <Link href="https://www.pygame.org/docs/">
        <span className="ml-8 text-gray-400 hover:text-gray-200"
        >
          Original Docs
        </span>
      </Link>

      <Link href="https://github.com/huntermacias/revamed-pygame-docs">
        <span className="ml-8 text-gray-400 hover:text-gray-200">
          Contribute
        </span>

      </Link>
    </div>

    <div className="relative w-70 pt-4">
              <input
                className="bg-gray-800 text-white rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Search..."
              />
              <svg
                className="absolute top-6 left-2 h-6 w-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className="heroicon-ui"
                  d="M16.56 15.94l4.63 4.63a1 1 0 0 1-1.42 1.42l-4.63-4.63a8.5 8.5 0 1 1 1.42-1.42zM9.5 15.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                />
              </svg>
            </div>
  </nav>
</header>


      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-4/5">
          <h1 className="text-5xl font-bold mb-4">Welcome to Pygame Docs</h1>
          <p className="text-xl mb-8">
            Pygame is a set of Python modules designed for writing video games.
            Pygame adds functionality on top of the SDL library. This allows you to
            create fully featured games and multimedia programs in the python
            language.
          </p>

          <Link href="/">
            <span className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-md">
              Get Started
            </span>
          </Link>

          <div className="bg-gray-900 text-white py-12 mt-8 max-w-4xl mx-auto">
            <div className="px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-6">Get started with PyGame</h2>
              <p className="text-lg mb-8">
                Follow these simple steps to start creating games with PyGame:
              </p>
              <ol className="list-decimal list-inside mb-8">
                <li className="mb-2">Install PyGame using pip:</li>
                <code className="block bg-gray-800 rounded-md p-4 mb-4">
                  $ pip install pygame
                </code>
              </ol>
              <GettingStarted code={gettingstart} />
              <hr />
              <p className="text-lg">
                Pygame is a powerful library for creating games and interactive
                applications in Python. With Pygame, you can create anything from
                simple 2D games to complex simulations and visualizations. Get started
                today and unleash your creativity!
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <div className="max-w-md mx-auto">
          <Image
        src="https://uploads-ssl.webflow.com/61f7efd44d01cc87c88dc6f3/6318e21e7ee37e36ce16d836_Getting%20Started%20With%20Pygame%20For%20Kids%20blog01.jpg"
        alt="Pygame Docs"
        className="w-full rounded-md"
        width={400}
        height={400}
      />
    </div>
  </div>

  </main>

</div>
);
}





