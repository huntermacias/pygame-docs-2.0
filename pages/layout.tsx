import Footer from './../components/footer'
import Navbar from './../components/navbar'
import './../app/globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className='bg-gray-900 h-screen'>
        {/* <nav></nav> */}
        <Navbar />  
        
        {children}
        <br />

        <div className="md:block hidden">
          <Footer />
        </div>
        
      </body>
    </html>
  )
}
