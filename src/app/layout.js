import './globals.css';
import { Inter, Roboto, Poppins } from 'next/font/google';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from "@/components/AuthProvider/AuthProvider";
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Dev',
  description: 'This is description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
        <div className='container'>
        <NavBar/>
          {children}
          <Footer />
            </div>
            </AuthProvider>
          </ThemeProvider>
      </body>
    </html>
  )
}
