import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>Content</main>
        <footer>Footer</footer>
      </div>
    </Router>
  )
}
