import { Outlet } from 'react-router-dom'
import Alert from './Alert'
import Footer from './Footer'
import Navbar from './Navbar'

export default function RootLayout() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Alert />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
