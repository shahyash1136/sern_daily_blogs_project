import Auth from '@/components/Auth/Auth'
import { Route, Routes } from 'react-router-dom'
import Blogs from '@/components/Blogs/Blogs'
import BlogDetails from './components/Blogs/BlogDetails'
function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='/auth' element={<Auth />} />

      </Routes>
    </div>


  )
}

export default App
