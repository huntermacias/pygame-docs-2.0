import './globals.css';
import Head from 'next/head';
import HomeNav from '../components/HomeNav';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Pygame Documentation 2.0</title>
      </Head>
      <body className="bg-gray-900 h-screen">
        <nav>
          <Navbar />
        </nav>
        <HomeNav />
        <main>{children}</main>
        <br />
        <div className="md:block hidden">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default RootLayout;

