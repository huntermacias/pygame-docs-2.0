import Footer from './footer';
import Navbar from './navbar';
import './../app/globals.css';

function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
