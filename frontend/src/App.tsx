import './App.css'
import { lazy } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const SignUp = lazy(() => import('./pages/SignUp'))
const Signin = lazy(() => import('./pages/Signin'))
const Blog = lazy(() => import('./pages/Blog'))
const Blogs = lazy(() => import('./pages/Blogs'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage'
import Publish from './components/Publish'
function App() {

  return (
    <div className='w-screen overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/publish" element={<Publish/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </div>
  )
}

export default App
