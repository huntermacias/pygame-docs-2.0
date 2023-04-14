import Footer from '../components/footer'
import Navbar from '../components/navbar'
import './globals.css'




function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pygame Documentation 2.0</title>
       
      </head>
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
