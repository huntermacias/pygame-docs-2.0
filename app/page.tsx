import Image from 'next/image';
import Link from 'next/link';
import GettingStarted from '../components/GettingStarted';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-6">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full flex justify-between items-center">
          
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

              <Link href="https://github.com/username/pygame-docs">
                <span className="ml-8 text-gray-400 hover:text-gray-200">
                  GitHub
                </span>
              
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className='w-full'>
            <h1 className="text-5xl font-bold mb-4">Welcome to Pygame Docs</h1>
            <p className="text-xl mb-8">
              Pygame is a set of Python modules designed for writing video games.
              Pygame adds functionality on top of the SDL library. This allows
              you to create fully featured games and multimedia programs in the
              python language.
            </p>

            <Link href="/">
              <span className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-md">
                Get Started
              </span>
            </Link>
            <div className="bg-gray-900 text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-6">Get started with PyGame</h2>
                <p className="text-lg mb-8">Follow these simple steps to start creating games with PyGame:</p>
                <ol className="list-decimal list-inside mb-8">
                  <li className="mb-2">Install PyGame using pip:</li>
                  <code className="block bg-gray-800 rounded-md p-4 mb-4">
                    $ pip install pygame
                  </code>
                </ol>
                  <GettingStarted />
                  <hr />
                  <p className="text-lg">Pygame is a powerful library for creating games and interactive applications in Python. With Pygame, you can create anything from simple 2D games to complex simulations and visualizations. Get started today and unleash your creativity!</p>
              </div>
            </div>

          </div>

          <div className="md:col-start-2">
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
