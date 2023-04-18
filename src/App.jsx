import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import { GithubProvider } from './context/github/GithubContext'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default function App() {
  return (
    <GithubProvider>
      <RouterProvider router={router} />
    </GithubProvider>
  )
}
