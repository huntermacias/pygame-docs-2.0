import Head from "next/head";

const AboutPage = () => {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>About - Pygame Docs</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-100 mb-8">
          About Pygame Docs
        </h1>
        <p className="text-lg text-gray-200 mb-12">
          Pygame Docs is a modern and interactive documentation website for the
          Pygame library. Our aim is to make it easier for developers to access
          and utilize the vast amount of information available in the Pygame
          documentation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              Our mission is to provide a comprehensive and user-friendly
              documentation platform for Pygame developers. We believe that
              clear and concise documentation is essential to the success of any
              software project, and Pygame is no exception. With Pygame Docs,
              you can quickly find the information you need to create amazing
              games and interactive applications with Pygame.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              We also strive to keep the Pygame Docs website up-to-date with the
              latest features and improvements. Our team is constantly working
              to improve Pygame Docs and add new features to make it even more
              useful. If you have any feedback or suggestions, please do not
              hesitate to{" "}
              <a
                href="huntermacias20@gmail.com"
                className="text-emerald-400 hover:text-emerald-300"
              >
                contact us
              </a>
              !
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              Our team consists of experienced Pygame developers who are
              passionate about creating high-quality software and documentation.
              We are dedicated to providing the best possible documentation
              experience for Pygame developers around the world.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              If you are interested in joining our team or contributing to
              Pygame Docs in any way, please{" "}
              <a
                href="huntermacias20@gmail.com"
                className="text-emerald-400 hover:text-emerald-300"
              >
                contact us
              </a>
              ! We would love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
