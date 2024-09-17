
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import GrievancePage from './assets/pages/GrievancePage'
import Auth from './assets/pages/Auth'
import PageNotFound from './assets/pages/PageNotFound'






function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Auth/>}></Route>
      <Route path='/register' element={<Auth register/>}></Route>
      <Route path='/grievancepage' element={<GrievancePage/>}></Route>
      {/* to access the page that is not set */}
      <Route path='*' element={<PageNotFound/>}></Route>
     </Routes>
    
    </>
  )
}

export default App
