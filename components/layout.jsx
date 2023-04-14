import Footer from './footer';
import Navbar from './navbar';
import './../app/globals.css';

function RootLayout({ children }) {
  return (
    <div className="h-screen bg-gray-900">
      <nav>
        <Navbar />
      </nav>
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
