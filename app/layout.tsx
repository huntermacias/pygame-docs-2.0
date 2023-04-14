import Head from 'next/head';
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import './globals.css'


export const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  title: 'PyGame Documentation 2.0',
  description: 'A better UI for PyGame Documentation',
  colorScheme: 'dark',
  creator: 'Hunter Macias',
  image: 'https://hackaday.com/wp-content/uploads/2020/10/pygame2_feat.png?w=800', 
  icons: {
    icon: 'https://hackaday.com/wp-content/uploads/2020/10/pygame2_feat.png?w=800',
    shortcut: 'https://hackaday.com/wp-content/uploads/2020/10/pygame2_feat.png?w=800',
    apple: 'https://hackaday.com/wp-content/uploads/2020/10/pygame2_feat.png?w=800',
    other: {
      rel: 'pygame-documentation',
      url: 'https://hackaday.com/wp-content/uploads/2020/10/pygame2_feat.png?w=800',
    },
  },
  icon: 'https://hackaday.com/wp-content/uploads/2020/10/pygame2_feat.png?w=800',
  twitter: {
    card: 'summary_large_image',
    title: 'PyGame Documentation 2.0',
    description: 'A better UI for PyGame Documentation',
    siteId: '1467726470533754880',
    creator: 'Hunter Macias',
    creatorId: '1467726470533754880',
    images: ['https://hackaday.com/wp-content/uploads/2020/10/pygame2_feat.png?w=800'],
  },
}



function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>Pygame Documentation 2.0</title>
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:card" content={metadata.twitter.description} />
      </Head>
      <body className="bg-gray-900 h-screen">
        <nav>
          <Navbar />
        </nav>
        {children}
        <br />
        <div className="md:block hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
