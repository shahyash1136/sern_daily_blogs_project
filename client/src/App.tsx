import Auth from '@/components/Auth/Auth'
import { Route, Routes } from 'react-router-dom'
import Blogs from '@/components/Blogs/Blogs'
function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </div>


  )
}

export default App
