
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import '.././globals.css'

export const metadata = {
  title: 'PyGame Documentation 2.0',
  description: 'A better UI for PyGame Documentation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-900 h-screen'>
        <Navbar />  
		
        {children}

        <Footer />
        
      </body>
    </html>
  )
}
